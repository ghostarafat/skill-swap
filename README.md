# SkillSwap

## **Live URL:** [https://assignment9b12.netlify.app]

## Purpose

SkillSwap is a web application that allows users to learn new skills and share their own skills with others. Users can explore various skill categories, view detailed skill information, and book sessions with skill providers. Authentication ensures only registered users can access certain features like booking a session or viewing skill details.

---

## Key Features

- **Home Page**

  - Welcome section with brief description
  - Popular skills displayed with interactive cards
  - Top rated providers section
  - "How It Works" section explaining the process
  - Community stories from users

- **Skill Details**

  - Full information about each skill including provider, price, rating, and availability
  - Booking form with success notification

- **All Skills Page**

  - Displays all available skills in one page
  - Clickable cards to view details (accessible only to logged-in users)

- **Authentication**

  - Sign up and login with Firebase Email/Password
  - Private routes ensure restricted access for certain pages

- **Responsive Design**

  - Fully responsive layout for mobile, tablet, and desktop
  - Smooth hover effects and animations

- **Animations & Feedback**
  - Scroll animations with **AOS**
  - Notifications with **React Hot Toast**
  - Smooth card hover effects using CSS transitions

---

## NPM Packages Used

- **react-router-dom** – For routing and navigation
- **firebase** – For authentication
- **react-hot-toast** – For notifications
- **aos** – Scroll animations
- **react-icons** – Icons in Navbar and other sections
