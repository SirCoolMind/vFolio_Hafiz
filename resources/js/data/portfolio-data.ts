export interface ProjectShowcase {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  note?: string;
  screenshots: { src: string; caption: string }[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  badge?: string;
  image?: string;
  imageCaption?: string;
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
  skills: { name: string; icon: string; tag?: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  linkedInPostUrl: string;
  image?: string;
  imageCaption?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Hafiz Ruslan",
    shortName: "Hafiz Ruslan",
    title: "AI-Assisted Full-Stack Developer & Software Engineer",
    tagline: "I craft high-throughput web systems, cinematic interfaces, and scalable backend architectures.",
    bio: "AI-assisted full-stack developer and software engineer based in Malaysia. Known for building high-performance architectures (like generating 1,000+ PDF invoice pages in seconds using LaTeX) and managing complex multi-tenant booking platforms (300+ rooms across 80+ levels). First-class honors Computer Science graduate from UiTM.",
    location: "Putrajaya & Kuala Lumpur, Malaysia",
    origin: "Kuala Lumpur, Malaysia",
    age: 28,
    email: "hafizcoolman@gmail.com",
    github: "https://github.com/SirCoolMind",
    linkedin: "https://www.linkedin.com/in/hafizruslan98/",
    resumeUrl: "/assets/file/Resume Muhammad Hafiz Ruslan 2026.pdf",
    cvUrl: "/assets/file/CV Muhammad Hafiz Ruslan 2026.pdf",
    avatar: "/assets/img/person.webp",
    status: "Open for Full-Stack Engineering & High-Impact Contracts",
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
      company: "Unijaya Resources Sdn Bhd",
      role: "Senior PHP Programmer · Lead Programmer",
      period: "Jun 2025 – Present",
      location: "Kuala Lumpur City Centre",
      badge: "Current Role",
      image: "/assets/img/unijaya_cooking_event.webp",
      imageCaption: "Cooking Steak Event - Team C Winner",
      description: [
        "Lead Programmer across multiple government and enterprise projects, owning technical planning, requirement alignment and client communication.",
        "Took over a national-scale placement system mid-project and realigned delivery, processing 16M+ applicants and 160–240M applications yearly.",
        "Replaced a Power BI solution with an engineered backend and OLAP database: report generation cut from 3 minutes to under 3 seconds, with 14M daily rows processed in about 1 second.",
        "Core Solution Architect in the company's GitLab partnership and Git lead; introduced full CI/CD pipelines with a DevSecOps flow (SAST, DAST, VAPT).",
        "Championed company-wide AI adoption (Google AI to Anthropic Claude) and delivered proofs of concept with GitLab, NVIDIA, HPE and Huawei.",
      ],
      tech: ["Laravel", "PHP", "Vue.js", "ClickHouse", "PostgreSQL", "GitLab CI/CD", "DevSecOps", "Claude Code"],
    },
    {
      company: "IMT Tech Sdn Bhd",
      role: "PHP Programmer",
      period: "Jul 2023 – Jun 2025",
      location: "Bangsar South, KL",
      badge: "Innovation of the Year 2024",
      image: "/assets/img/imt_tech.webp",
      imageCaption: "Hi-Tea Celebration",
      description: [
        "Built a Transport Management System from scratch with a team of 3 (40+ vehicles, 2,000+ passengers), then led Phase 2; it won Innovation of the Year 2024 in Singapore.",
        "Implemented a LaTeX invoice engine with a wrapper package for legacy projects, generating 1,000+ page invoices in seconds for large clients.",
        "Developed a booking system with adaptive working hours and days, managing 300+ meeting rooms across an 80+ level building.",
        "Built frontend and backend data-migration packages that cut client data migration from hours to minutes.",
        "Self-taught in Vue.js and delivered output on par with senior team members with 10+ years of experience.",
      ],
      tech: ["Laravel", "PHP", "Vue.js", "Node.js", "LaTeX", "MySQL", "GitLab"],
    },
    {
      company: "Unijaya Resources Sdn Bhd",
      role: "PHP Developer",
      period: "Sep 2021 – May 2023",
      location: "Kuala Lumpur City Centre",
      badge: "14 Government Projects",
      image: "/assets/img/unijaya.webp",
      imageCaption: "Unijaya Team Building Event",
      description: [
        "Grew from Laravel beginner to senior full-stack developer and technical advisor to 15+ staff and interns.",
        "Developed and maintained 14 government projects with complex modules and workflows.",
        "Advised on technical decisions across 7 projects, improving performance by up to 170% through API optimization, database tuning and server load improvements.",
        "Contributed 2 in-house packages (role, permission and module-status flow; server file handling) that cut prototype-to-development time by 60%.",
        "Led a team of 3 to deliver a helpdesk system in 1 week, and designed a parallel Talend ETL flow that processes 100,000+ records in 8 seconds.",
      ],
      tech: ["Laravel", "PHP", "Vue.js", "MySQL", "PostgreSQL", "Talend", "REST APIs"],
    },
    {
      company: "Leadmind Sdn Bhd",
      role: "Lead Programmer Intern",
      period: "Mar 2021 – Aug 2021",
      location: "Cyberjaya, Selangor",
      badge: "MERN Stack",
      description: [
        "Sole developer, owning delivery of the company's internal systems end to end.",
        "Built a Java and Apache system to manage company data, then upgraded to the MERN stack (MongoDB, Express, React, Node.js) to deliver a website managing 1,000+ leads.",
        "Improved user experience with smooth navigation and fast algorithms that deliver accurate leads data, picking up new technologies quickly with minimal guidance.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Java", "Apache"],
    },
  ] as WorkExperience[],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Universiti Teknologi MARA (UiTM), Jasin",
      period: "Mar 2018 – Aug 2021",
      grade: "CGPA 3.53",
      highlights: [
        "First Class Honours graduate, combining academic excellence with university community leadership.",
        "Project Leader for Build-IT KICTM (2019).",
        "Lead Instructor for Computer Science Association (CSA) Workshop (2020).",
        "Active Committee Member in Sekretariat Mahasiswa Fakulti (SMF) & Computer Science Association (CSA).",
      ],
    },
    {
      degree: "Science PST Module II (Matriculation)",
      institution: "Kolej Matrikulasi Selangor, Banting",
      period: "Jun 2016 – Jun 2017",
      grade: "CGPA 3.83",
      highlights: [
        "Excellence in Mathematics, Physics, and Computer Science foundation.",
        "Appointed Peer Guidance Leader (Pembimbing Rakan Sebaya, PRD).",
      ],
    },
    {
      degree: "Pure Science (SPM)",
      institution: "Sekolah Menengah Kebangsaan Padang Tembak",
      period: "2011 – 2015",
      grade: "6A 2B 2C",
      highlights: [
        "School Prefect (Form 1 to Form 5), Class Monitor, and Entrepreneurship Club Executive.",
      ],
    },
  ] as EducationItem[],

  skillCategories: [
    {
      title: "Front-End",
      skills: [
        { name: "Vue.js (Vue 2 & Vue 3 / Composition & Options API)", icon: "vuejs", tag: "Primary Framework" },
        { name: "Laravel Blade + jQuery", icon: "laravel", tag: "Single Page App alike" },
        { name: "React.js & Next.js (TypeScript & JavaScript)", icon: "react", tag: "Modern UI" },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Laravel Framework (v5 - v13) & Node.js & Express.js", icon: "laravel", tag: "Core Mastery" },
        { name: "LaTeX PDF Pipeline (Engine, Templates & Laravel Packages)", icon: "latex", tag: "High Throughput" },
        { name: "MySQL, PostgreSQL, ClickHouse & SQLite", icon: "mysql", tag: "Relational" },
        { name: "MongoDB & Google Firestore", icon: "mongodb", tag: "NoSQL" },
        { name: "Redis & Valkey", icon: "redis", tag: "In-Memory & Cache" },
      ],
    },
    {
      title: "DevOps & Tooling",
      skills: [
        { name: "Docker and VirtualBox", icon: "docker", tag: "Containerization" },
        { name: "Laragon & Homestead & Vagrant", icon: "homestead", tag: "Dev Environment" },
        { name: "Linux Systems (Ubuntu, Debian & CentOS)", icon: "linux", tag: "Server Admin" },
        { name: "Git & GitHub Desktop", icon: "git", tag: "Version Control" },
      ],
    },
    {
      title: "AI & Autonomous Tooling",
      skills: [
        { name: "Claude Code & Antigravity Assistant", icon: "brain", tag: "AI Pair Programming" },
        { name: "Open Source LLMs (DeepSeek 4.1 Flash / Qwen 3.8 Flash)", icon: "sparkles", tag: "Reasoning & Coding" },
        { name: "Local LLM Engines (LM Studio, Pinokio)", icon: "cpu", tag: "Data Privacy" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "purecut",
      title: "PureCut",
      tagline: "In-browser AI background remover",
      description:
        "Removes image backgrounds entirely on your device. The AI model (~45 MB) downloads once and runs in the browser on WebGPU or CPU, so no image is ever uploaded to a server.",
      highlights: [
        "Magic Brush to erase stray background or restore clipped detail, with undo",
        "Standard presets or a Power User studio for edge and alpha tuning",
        "Live telemetry: duration, MP/s throughput, RAM heap and threads",
      ],
      tech: ["Vue.js", "Vite", "ONNX Runtime", "WebGPU", "WASM"],
      liveUrl: "https://sircoolmind.github.io/PureCut/",
      githubUrl: "https://github.com/SirCoolMind/PureCut",
      screenshots: [
        { src: "/assets/img/projects/purecut/01-home-upload.webp", caption: "Upload: drop, pick or paste an image, or try the sample" },
        { src: "/assets/img/projects/purecut/02-processing.webp", caption: "Processing: four-step progress with live CPU and RAM readouts" },
        { src: "/assets/img/projects/purecut/03-result-compare-standard.webp", caption: "Result: before/after slider with one-click quick presets" },
        { src: "/assets/img/projects/purecut/04-magic-brush-power-user.webp", caption: "Magic Brush in Power User mode with edge controls" },
        { src: "/assets/img/projects/purecut/05-version-changelog-dialog.webp", caption: "Changelog, roadmap and storage & cache dialog" },
      ],
    },
    {
      id: "noterecall",
      title: "NoteRecall",
      tagline: "Local-first meeting transcriber",
      description:
        "Turns a meeting recording into a transcript that says who said what, plus a short summary. Built for Bahasa Melayu, English, or both mixed together, and runs on your own computer.",
      highlights: [
        "Whisper large-v3 transcription with speaker diarization",
        "LLM-generated key points summary for every recording",
        "Private by default, with an optional Google Gemini cloud engine",
      ],
      tech: ["Python", "FastAPI", "Whisper", "Speaker Diarization", "Gemini"],
      githubUrl: "https://github.com/SirCoolMind/NoteRecall",
      note: "Runs locally, no live demo",
      screenshots: [
        { src: "/assets/img/projects/noterecall/01-home-new-recording.webp", caption: "New recording: language, speakers and engine options" },
        { src: "/assets/img/projects/noterecall/02-home-recordings-list.webp", caption: "Recordings grouped by month, with search and status filters" },
        { src: "/assets/img/projects/noterecall/03-recording-transcript.webp", caption: "Transcript with speaker timeline and timestamps" },
        { src: "/assets/img/projects/noterecall/04-recording-summary.webp", caption: "AI-generated key points summary" },
        { src: "/assets/img/projects/noterecall/05-settings-general.webp", caption: "Settings: default language, interface language and theme" },
        { src: "/assets/img/projects/noterecall/06-settings-transcription.webp", caption: "Transcription engine: local Whisper or Gemini cloud" },
      ],
    },
  ] as ProjectShowcase[],

  testimonials: [
    {
      quote: "Your dedication, passion, and commitment to excellence have been a true inspiration to us all. You've been an exceptional team player, and your leadership has been invaluable.",
      author: "Upper Management",
      role: "Executive Board",
      company: "Unijaya Resources Sdn Bhd",
      avatar: "/assets/img/logo/unijaya_logo.png",
      linkedInPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7069236571287269376/",
      image: "/assets/img/unijaya_endorsement.webp",
      imageCaption: "With the Unijaya Resources team",
    },
  ] as Testimonial[],

};
