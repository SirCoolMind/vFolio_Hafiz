<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafiz Ruslan - Editorial</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/font-awesome/css/all.min.css') }}">
    <style>
        :root {
            --bg-color: #f7f5f0;
            --text-main: #1c1c1a;
            --text-light: #6a6a68;
            --accent: #8c3f25;
            --line-color: #dcdad4;
        }

        body {
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-main);
            font-family: 'Inter', sans-serif;
            font-weight: 300;
        }

        .layout-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem 4rem;
        }

        header {
            border-bottom: 1px solid var(--line-color);
            padding-bottom: 4rem;
            margin-bottom: 4rem;
            display: grid;
            grid-template-columns: 2fr 1fr;
            align-items: end;
            gap: 2rem;
        }

        .title-block h1 {
            font-family: 'Playfair Display', serif;
            font-size: 8rem;
            line-height: 0.9;
            margin: 0;
            letter-spacing: -0.05em;
            color: var(--text-main);
        }

        .title-block h1 i {
            font-style: italic;
            color: var(--accent);
        }

        .meta-info {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-light);
            text-align: right;
        }

        .hero-img {
            width: 100%;
            height: 60vh;
            object-fit: cover;
            filter: grayscale(100%);
            margin-bottom: 4rem;
        }

        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            margin-bottom: 6rem;
        }

        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 400;
            margin: 0 0 2rem 0;
            border-bottom: 1px solid var(--line-color);
            padding-bottom: 1rem;
        }

        .text-block p {
            font-size: 1.25rem;
            line-height: 1.7;
            margin: 0 0 2rem 0;
        }

        .experience-item {
            margin-bottom: 3rem;
            position: relative;
        }

        .experience-item h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            margin: 0 0 0.5rem 0;
        }

        .experience-meta {
            display: flex;
            justify-content: space-between;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-light);
            margin-bottom: 1rem;
            border-bottom: 1px solid var(--line-color);
            padding-bottom: 0.5rem;
        }

        .experience-item p {
            line-height: 1.6;
        }

        .skills-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .skills-list li {
            font-size: 2rem;
            font-family: 'Playfair Display', serif;
            border-bottom: 1px solid var(--line-color);
            padding: 1rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: color 0.3s ease;
            cursor: default;
        }

        .skills-list li:hover {
            color: var(--accent);
        }

        .skills-list li span {
            font-family: 'Inter', sans-serif;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-light);
        }

        .btn-editorial {
            display: inline-block;
            padding: 1rem 3rem;
            border: 1px solid var(--text-main);
            color: var(--text-main);
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-size: 0.85rem;
            transition: all 0.3s ease;
        }

        .btn-editorial:hover {
            background-color: var(--text-main);
            color: var(--bg-color);
        }

        @media (max-width: 1024px) {
            .title-block h1 { font-size: 5rem; }
            .grid-2 { grid-template-columns: 1fr; }
            header { grid-template-columns: 1fr; text-align: left; }
            .meta-info { text-align: left; }
        }
    </style>
</head>
<body>

    <div class="layout-container">
        
        <header>
            <div class="title-block">
                <h1>Hafiz <i>Ruslan</i></h1>
            </div>
            <div class="meta-info">
                <p>No. 01 — Portfolio</p>
                <p>Laravel Fullstack Developer</p>
                <p>Based in Banting, MY</p>
            </div>
        </header>

        <img src="{{ asset('assets/img/person.jpg') }}" alt="Hafiz Ruslan" class="hero-img">

        <div class="grid-2">
            <div>
                <h2 class="section-title">The Profile</h2>
                <div class="text-block">
                    <p>I enjoy using creative solutions in problem-solving and make use of my knowledge to assist others. A first-class honors graduate capable of balancing high-end coding demands with continuous self-improvement.</p>
                    <a href="{{asset('assets/file/Resume Muhammad Hafiz Ruslan.pdf')}}" class="btn-editorial">Download Resume</a>
                </div>
            </div>
            
            <div>
                <h2 class="section-title">Core Competencies</h2>
                <ul class="skills-list">
                    <li>Laravel <span>Framework</span></li>
                    <li>Vue JS <span>Frontend</span></li>
                    <li>React JS <span>Frontend</span></li>
                    <li>PHP <span>Backend</span></li>
                    <li>MySQL <span>Database</span></li>
                </ul>
            </div>
        </div>

        <div>
            <h2 class="section-title">Professional Experience</h2>
            <div class="grid-2">
                <div class="experience-item">
                    <div class="experience-meta">
                        <span>Jul 2023 - Present</span>
                        <span>IMT Tech Sdn Bhd</span>
                    </div>
                    <h3>PHP Programmer</h3>
                    <p>Implemented LaTeX as an alternative PDF generator, optimized to produce 1000+ invoice pages in seconds. Built an adaptive room booking system managing 300+ rooms.</p>
                </div>

                <div class="experience-item">
                    <div class="experience-meta">
                        <span>Sep 2021 - May 2023</span>
                        <span>Unijaya Resources</span>
                    </div>
                    <h3>PHP Developer</h3>
                    <p>Collaborated with cross-functional teams to develop, maintain, and assist in 7 live projects. Improved API logic, UI/UX design, and backend architectural performance.</p>
                </div>
            </div>
        </div>

    </div>

</body>
</html>
