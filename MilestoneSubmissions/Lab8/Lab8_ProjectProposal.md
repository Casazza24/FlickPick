# FlickPick — Project Proposal
**Team 1302 | CSCI 3308**

---

## 1. Team Number
**1302**

---

## 2. Team Name

---

## 3. Team Members

| First & Last Name | GitHub Username | Email |
|-------------------|-----------------|-------|
| [Matthew Casazza] | [Casazza24] | [maca6216@colorado.edu] |
| [Rohith Ratheesh] | [industrybby] | [rora1409l@colorado.edu] |
| [Page Howland] | [page-h] | [paho6505@colorado.edu] |
| [Alitzel Aguilar] | [alitzel-a] | [alag5627@colorado.edu] |
| [Masone English] | [Masone1811] | [maen9417@colorado.edu] |

---

## 4. Application Name
**FlickPick**

---

## 5. Application Description

FlickPick is a mobile-first web application that reimagines movie discovery by combining the intuitive swipe-based interaction popularized by dating apps like Tinder and Hinge with a rich movie database. Users are presented with movie cards featuring posters, ratings, genres, and brief synopses, and can swipe right to add a movie to their watchlist or swipe left to pass. Over time, FlickPick learns each user's preferences and surfaces increasingly personalized recommendations, making it effortless to find your next favorite film.

Beyond individual discovery, FlickPick offers a powerful group-matching feature. Users can create a watch session with friends, and the app identifies movies that everyone in the group has swiped right on — or that align with the group's collective taste. This eliminates the all-too-common struggle of deciding what to watch together, turning a frustrating group decision into a fun, gamified experience.

FlickPick bridges the gap between passive browsing on traditional movie platforms and active, engaging discovery. Whether you're a solo viewer looking for hidden gems or a group of friends planning a movie night, FlickPick provides a fast, fun, and social way to find the perfect film.

---

## 6. Audience

FlickPick's primary audience is young adults aged 18–35 — college students and early-career professionals — who are comfortable with mobile-first, swipe-based interfaces and consume content across multiple streaming platforms. These users are often overwhelmed by the sheer volume of choices on services like Netflix, Hulu, and HBO Max, leading to "decision fatigue" where they spend more time browsing than watching.

The ideal FlickPick user is socially active and frequently watches movies with friends, roommates, or partners. They are frustrated by the group decision-making process and want a quick, democratic way to find a movie everyone will enjoy. They value personalization, speed, and a visually engaging experience over reading long reviews or scrolling through endless catalogs.

From an accessibility standpoint, FlickPick will feature a clean, high-contrast interface with large touch targets for swiping, support for screen readers, and simple navigation that requires minimal onboarding.

---

## 7. Vision Statement

For movie lovers and social viewers, who are overwhelmed by endless catalogs and the hassle of choosing what to watch together. FlickPick is a swipe-based movie discovery app that makes finding your next favorite film fast, fun, and social. Unlike traditional streaming platforms that rely on passive browsing, FlickPick turns movie discovery into an engaging, personalized experience and helps groups instantly find films they'll all enjoy.

---

## 8. Version Control

**GitHub Repository:** [https://github.com/CSCI3308-FInal-Project/FlickPick]

Repository structure:
```
FlickPick/
├── TeamMeetingLogs/
├── MilestoneSubmissions/
├── ProjectSourceCode/
└── README.md
```

All team members have been added as collaborators. The repository is public. A `.gitignore` is included in `ProjectSourceCode/` to exclude `node_modules/`, `.env`, and `package-lock.json`.

---

## 9. Development Methodology


---

## 10. Communication Plan

The team will use **[FILL IN — e.g., Discord / Slack / MS Teams]** as the primary communication tool for day-to-day coordination and async updates. Task-specific discussions will be tracked as comments directly on GitHub Issues to keep conversations organized and on-topic. The team will refrain from using personal text messages for project coordination.

---

## 11. Meeting Plan

**Team Meetings:**
- **Day/Time:** [Tuesdays at 3:00 PM]
- **Mode:** [In-person/Zoom]
- **Location:** [Engineering Center/Zoom]

**Weekly TA Meeting:**
- **Day/Time:** [2:30-2:45 pm Tuesday]
- **Mode:** [Zoom]

---

## 12. Use Case Diagram

> **Note:** The diagram image file is located at `MilestoneSubmissions/use_case_diagram.png`.

The diagram covers the following 6+ key features and actor interactions:

| Actor | Use Case |
|-------|----------|
| User | Register an account |
| User | Log in / Log out |
| User | Swipe right (save) or left (pass) on a movie card |
| User | View and manage personal Watchlist |
| User | View personalized movie recommendations |
| User | Create a Group Watch Session and invite friends |
| User | View Group Watch results (mutual matches) |
| Admin | View and manage user accounts |

**Actors:** Registered User, Guest (unauthenticated), Admin, External Movie API (TMDb)

---

## 13. Wireframes

> **Note:** Wireframe images are located in `MilestoneSubmissions/wireframes/`.

The following pages have been wireframed:

| Page | Description |
|------|-------------|
| **Login** | Username/password form with link to Register |
| **Register** | Username, email, password fields with link to Login |
| **Home / Swipe** | Full-screen movie card with Pass and Save buttons; top nav with logo and logout |
| **Watchlist** | Grid of saved movie cards; each card has a remove option |
| **Group Session** | Create/join session flow; shows real-time mutual swipe results |
| **Profile** | User info, favorite genres derived from swipe history, stats |

Each wireframe shows the page layout, navigation elements, and key interactive components at low fidelity.

---

## Tech Stack (TBD)

> Update this section as architectural decisions are made.

- **Frontend:**
- **Backend:**
- **Database:**
- **Movie Data API:**
- **Authentication:**
- **Hosting/Deployment:**
