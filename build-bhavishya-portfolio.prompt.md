---
name: Build Bhavishya Portfolio
agent: agent
---

# Build a Modern Personal Portfolio Website Using React.js

Create a polished, responsive, single-page personal portfolio website for **O. Bhavishya Lakshmi**, a Computer Science student and AI & Data Science enthusiast.

## Project setup

- If this workspace is empty, scaffold a Vite React application in the workspace.
- Use React.js with functional components and a component-based architecture.
- Use CSS or Tailwind CSS, whichever best supports a polished result. Prefer a dedicated stylesheet with CSS variables if Tailwind is not already configured.
- Install and use `react-icons` for interface and technology icons.
- Keep the project easy to deploy with standard Vite commands.
- Organize reusable components in a clean structure, for example:
  - `src/components/Navbar.jsx`
  - `src/components/Hero.jsx`
  - `src/components/About.jsx`
  - `src/components/Education.jsx`
  - `src/components/Skills.jsx`
  - `src/components/Projects.jsx`
  - `src/components/Certifications.jsx`
  - `src/components/Contact.jsx`
  - `src/components/Footer.jsx`

## Personal information

- Name: O. Bhavishya Lakshmi
- Tagline: Computer Science Student | AI & Data Science Enthusiast
- Degree: B. Tech in Artificial Intelligence and Data Science
- University: REVA University
- Location: Kadapa District
- PUC: REVA Independent PU College

Use this introduction where appropriate:

> Hello! I'm O. Bhavishya Lakshmi, a Computer Science student currently pursuing a B. Tech in Artificial Intelligence and Data Science at REVA University. I am from Kadapa District and completed my PUC at REVA Independent PU College. I am interested in creating new things, learning new technologies, programming, and developing innovative projects. I enjoy improving my technical skills and working with others to solve problems.

## Page structure

Build the sections in exactly this order, with matching navigation anchors:

1. Home
2. About
3. Education
4. Skills
5. Projects
6. Certifications
7. Contact

### 1. Home / Hero

Display:

- O. Bhavishya Lakshmi
- Computer Science Student | AI & Data Science Enthusiast
- Short introduction: “Hello! I am a B. Tech student specializing in Artificial Intelligence and Data Science at REVA University. I am passionate about programming, learning new technologies, and creating innovative projects.”
- An accessible profile-photo placeholder labeled **Add Profile Photo Here**. Make it easy to replace later.
- Primary button: **View My Projects**, scrolling to Projects
- Secondary button: **Contact Me**, scrolling to Contact
- Social icons and links for GitHub, LinkedIn, and email

Use placeholder URLs for GitHub and LinkedIn, clearly centralized so they are easy to replace. Use `mailto:obulambhavishya@gmail.com` for email.

### 2. About Me

Include this content:

> I am O. Bhavishya Lakshmi, a passionate Computer Science student pursuing a B. Tech degree in Artificial Intelligence and Data Science at REVA University. I enjoy learning new technologies, programming, and building creative projects. I am interested in developing my skills in Python, C, Advanced C, Artificial Intelligence, and Data Science.

Add four compact information cards:

- B. Tech AI & Data Science
- REVA University
- Interested in Creating New Things
- Aspiring Software / Technology Professional

### 3. Education

Create an attractive academic timeline or card layout using icons:

**REVA University**

- Degree: B. Tech in Artificial Intelligence and Data Science
- Current Semester: 2nd Semester
- SGPA: 7.95

**REVA Independent PU College**

- Completed Pre-University Course (PUC)

### 4. Skills

Create animated skill cards or progress-style cards with appropriate icons.

Technical skills:

- Python
- C Programming
- Advanced C

Professional skills:

- Communication
- Teamwork
- Problem Solving
- Creativity
- Quick Learning

Use subtle, accessible animations that do not prevent keyboard or screen-reader use.

### 5. Projects

Create modern project cards with technology tags and buttons labeled **View Project** and **GitHub**. Use placeholder URLs for both project links.

**2D Graphics Editor**

Description: A menu-driven graphics editor developed using C. It uses a 2D character array as a drawing canvas and lets users create and manage graphical objects.

Features:

- Draw Rectangle
- Draw Line
- Draw Triangle
- Draw Circle
- Add Objects
- Delete Objects
- Modify Objects
- Display Canvas

Technologies: C Programming, Arrays, Functions, Menu-Driven Programming

**Library Management System**

Description: A Library Management System designed to manage books and library-related operations efficiently.

Possible features:

- Add Books
- View Books
- Search Books
- Issue Books
- Return Books
- Manage Library Records

### 6. Achievements & Certifications

Create visually attractive certificate cards with a certificate icon, course name, organization, and a **View Certificate** button. Use placeholder certificate links centralized for easy replacement.

Include:

1. IBM Skills Build - Online Course and Certificate
2. Instagram Design System - Online Course and Certificate
3. Wadhwani Foundation - Course and Certificate
4. My Caption - Online Course and Certificate

### 7. Contact

Display:

- Email: `obulambhavishya@gmail.com`
- Phone: `+91 7416040708`

Add a contact form with:

- Name
- Email
- Subject
- Message
- Send Message button

Implement client-side validation for required fields and valid email format. Show clear accessible success and error states. Since there is no backend, prevent the default submit and provide a polished demo success state without pretending that a message was actually sent.

### 8. Footer

Include:

> © 2026 O. Bhavishya Lakshmi. All Rights Reserved.

Also include GitHub, LinkedIn, and email icons.

## Visual and interaction direction

Create a modern student/developer portfolio that feels professional, confident, and distinctive rather than template-like.

- Fully responsive across mobile, tablet, and desktop.
- Sticky navigation bar with a compact mobile menu.
- Smooth scrolling navigation.
- Highlight the active navigation link based on the visible section.
- Include a working dark/light mode toggle and persist the selected theme in `localStorage`.
- Use CSS variables, a restrained multi-color palette, attractive gradients, professional expressive typography, clean spacing, and subtle shadows.
- Use cards only for repeated items such as education, skills, projects, and certifications; avoid nesting cards inside cards.
- Add tasteful page-load and scroll-reveal animations with reduced-motion support.
- Use stable dimensions for buttons, icons, cards, grids, and timeline elements to prevent layout shifts.
- Use lucide-style or `react-icons` icons inside buttons where useful, with accessible labels and tooltips for unfamiliar icon-only controls.
- Ensure strong color contrast, visible keyboard focus states, semantic HTML, meaningful alt text, and sensible heading hierarchy.
- Do not use lorem ipsum, fake metrics, or invented certificate details.
- Do not use a generic marketing landing-page hero. Make the portfolio experience itself the first screen.

## Implementation quality

- Keep data such as navigation items, skills, projects, certifications, and social URLs in maintainable arrays/objects where practical.
- Avoid unnecessary dependencies and avoid inline SVGs when a suitable `react-icons` icon exists.
- Make all buttons and links functional, including anchor scrolling, theme toggle, mobile navigation, form validation, and placeholder links.
- Check that text never overlaps or overflows on narrow screens.
- Run the project and verify the page at desktop and mobile widths.
- Run the production build before finishing and fix any errors or warnings caused by the implementation.
- At the end, briefly report the files created or changed, the run command, and which URLs still use placeholders.
