<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafiz Ruslan - Bento Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/font-awesome/css/all.min.css') }}">
    <style>
        body {
            margin: 0;
            padding: 2rem;
            background-color: #0f172a;
            color: #f8fafc;
            font-family: 'Inter', sans-serif;
            display: flex;
            justify-content: center;
            min-height: 100vh;
        }

        .bento-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(200px, auto);
            gap: 1.5rem;
            max-width: 1200px;
            width: 100%;
        }

        .bento-card {
            background-color: #1e293b;
            border-radius: 24px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.05);
            transition: transform 0.3s ease;
        }

        .bento-card:hover {
            transform: translateY(-5px);
        }

        /* Grid specific spans */
        .intro-card { grid-column: span 2; grid-row: span 2; background: linear-gradient(135deg, #3b82f6, #8b5cf6); }
        .skills-card { grid-column: span 1; grid-row: span 1; }
        .image-card { grid-column: span 1; grid-row: span 2; background: url('{{ asset('assets/img/person.jpg') }}') center/cover no-repeat; }
        .experience-card { grid-column: span 2; grid-row: span 1; }
        .education-card { grid-column: span 2; grid-row: span 1; }

        h1 { margin: 0 0 0.5rem 0; font-size: 2.5rem; font-weight: 800; }
        h2 { margin: 0 0 1rem 0; font-size: 1.5rem; color: #94a3b8; }
        h3 { margin: 0 0 0.5rem 0; font-size: 1.2rem; color: #f8fafc; }
        p { margin: 0; color: #cbd5e1; line-height: 1.6; }
        
        .badge {
            background: rgba(255,255,255,0.2);
            padding: 0.5rem 1rem;
            border-radius: 99px;
            font-size: 0.875rem;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 1rem;
        }

        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .skill-tag {
            background: #334155;
            padding: 0.25rem 0.75rem;
            border-radius: 8px;
            font-size: 0.8rem;
        }

        .timeline-item {
            margin-bottom: 1rem;
            border-left: 2px solid #3b82f6;
            padding-left: 1rem;
        }
        
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-date { font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.25rem; }

        @media (max-width: 900px) {
            .bento-container {
                grid-template-columns: 1fr;
            }
            .intro-card, .skills-card, .image-card, .experience-card, .education-card {
                grid-column: span 1;
                grid-row: auto;
            }
            .image-card { min-height: 300px; }
        }
    </style>
</head>
<body>

    <div class="bento-container">
        
        <!-- Intro Card -->
        <div class="bento-card intro-card">
            <span class="badge">Laravel Fullstack Web Developer</span>
            <h1>Hafiz Ruslan</h1>
            <p>I enjoy using creative solutions in problem-solving and make use of my knowledge to assist others.</p>
            <div style="margin-top: 2rem;">
                <p><i class="fas fa-map-marker-alt"></i> Banting, Malaysia</p>
                <p style="margin-top:0.5rem;"><a href="{{asset('assets/file/Resume Muhammad Hafiz Ruslan.pdf')}}" style="color:white; font-weight:bold; text-decoration:none;"><i class="fas fa-download"></i> Download Resume</a></p>
            </div>
        </div>

        <!-- Image Card -->
        <div class="bento-card image-card"></div>

        <!-- Skills Summary -->
        <div class="bento-card skills-card">
            <h2>Front-End</h2>
            <div class="skill-list">
                <span class="skill-tag">Vue JS</span>
                <span class="skill-tag">React JS</span>
                <span class="skill-tag">Blade</span>
                <span class="skill-tag">SASS</span>
            </div>
        </div>

        <div class="bento-card skills-card">
            <h2>Back-End</h2>
            <div class="skill-list">
                <span class="skill-tag">PHP</span>
                <span class="skill-tag">Laravel</span>
                <span class="skill-tag">Node JS</span>
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">MongoDB</span>
            </div>
        </div>

        <!-- Work Experience -->
        <div class="bento-card experience-card">
            <h2>Work Experience</h2>
            <div class="timeline-item">
                <div class="timeline-date">Jul 2023 - Present</div>
                <h3>PHP Programmer @ IMT Tech</h3>
                <p style="font-size:0.9rem;">Implemented LaTeX for PDF generation (1000+ pages in seconds), built a complex booking system.</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">Sep 2021 - May 2023</div>
                <h3>PHP Developer @ Unijaya</h3>
                <p style="font-size:0.9rem;">Developed and maintained 7 live projects, improving API and backend performance.</p>
            </div>
        </div>

        <!-- Education -->
        <div class="bento-card education-card">
            <h2>Education</h2>
            <div class="timeline-item">
                <div class="timeline-date">2021</div>
                <h3>BSc Computer Science</h3>
                <p style="font-size:0.9rem;">UiTM • CGPA: 3.53 • First-class honors</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2017</div>
                <h3>Science PST Module II</h3>
                <p style="font-size:0.9rem;">Selangor Matriculation College • CGPA: 3.83</p>
            </div>
        </div>

    </div>

</body>
</html>
