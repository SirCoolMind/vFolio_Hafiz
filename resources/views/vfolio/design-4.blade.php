<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafiz Ruslan - Premium Tech</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/font-awesome/css/all.min.css') }}">
    <style>
        :root {
            --bg-color: #050505;
            --card-bg: rgba(255, 255, 255, 0.03);
            --border-color: rgba(255, 255, 255, 0.1);
            --primary: #4F46E5;
            --secondary: #06B6D4;
        }

        body {
            margin: 0;
            background-color: var(--bg-color);
            color: #ffffff;
            font-family: 'Outfit', sans-serif;
            overflow-x: hidden;
        }

        /* Animated Background Blob */
        .bg-blob {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(79,70,229,0.15) 0%, rgba(6,182,212,0.15) 50%, transparent 70%);
            filter: blur(80px);
            z-index: -1;
            animation: pulse 10s infinite alternate;
        }

        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            100% { transform: translate(-50%, -50%) scale(1.2); }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
            position: relative;
        }

        .hero {
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hero h1 {
            font-size: 5rem;
            font-weight: 800;
            margin: 0;
            background: linear-gradient(to right, #fff, #a5a5a5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -2px;
            animation: fadeUp 1s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
        }

        .hero p {
            font-size: 1.5rem;
            color: #9CA3AF;
            max-width: 600px;
            margin: 1.5rem auto;
            animation: fadeUp 1s ease-out 0.2s forwards;
            opacity: 0;
            transform: translateY(30px);
        }

        .hero-btn {
            padding: 1rem 2.5rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            border: none;
            border-radius: 100px;
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: fadeUp 1s ease-out 0.4s forwards;
            opacity: 0;
            transform: translateY(30px);
        }

        .hero-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 25px rgba(79,70,229,0.4);
        }

        @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
        }

        /* Spotlight Cards */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 4rem;
        }

        .spotlight-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 24px;
            padding: 2.5rem;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease;
        }

        .spotlight-card:hover {
            transform: translateY(-5px);
        }

        .spotlight-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%);
            z-index: 1;
            pointer-events: none;
        }

        .spotlight-card::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 24px;
            padding: 1px;
            background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            z-index: 2;
        }

        .card-content {
            position: relative;
            z-index: 3;
        }

        .card-title {
            font-size: 1.8rem;
            margin: 0 0 1rem 0;
            color: #fff;
        }

        .timeline-item {
            margin-bottom: 2rem;
            border-left: 1px solid rgba(255,255,255,0.2);
            padding-left: 1.5rem;
            position: relative;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -5px;
            top: 5px;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: var(--secondary);
        }

        .timeline-date {
            color: var(--secondary);
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
        }

        .timeline-title {
            font-size: 1.3rem;
            margin: 0 0 0.5rem 0;
            color: #fff;
        }

        .timeline-desc {
            color: #9CA3AF;
            line-height: 1.6;
            margin: 0;
        }

        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill-tag {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.9rem;
            color: #D1D5DB;
            transition: all 0.3s ease;
        }

        .skill-tag:hover {
            background: rgba(255,255,255,0.1);
            color: #fff;
            transform: scale(1.05);
        }

    </style>
</head>
<body>

    <div class="bg-blob"></div>

    <div class="container">
        
        <div class="hero">
            <h1>Hafiz Ruslan</h1>
            <p>Laravel Fullstack Web Developer. Crafting seamless digital experiences through elegant code and creative problem-solving.</p>
            <a href="{{asset('assets/file/Resume Muhammad Hafiz Ruslan.pdf')}}" class="hero-btn">Download Resume <i class="fas fa-arrow-right" style="margin-left:8px;"></i></a>
        </div>

        <div class="cards-grid">
            
            <div class="spotlight-card">
                <div class="card-content">
                    <h2 class="card-title">Experience</h2>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">Jul 2023 - Present</div>
                        <h3 class="timeline-title">PHP Programmer @ IMT Tech</h3>
                        <p class="timeline-desc">Implemented LaTeX for PDF generation (1000+ pages in seconds), built a complex booking system managing 300+ rooms across 80+ levels.</p>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-date">Sep 2021 - May 2023</div>
                        <h3 class="timeline-title">PHP Developer @ Unijaya</h3>
                        <p class="timeline-desc">Collaborated with cross-functional teams to develop and maintain 7 live projects. Improved API and backend performance.</p>
                    </div>

                </div>
            </div>

            <div class="spotlight-card">
                <div class="card-content">
                    <h2 class="card-title">Education</h2>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2021</div>
                        <h3 class="timeline-title">BSc Computer Science</h3>
                        <p class="timeline-desc">Universiti Teknologi MARA (UiTM)<br>First-class honors (CGPA: 3.53)</p>
                    </div>

                    <h2 class="card-title" style="margin-top:3rem;">Core Skills</h2>
                    <div class="skills-container">
                        <span class="skill-tag">Laravel</span>
                        <span class="skill-tag">Vue JS</span>
                        <span class="skill-tag">React JS</span>
                        <span class="skill-tag">PHP</span>
                        <span class="skill-tag">Node JS</span>
                        <span class="skill-tag">MySQL</span>
                        <span class="skill-tag">MongoDB</span>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <script>
        // Spotlight Effect Logic
        const cards = document.querySelectorAll('.spotlight-card');
        
        document.addEventListener('mousemove', e => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    </script>
</body>
</html>
