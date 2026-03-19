const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const pgp = require('pg-promise')();
const path = require('path');

const app = express();

// Database connection
const db = pgp({
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT || 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

// Handlebars setup
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'resources')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);

// Auth guard
const requireAuth = (req, res, next) => {
  if (!req.session.user) return res.redirect('/login');
  next();
};

// ─── Routes ──────────────────────────────────────────────────────────────────

app.get('/', requireAuth, (req, res) => {
  res.render('pages/home', { user: req.session.user });
});

app.get('/login', (req, res) => {
  res.render('pages/login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.render('pages/login', { message: 'Invalid username or password.' });
    }
    req.session.user = { id: user.id, username: user.username };
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.render('pages/login', { message: 'Something went wrong. Please try again.' });
  }
});

app.get('/register', (req, res) => {
  res.render('pages/register');
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    await db.none(
      'INSERT INTO users(username, email, password) VALUES($1, $2, $3)',
      [username, email, hashed]
    );
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.render('pages/register', { message: 'Username or email already taken.' });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// ─── Wireframes ───────────────────────────────────────────────────────────────

app.get('/wireframes', (_, res) => res.render('pages/wireframes'));
app.get('/wireframes/login', (_, res) => res.render('pages/wireframe-login'));
app.get('/wireframes/register', (_, res) => res.render('pages/wireframe-register'));
app.get('/wireframes/home', (_, res) => res.render('pages/wireframe-home'));
app.get('/wireframes/watchlist', (_, res) => res.render('pages/wireframe-watchlist'));
app.get('/wireframes/group-session', (_, res) => res.render('pages/wireframe-group-session'));
app.get('/wireframes/profile', (_, res) => res.render('pages/wireframe-profile'));

// ─── Start ────────────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`FlickPick running on port ${PORT}`));

module.exports = app;
