export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "Fullstack" | "High Performance" | "Enterprise" | "Frontend & UI" | "Systems";
  tags: string[];
  metrics: string;
  highlight: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
  year: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string; tag?: string }[];
}

export interface ServicePack {
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  linkedInPostUrl: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Hafiz Ruslan",
    shortName: "Hafiz Ruslan",
    title: "Laravel Fullstack Web Developer & Software Engineer",
    tagline: "I craft high-throughput web systems, cinematic interfaces, and scalable backend architectures.",
    bio: "Passionate Laravel and Fullstack Engineer based in Malaysia. Known for building high-performance architectures (like generating 1,000+ PDF invoice pages in seconds using LaTeX) and managing complex multi-tenant booking platforms (300+ rooms across 80+ levels). First-class honors Computer Science graduate from UiTM.",
    location: "Banting & Kuala Lumpur, Malaysia",
    origin: "Kuala Lumpur, Malaysia",
    age: 28,
    email: "hafizruslan98@gmail.com",
    alternateEmail: "hafizcoolman@gmail.com",
    github: "https://github.com/SirCoolMind",
    linkedin: "https://www.linkedin.com/in/hafizruslan98/",
    resumeUrl: "/assets/file/Resume Muhammad Hafiz Ruslan.pdf",
    avatar: "/assets/img/person.jpg",
    status: "Open for Fullstack Engineering & High-Impact Contracts",
    combatSpamAnswer: "19", // 17 + 2
  },

  stats: [
    { label: "LaTeX PDF Speed", value: "1000+", unit: "pgs/sec", desc: "Ultra-fast document engine" },
    { label: "Managed Capacity", value: "300+", unit: "rooms", desc: "Across 80+ building levels" },
    { label: "Live Client Projects", value: "7+", unit: "deployed", desc: "Enterprise scale systems" },
    { label: "Academic CGPA", value: "3.53", unit: "1st Class", desc: "UiTM Computer Science" },
  ],

  workExperience: [
    {
      company: "IMT Tech Sdn Bhd",
      role: "PHP Programmer / Fullstack Engineer",
      period: "Jul 2023 — Present",
      location: "Malaysia",
      badge: "Current Role",
      description: [
        "Architected and implemented LaTeX as an ultra-fast asynchronous PDF invoice compilation pipeline, optimized to generate 1,000+ invoice pages in seconds under high enterprise throughput.",
        "Engineered an adaptive room booking engine supporting 300+ rooms distributed across 80+ building levels with dynamic real-time slot resolution and zero booking collision.",
        "Collaborated closely with senior technical leads (10+ years experience), delivering high-velocity backend APIs and responsive administrative dashboards.",
      ],
      tech: ["Laravel", "PHP", "LaTeX", "MySQL", "Redis", "Vue.js", "REST APIs"],
    },
    {
      company: "Unijaya Resources Sdn Bhd",
      role: "PHP Developer",
      period: "Sep 2021 — May 2023",
      location: "Malaysia",
      badge: "7 Live Systems",
      description: [
        "Spearheaded development and maintenance across 7 live client web applications, 4 active pipelines, and 3 internal microservices.",
        "Overhauled database query indexing and API response times, slashing latency by up to 40% across heavy transaction tables.",
        "Modernized frontend UI/UX workflows and instituted team-wide code standards and Git flow practices.",
      ],
      tech: ["Laravel", "PHP", "Vue.js", "MySQL", "Bootstrap", "REST APIs", "Spatie Roles"],
    },
    {
      company: "Leadmind Sdn Bhd",
      role: "Internship Lead Programming",
      period: "Mar 2021 — Aug 2021",
      location: "Malaysia",
      badge: "MERN Stack",
      description: [
        "Built a complete customer acquisition and lead management web application using the MERN stack (MongoDB, Express, React, Node.js) handling 1,000+ active enterprise leads.",
        "Rapidly self-learned and migrated legacy Java codebase to modern TypeScript/JavaScript MERN stack within strict deadlines.",
        "Implemented real-time filtering, fuzzy search indexing, and automated sales pipeline status dispatchers.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    },
  ] as WorkExperience[],

  education: [
    {
      degree: "Bachelor Degree of Computer Science",
      institution: "Universiti Teknologi MARA (UiTM)",
      period: "2018 — 2021",
      grade: "CGPA: 3.53 (First-Class Honors)",
      highlights: [
        "First-Class Honors Graduate combining academic excellence with university community leadership.",
        "Project Leader for Build-IT KICTM (2019).",
        "Lead Instructor for Computer Science Association (CSA) Workshop (2020).",
        "Active Committee Member in Sekretariat Mahasiswa Fakulti (SMF) & Computer Science Association (CSA).",
      ],
    },
    {
      degree: "Science PST Module II",
      institution: "Selangor Matriculation College",
      period: "2016 — 2017",
      grade: "CGPA: 3.83",
      highlights: [
        "Excellence in Mathematics, Physics, and Computer Science foundation.",
        "Appointed Peer Guidance Leader (Pembimbing Rakan Sebaya — PRD).",
      ],
    },
    {
      degree: "Pure Science (SPM)",
      institution: "Sekolah Menengah Kebangsaan Padang Tembak",
      period: "2011 — 2015",
      grade: "6A 2B 2C",
      highlights: [
        "School Prefect (Form 1 — Form 5), Class Monitor, and Entrepreneurship Club Executive.",
      ],
    },
  ] as EducationItem[],

  skillCategories: [
    {
      title: "Front-End",
      skills: [
        { name: "Vue.js", level: 92, icon: "vuejs", tag: "Advanced" },
        { name: "React.js / Next.js", level: 88, icon: "react", tag: "Modern Stack" },
        { name: "Laravel Blade", level: 95, icon: "laravel", tag: "Expert" },
        { name: "Tailwind CSS", level: 94, icon: "tailwind", tag: "Modern UI" },
        { name: "TypeScript / JS (ES6+)", level: 90, icon: "typescript", tag: "Core" },
        { name: "SASS / SCSS", level: 85, icon: "sass", tag: "Styling" },
      ],
    },
    {
      title: "Back-End & Engines",
      skills: [
        { name: "PHP (7.4 — 8.3)", level: 96, icon: "php", tag: "Core Mastery" },
        { name: "Laravel Framework", level: 95, icon: "laravel", tag: "Architecture" },
        { name: "Node.js & Express", level: 86, icon: "nodejs", tag: "Async APIs" },
        { name: "LaTeX PDF Engine", level: 92, icon: "latex", tag: "High Throughput" },
        { name: "RESTful & GraphQL APIs", level: 92, icon: "api", tag: "Integration" },
      ],
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "MySQL (Optimization & Indexing)", level: 94, icon: "mysql", tag: "Relational" },
        { name: "MongoDB", level: 84, icon: "mongodb", tag: "NoSQL" },
        { name: "Redis", level: 85, icon: "redis", tag: "Caching" },
        { name: "SQLite", level: 90, icon: "sqlite", tag: "Lightweight" },
      ],
    },
    {
      title: "DevOps & Tooling",
      skills: [
        { name: "Git / GitHub Desktop", level: 95, icon: "git", tag: "Version Control" },
        { name: "Docker & Containers", level: 82, icon: "docker", tag: "Containerization" },
        { name: "Homestead / Vagrant", level: 88, icon: "homestead", tag: "Dev Environment" },
        { name: "Laragon / WAMP", level: 92, icon: "laragon", tag: "Local Server" },
        { name: "Linux (Ubuntu/Debian)", level: 85, icon: "linux", tag: "Server Admin" },
        { name: "VirtualBox", level: 85, icon: "virtualbox", tag: "Virtualization" },
      ],
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "Problem Solving & Algorithmic Design", level: 99, icon: "brain", tag: "99% Metric" },
        { name: "Collaboration & Team Leadership", level: 95, icon: "users", tag: "95% Metric" },
        { name: "Attention to Detail & Code Cleanliness", level: 90, icon: "sparkles", tag: "90% Metric" },
        { name: "Creative Architecture & Fast Prototyping", level: 88, icon: "lightbulb", tag: "88% Metric" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "budget-tracker",
      title: "Budget Tracker Web Intelligence",
      subtitle: "Personal Expense Intelligence & Real-Time Financial Ledger",
      category: "Fullstack",
      tags: ["Laravel 9/10", "Vue.js", "MySQL", "ApexCharts", "Tailwind CSS"],
      metrics: "Sub-100ms Query Aggregation across 10,000+ Transactions",
      highlight: "Interactive personal budgeting platform with daily spend heatmaps, category hierarchies, and instant visual trend forecasting.",
      problem: "Traditional expense trackers suffer from slow daily SQL aggregation loops and clunky multi-step expense entries, making habit tracking tedious.",
      solution: "Engineered single-pass SQL grouped aggregation (`DAY(date_spent), SUM(money_spent)`) paired with snappy Vue.js reactive modals and automated weekly pacing alerts.",
      architecture: [
        "Single-pass indexed SQL grouping eliminating N+1 daily loops",
        "Reactive modal transaction drawer with instant balance reconciliations",
        "Spatie permission-controlled multi-currency workspace",
      ],
      techStack: ["Laravel", "PHP 8.2", "Vue 3", "MySQL", "ApexCharts"],
      demoUrl: "https://tracker.hafiz.day",
      githubUrl: "https://github.com/SirCoolMind/vFolio_Hafiz",
      image: "/assets/img/coming_soon_1.png",
      featured: true,
      year: "2024",
    },
    {
      id: "latex-invoice-engine",
      title: "Ultra-Fast LaTeX PDF Invoice Pipeline",
      subtitle: "High-Throughput Asynchronous Document Generation Engine",
      category: "High Performance",
      tags: ["PHP 8.2", "LaTeX", "Node.js", "Redis Queues", "Linux CLI"],
      metrics: "1,000+ Custom Invoice Pages Compiled in Seconds",
      highlight: "Engineered an asynchronous LaTeX PDF generation microservice outperforming legacy DomPDF / TCPDF by over 800% in generation speed and pixel precision.",
      problem: "Client invoice batches with hundreds of pages were timing out on standard PHP DOM-based PDF generation engines.",
      solution: "Built a customized LaTeX compilation pipeline using templated markup engines and background Redis worker pools with zero memory leaks.",
      architecture: [
        "Asynchronous Redis-backed job worker pipeline",
        "Optimized headless LaTeX rendering daemon",
        "Vector-perfect financial typography with dynamic QR codes & digital stamps",
      ],
      techStack: ["PHP 8.2", "LaTeX", "Redis", "Laravel Queues", "Ubuntu CLI"],
      featured: true,
      year: "2023",
    },
    {
      id: "room-booking-system",
      title: "Multi-Level Adaptive Room Booking System",
      subtitle: "Enterprise Facility Allocation Engine across 80+ Building Floors",
      category: "Enterprise",
      tags: ["Laravel", "MySQL", "Vue.js", "WebSockets", "FullCalendar"],
      metrics: "Manages 300+ Concurrent Rooms across 80+ Physical Floors",
      highlight: "Comprehensive space allocation platform with slot collision avoidance, variable hourly slots, and multi-tier approval workflows.",
      problem: "Managing 300+ multi-purpose rooms in a high-rise tower caused double bookings and fragmented schedule updates.",
      solution: "Developed an algorithmic timeline collision engine with optimistic locking, floor-level spatial visualizers, and instant calendar sync.",
      architecture: [
        "Time-range overlap matrix algorithms with optimistic concurrency locking",
        "Multi-level building floor plan SVG mapping",
        "Automated notification triggers for security clearance and room key issuance",
      ],
      techStack: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS", "Pusher WebSockets"],
      featured: true,
      year: "2023",
    },
    {
      id: "leadmind-crm",
      title: "LeadMind MERN Lead Management Engine",
      subtitle: "High-Throughput Customer Lead Engine & Algorithmic Sorting",
      category: "Fullstack",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth"],
      metrics: "1,000+ Enterprise Leads Managed with <50ms Instant Search",
      highlight: "Modernized lead qualification engine built during an intensive tech migration from legacy Java to a fluid MERN architecture.",
      problem: "Legacy desktop Java app created bottlenecks in distributed sales team operations and lacked responsive mobile access.",
      solution: "Rebuilt from scratch as a cloud-native MERN app featuring fuzzy search indexing, role-based pipeline columns, and real-time status notifications.",
      architecture: [
        "MongoDB compound indexing on lead score and disposition status",
        "Express REST micro-router with strict token authentication",
        "React virtualized table rendering smooth 60fps infinite scroll",
      ],
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      featured: true,
      year: "2021",
    },
    {
      id: "unijaya-enterprise-suite",
      title: "Unijaya Enterprise Multi-Client Platform Suite",
      subtitle: "Ecosystem of 7 Live Deployed Client Web Portals & Microservices",
      category: "Enterprise",
      tags: ["Laravel 9", "Vuexy Admin", "MySQL", "Spatie Roles", "REST APIs"],
      metrics: "7 Enterprise Production Portals & 40% Query Latency Reduction",
      highlight: "Fullstack architecture, database indexing, and API modernization across 7 live client web applications.",
      problem: "Disjointed codebases across multiple client projects required unified code standards, robust RBAC, and responsive dashboards.",
      solution: "Standardized on modular Laravel micro-services with centralized Spatie role management, DataTables integration, and reusable UI components.",
      architecture: [
        "Spatie Role & Permission granularity across hundreds of enterprise users",
        "Yajra DataTables backend server-side pagination with query optimization",
        "Impersonation audit trail for senior support technicians",
      ],
      techStack: ["Laravel 9", "Vuexy UI", "MySQL", "PHP 8.1", "Bootstrap 5"],
      featured: true,
      year: "2022",
    },
    {
      id: "timetracker-app",
      title: "TimeTracker Productivity & Billable Hours Suite",
      subtitle: "Cross-Platform Worklog & Automated Invoice Dispatcher",
      category: "Systems",
      tags: ["Laravel", "React", "MySQL", "PWA", "Chart.js"],
      metrics: "Automated timesheets with 100% billable hour tracking",
      highlight: "Time and productivity analytics suite empowering freelance and agency engineers to track project hours and auto-generate client invoices.",
      problem: "Manual spreadsheet time tracking caused delayed invoicing and unbilled developer work.",
      solution: "Engineered one-click desktop/mobile timer sync with automated threshold notifications, timesheet PDF export, and project budget dials.",
      architecture: [
        "Local-first IndexedDB offline sync with cloud reconciliation",
        "Dynamic hourly rate calculators per client contract",
        "Real-time burn-down charts for sprint allocations",
      ],
      techStack: ["Laravel", "React", "MySQL", "Tailwind CSS"],
      demoUrl: "https://timetracker.hafiz.day",
      featured: false,
      year: "2024",
    },
    {
      id: "vfolio-matrix",
      title: "Virtual Folio & Anti-Spam Security Matrix",
      subtitle: "Dynamic Multi-Theme Portfolio Hub with Bot Combat Engine",
      category: "Frontend & UI",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "PHP Backend", "Visitor Logs"],
      metrics: "100% Bot Filtering via Arithmetic Combat & Shetabit Logging",
      highlight: "Next-generation multi-theme portfolio engine with visitor session telemetry, custom math bot combat filter (`17 + 2`), and dynamic theme engine.",
      problem: "Generic portfolios suffer from cookie-cutter designs and spam contact submissions without telemetry on visitor behavior.",
      solution: "Created 10 cinematic award-winning design archetypes powered by a unified animation engine, dynamic math spam verification, and device fingerprint logging.",
      architecture: [
        "Next.js App Router with 10 distinct interactive design archetypes",
        "Dynamic arithmetic anti-spam challenge validation (`17 + 2 = 19`)",
        "Shetabit visit telemetry tracking browser, device, and request metrics",
      ],
      techStack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript", "Laravel"],
      demoUrl: "http://vfolio.test:8080",
      githubUrl: "https://github.com/SirCoolMind/vFolio_Hafiz",
      featured: true,
      year: "2026",
    },
    {
      id: "cloud-billing-ledger",
      title: "Automated Recurrent Billing & Financial Ledger",
      subtitle: "Enterprise Subscription & Double-Entry Accounting Engine",
      category: "Enterprise",
      tags: ["Laravel", "MySQL", "Stripe API", "Cron Queues", "Vue.js"],
      metrics: "Zero-Downtime Cron Dispatching for 5,000+ Monthly Invoices",
      highlight: "Robust financial ledger system with double-entry accounting rules, failed charge retries, and automated tax calculations.",
      problem: "Subscription businesses lost revenue due to failed payment webhooks and lack of auditable double-entry ledgers.",
      solution: "Built idempotent webhook consumers, automated dunning retry schedules, and real-time reconciliation ledgers.",
      architecture: [
        "Idempotent event-driven webhook processing",
        "Immutable ledger journal entries for compliance",
        "Automated monthly invoice dispatch with LaTeX rendering",
      ],
      techStack: ["Laravel", "MySQL", "Vue.js", "Stripe Webhooks"],
      featured: false,
      year: "2023",
    },
    {
      id: "uitm-buildit-portal",
      title: "UiTM Build-IT & CSA Community Hackathon Hub",
      subtitle: "Academic Workshop Distribution & Real-Time Hackathon Scoring",
      category: "Frontend & UI",
      tags: ["PHP", "JavaScript", "Bootstrap", "MySQL", "CSS3"],
      metrics: "300+ Students Coordinated & 50+ Hackathon Submissions Judged",
      highlight: "Platform created during leadership as Project Leader for Build-IT KICTM (2019) and Instructor for CSA Workshop (2020).",
      problem: "University hackathons suffered from fragmented Google Form submissions and manual score tabulations.",
      solution: "Engineered a centralized portal for real-time team registrations, workshop resource downloads, and multi-judge rubric scoring.",
      architecture: [
        "Multi-judge live scoring tabulation algorithm",
        "Workshop repository with code sandbox links",
        "Automated certificate generation for attendees",
      ],
      techStack: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      featured: false,
      year: "2020",
    },
    {
      id: "apex-telemetry-dashboard",
      title: "Apex Live Gaming & Systems Telemetry HUD",
      subtitle: "Low-Latency WebSocket Streaming & Server Health Monitor",
      category: "Systems",
      tags: ["React", "Node.js", "WebSockets", "Tailwind CSS", "Canvas API"],
      metrics: "60 FPS Real-Time Canvas Rendering with <20ms WebSocket Latency",
      highlight: "Cinematic HUD dashboard monitoring game streaming telemetry, memory/CPU metrics, and network packet health in real time.",
      problem: "Standard browser dashboards choke when rendering high-frequency 60Hz telemetry data streams.",
      solution: "Leveraged offscreen Canvas rendering and binary WebSocket streams to deliver buttery-smooth 60fps graph updates.",
      architecture: [
        "Offscreen HTML5 Canvas rendering engine for high-frequency tick charts",
        "Binary WebSocket packet unpacking minimizing payload overhead",
        "Custom cybernetic HUD audio-visual alert states",
      ],
      techStack: ["React", "TypeScript", "Node.js", "HTML5 Canvas", "Tailwind CSS"],
      featured: false,
      year: "2025",
    },
  ] as ProjectCaseStudy[],

  testimonials: [
    {
      quote: "Your dedication, passion, and commitment to excellence have been a true inspiration to us all. You've been an exceptional team player, and your leadership has been invaluable.",
      author: "Upper Management",
      role: "Executive Board",
      company: "Unijaya Resources Sdn Bhd",
      avatar: "/assets/img/logo/unijaya_logo.png",
      linkedInPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7069236571287269376/",
    },
  ] as Testimonial[],

  servicePacks: [
    {
      number: "01",
      title: "Enterprise Fullstack Web Development",
      subtitle: "Custom Web Applications & Multi-Tenant Portals",
      tag: "Project or Retainer",
      description: "End-to-end engineering from system architecture to deployment. Specializing in Laravel, Vue.js, React, and Next.js for high-demand business workflows.",
      deliverables: ["Modular MVC Architecture", "RESTful & GraphQL APIs", "Robust RBAC (Spatie)", "Responsive UI/UX"],
    },
    {
      number: "02",
      title: "High-Throughput Document Engines",
      subtitle: "Asynchronous PDF & Report Pipelines",
      tag: "Specialized Engine",
      description: "Ultra-fast document generation replacing sluggish DOM parsers. Capable of compiling 1,000+ custom PDF invoices in seconds with vector-perfect typography.",
      deliverables: ["LaTeX Engine Microservice", "Redis Queue Dispatchers", "Multi-Threaded Workers", "Dynamic Barcode/QR Code Embeds"],
    },
    {
      number: "03",
      title: "Complex Allocation & Booking Systems",
      subtitle: "Multi-Level Spatial Collision-Free Engines",
      tag: "Algorithmic Architecture",
      description: "Advanced scheduling platforms managing hundreds of concurrent resources across multi-level structures with zero double-booking risk.",
      deliverables: ["Time-Slot Overlap Resolution", "Optimistic Concurrency Locking", "Interactive Spatial Floor Maps", "Automated Approval Escalations"],
    },
    {
      number: "04",
      title: "Database Indexing & Query Latency Tuning",
      subtitle: "Database Optimization & Performance Sprints",
      tag: "Performance Sprint",
      description: "Deep audit of database queries, composite index design, and API bottlenecks, slashing latency by 40%+ across high-volume transaction databases.",
      deliverables: ["Slow Query Execution Plan Audits", "Composite & Covering Index Optimization", "Redis Caching Layers", "N+1 Elimination & Query Refactoring"],
    },
    {
      number: "05",
      title: "Code Modernization & Technical Mentorship",
      subtitle: "Legacy Tech Migration & Developer Coaching",
      tag: "Advisory / Mentorship",
      description: "Guidance on modern development standards, tech stack migrations (e.g. Java to MERN/Laravel), Git workflows, and clean code principles for engineering teams.",
      deliverables: ["Legacy Stack Migration Roadmaps", "Team Code Standardization & Git Flow", "1-on-1 Code Review & Mentorship", "Automated Testing & CI/CD Setup"],
    },
  ] as ServicePack[],

  designArchetypes: [
    {
      id: "1",
      slug: "cyber-hud",
      title: "Cyber-Kinetic Engineering HUD",
      subtitle: "Awwwards Developer Site of the Year Style",
      description: "High-tech monospace terminal HUD, neon telemetry metrics, reactive scanlines, magnetic wireframe grid, and live LaTeX benchmark engine.",
      color: "#00f0ff",
      badge: "Developer Award",
      previewBg: "from-cyan-950 via-slate-900 to-black",
    },
    {
      id: "2",
      slug: "swiss-luxe",
      title: "Swiss Minimalist Luxe & Editorial",
      subtitle: "Studio Freight / A24 / Kinfolk Lookbook",
      description: "Hyper-refined serif typography, asymmetrical editorial magazine spreads, paper noise textures, smooth inertia split-text reveals.",
      color: "#c44d2d",
      badge: "Editorial Masterpiece",
      previewBg: "from-amber-950 via-stone-900 to-stone-950",
    },
    {
      id: "3",
      slug: "bento-horizon",
      title: "Bento Grid Horizon & Obsidian Glass",
      subtitle: "Linear / Apple Pro / Raycast Ecosystem",
      description: "Frosted obsidian glass cards with mouse-following dynamic border spotlight glow, interactive booking simulator, and widget matrix.",
      color: "#6366f1",
      badge: "Next-Gen SaaS",
      previewBg: "from-indigo-950 via-slate-900 to-black",
    },
    {
      id: "4",
      slug: "spatial-cosmos",
      title: "Cinematic Spatial Nebula & 3D Depth",
      subtitle: "Apple Vision Pro / Active Theory Cosmos",
      description: "Deep space stardust particle canvas, 3D rotating glass stack glyphs, gravitational cursor interaction, and cosmic constellation map.",
      color: "#a855f7",
      badge: "Spatial 3D",
      previewBg: "from-purple-950 via-slate-950 to-black",
    },
    {
      id: "5",
      slug: "brutalist-dossier",
      title: "Monolithic Avant-Garde Brutalist Dossier",
      subtitle: "Off-White / Balenciaga / Locomotive Scroll",
      description: "Massive scale-warping typography, raw high-contrast black/white/yellow styling, classified dossier folder tabs, and difference invert cursor.",
      color: "#ffe600",
      badge: "Avant-Garde",
      previewBg: "from-yellow-950 via-zinc-900 to-black",
    },
    {
      id: "6",
      slug: "velvet-aurora",
      title: "Velvet Aurora Mesh & Glassmorphism",
      subtitle: "Stripe Press / macOS Sequoia / Vercel Ship",
      description: "Mesmerizing multi-color animated fluid aurora borealis blobs, chromatic dispersion hover effects, and spring-damped glass cards.",
      color: "#ec4899",
      badge: "Aesthetic Gold",
      previewBg: "from-pink-950 via-purple-950 to-slate-950",
    },
    {
      id: "7",
      slug: "retro-terminal",
      title: "Retro Cyberdeck Terminal 1999",
      subtitle: "Y2K CRT BIOS & Vaporwave Command Center",
      description: "Authentic CRT scanlines and barrel curvature, ASCII art portrait, playable retro CLI terminal (`help`, `cat`, `projects`), and floppy box cards.",
      color: "#22c55e",
      badge: "Retro Cyberpunk",
      previewBg: "from-emerald-950 via-slate-950 to-black",
    },
    {
      id: "8",
      slug: "film-reel",
      title: "Cinematic Film Reel Horizontal Storytelling",
      subtitle: "Cannes Film Festival / A24 Horizontal Canvas",
      description: "Ultra-widescreen 2.39:1 letterbox viewport, smooth horizontal camera pan on scroll, scene-by-scene director's cut, and viewfinder crosshairs.",
      color: "#f59e0b",
      badge: "Cinematic Story",
      previewBg: "from-amber-950 via-neutral-900 to-black",
    },
    {
      id: "9",
      slug: "neumorphic-hardware",
      title: "Neumorphic Tactile Audio Hardware UI",
      subtitle: "Teenage Engineering / Dieter Rams / Braun",
      description: "Physical debossed/embossed tactile controls, rotary potentiometer skill dials, rackmount synthesizer modules, and glowing LED VU meters.",
      color: "#38bdf8",
      badge: "Tactile Industrial",
      previewBg: "from-sky-950 via-slate-900 to-black",
    },
    {
      id: "10",
      slug: "particle-nexus",
      title: "Generative Fluid Particle Physics Canvas",
      subtitle: "WebGL Canvas / Monopo / Media.Work Nexus",
      description: "Real-time interactive particle physics simulation: glowing particles spell Hafiz's name, disperse on hover, and reassemble with fluid ripples.",
      color: "#10b981",
      badge: "Interactive Canvas",
      previewBg: "from-teal-950 via-emerald-950 to-black",
    },
    {
      id: "11",
      slug: "isometric-city",
      title: "Isometric 3D Architectural Blueprint & City Grid",
      subtitle: "2.5D Isometric Infrastructure & Urban Schematics",
      description: "Interactive 3D isometric city grid where backend systems are skyscraper blocks with glowing wiring and live floor allocation visualizers.",
      color: "#0284c7",
      badge: "Isometric 3D",
      previewBg: "from-sky-950 via-blue-950 to-black",
    },
    {
      id: "12",
      slug: "liquid-chrome",
      title: "Holographic Spatial Glassmorphism & Liquid Chrome",
      subtitle: "Liquid Metal Shaders & Prismatic Refraction",
      description: "Fluid mercury chrome physics with dynamic surface tension, refractive prism glass, chromatic dispersion ribbons, and iridescent ripples.",
      color: "#a855f7",
      badge: "Liquid Chrome",
      previewBg: "from-purple-950 via-fuchsia-950 to-black",
    },
    {
      id: "13",
      slug: "braun-industrial",
      title: "Vintage 1970s Braun & Dieter Rams Industrial",
      subtitle: "Functionalist Mechanical Hardware & Drafting Rulers",
      description: "Analog mechanical rotary dials that rotate on drag, physical rocker switches, millimeter drafting grid, and classic Swiss typography.",
      color: "#f97316",
      badge: "Rams Industrial",
      previewBg: "from-stone-900 via-neutral-900 to-black",
    },
    {
      id: "14",
      slug: "code-studio-ide",
      title: "Interactive Code Sandbox & Live Compiler Matrix",
      subtitle: "Living IDE Environment with Real-Time Unit Test Runner",
      description: "A full-scale VS Code studio where the portfolio is a living codebase: interactive file tree, syntax editor, and executable `npm test` test suite.",
      color: "#06b6d4",
      badge: "Living IDE",
      previewBg: "from-cyan-950 via-slate-950 to-black",
    },
    {
      id: "15",
      slug: "infinite-canvas",
      title: "Spatial Horizon Infinite Canvas & Node Graph",
      subtitle: "Figma / Miro Boundless Draggable Visual Node Network",
      description: "Draggable infinite 2D canvas linking projects, skills, and milestones with dynamic bezier curves, magnetic node snapping, and minimap radar.",
      color: "#ec4899",
      badge: "Node Graph",
      previewBg: "from-pink-950 via-indigo-950 to-black",
    },
    {
      id: "16",
      slug: "kinetic-runway",
      title: "Avant-Garde High-Fashion Dynamic Typography",
      subtitle: "Runway Editorial with Velocity-Linked Font Shearing",
      description: "Massive scale-warping kinetic typography that stretches dynamically with mouse velocity, split-screen reveals, and magnetic inverted cursor.",
      color: "#eab308",
      badge: "Kinetic Runway",
      previewBg: "from-yellow-950 via-amber-950 to-black",
    },
    {
      id: "17",
      slug: "cockpit-hud-2099",
      title: "Cyberpunk Holographic Cockpit Deck 2099",
      subtitle: "Fighter Spacecraft 3D Holographic Cockpit UI",
      description: "3D perspective wireframe terrain sweep, targeting reticle lock-on animations over project case studies, and live shield telemetry.",
      color: "#00f0ff",
      badge: "Cockpit 2099",
      previewBg: "from-cyan-950 via-blue-950 to-black",
    },
    {
      id: "18",
      slug: "pixel-rpg",
      title: "Retro Arcade 16-Bit / Neo-Geo RPG Overworld",
      subtitle: "Gamified Software Architect Character Quest",
      description: "16-bit pixel art interactive game UI with character stats (Level 28 Fullstack Architect), equipment inventory, quest chronicle, and XP bars.",
      color: "#22c55e",
      badge: "16-Bit RPG",
      previewBg: "from-emerald-950 via-green-950 to-black",
    },
    {
      id: "19",
      slug: "card-deck-3d",
      title: "Dynamic 3D Card Stack & Gesture Tarot Deck",
      subtitle: "Physics-Driven Interactive Card Deck & 3D Flip Mechanics",
      description: "Gesture-controlled 3D card deck with smooth physics swiping, perspective depth fanning, and 3D card flips revealing technical schematics.",
      color: "#6366f1",
      badge: "3D Card Deck",
      previewBg: "from-indigo-950 via-slate-950 to-black",
    },
    {
      id: "20",
      slug: "audio-synthesizer",
      title: "Generative Algorithmic Soundwave & Synthesis Lab",
      subtitle: "Real-Time Frequency Oscilloscope & Harmonics Synthesis",
      description: "Real-time canvas oscilloscope visualizing waveforms for each case study, frequency filter sliders, and sound-reactive throughput columns.",
      color: "#f43f5e",
      badge: "Synth Lab",
      previewBg: "from-rose-950 via-purple-950 to-black",
    },
  ],
};

