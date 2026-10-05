# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: recruiters and hiring managers evaluating Muhammad Hafiz Ruslan for a full-stack / Laravel engineering role. They arrive from a job application, LinkedIn, or a shared link, scan fast, and decide whether to open the Resume/CV and reach out. Secondary (confirmed lower priority): contract or freelance clients.

## Product Purpose
A single-page personal portfolio that proves Hafiz is a strong full-stack engineer (PHP/Laravel, Vue.js, Node.js) and gets the visitor to view the Resume or CV, or make contact. Success: a recruiter finds the experience and documents quickly and leaves with a clear picture of his level.

## Positioning
Concrete, measurable engineering wins rather than generic claims: a LaTeX invoice engine generating 1,000+ PDF pages in seconds, a booking platform managing 300+ rooms across 80+ levels, 7+ deployed client systems, and a first-class Computer Science degree from UiTM (CGPA 3.53).

## Operating Context
Visitors read the page top to bottom on desktop and mobile. Sections in order: Hero, Skills, Experience, Education, Work (projects), Services, Testimonial, Contact, Footer. Also served: /about, /work, /services, /contact sub-views. Content lives in `resources/js/data/portfolio-data.ts`.

## Capabilities and Constraints
- Laravel 9 serves a Blade shell (`resources/views/vfolio/index.blade.php`) that mounts a React + TypeScript + Tailwind app built by Vite.
- Contact form posts to `sendEmail` with a simple anti-spam question.
- Resume and CV PDFs are in `public/assets/file/` and open in a new tab (not forced download).
- The user wants the existing section layout kept.

## Evidence on Hand
- Real work history, education, projects, skills, and stats in `portfolio-data.ts`.
- Portrait `public/assets/img/person.jpg` and team photos used in Experience.
- Resume and CV 2026 PDFs.
- One testimonial section exists; do not invent more testimonials, clients, or metrics.

## Product Principles
- Get recruiters to the evidence fast: experience, numbers, documents.
- Specific beats grand: every claim maps to a real project or number.
- The visitor should always know where they are on the page and how much is left.
- Keep it readable in every lighting condition, so the visitor chooses light or dark.
