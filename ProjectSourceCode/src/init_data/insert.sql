-- Seed data for development
-- Passwords are hashed with bcrypt (cost factor 10)

-- admin / password: admin1302
INSERT INTO users (username, email, password)
VALUES (
  'admin',
  'admin@flickpick.com',
  '$2b$10$Q3R1xJvX5KzUeW2mN8pLOuZ6YvHsDcFbGtAkMwXnPqIrElTsVyjCu'
)
ON CONFLICT DO NOTHING;
