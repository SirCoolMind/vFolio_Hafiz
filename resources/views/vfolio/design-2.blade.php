<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafiz Ruslan - Split Screen Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/font-awesome/css/all.min.css') }}">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Lato', sans-serif;
            color: #333;
            background: #fafafa;
        }

        .split-layout {
            display: flex;
            min-height: 100vh;
        }

        /* Left Side: Sticky Profile */
        .left-pane {
            width: 40%;
            background: #ffffff;
            position: sticky;
            top: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 3rem;
            box-sizing: border-box;
            border-right: 1px solid #eee;
            text-align: center;
        }

        .profile-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .left-pane h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            margin: 0 0 0.5rem 0;
            color: #111;
        }

        .left-pane p.title {
            font-size: 1.2rem;
            color: #666;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 2rem;
        }

        .btn-download {
            display: inline-block;
            padding: 12px 30px;
            background: #111;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.9rem;
            transition: background 0.3s ease;
        }

        .btn-download:hover {
            background: #444;
        }

        /* Right Side: Scrolling Content */
        .right-pane {
            width: 60%;
            padding: 5rem;
            box-sizing: border-box;
        }

        .section {
            margin-bottom: 5rem;
        }

        .section h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            border-bottom: 2px solid #111;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
            color: #111;
        }

        .text-lead {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: 2rem;
        }

        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .info-block h3 { margin: 0 0 0.5rem 0; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; color:#111; }
        .info-block p { margin: 0; color: #666; }

        .timeline-entry {
            margin-bottom: 2.5rem;
        }

        .timeline-entry .date {
            font-weight: bold;
            color: #888;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .timeline-entry h4 {
            font-size: 1.3rem;
            margin: 0 0 0.5rem 0;
            color: #111;
        }

        .timeline-entry p {
            line-height: 1.6;
            color: #555;
        }

        .skills-list {
            list-style: none;
            padding: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        
        .skills-list li {
            font-size: 1.1rem;
            color: #444;
            display: flex;
            align-items: center;
        }
        .skills-list li i { margin-right: 10px; color: #111; }

        @media (max-width: 900px) {
            .split-layout { flex-direction: column; }
            .left-pane { width: 100%; position: relative; height: auto; padding: 4rem 2rem; border-right:none; border-bottom: 1px solid #eee; }
            .right-pane { width: 100%; padding: 3rem 2rem; }
            .info-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <div class="split-layout">
        
        <div class="left-pane">
            <img src="{{ asset('assets/img/person.jpg') }}" alt="Hafiz Ruslan" class="profile-img">
            <h1>Hafiz Ruslan</h1>
            <p class="title">Laravel Fullstack Developer</p>
            <a href="{{asset('assets/file/Resume Muhammad Hafiz Ruslan.pdf')}}" class="btn-download"><i class="fas fa-file-pdf"></i> Download Resume</a>
        </div>

        <div class="right-pane">
            
            <div class="section">
                <h2>About Me</h2>
                <p class="text-lead">I enjoy using creative solutions in problem-solving and make use of my knowledge to assist others.</p>
                <div class="info-grid">
                    <div class="info-block">
                        <h3>Location</h3>
                        <p>Banting, Malaysia</p>
                    </div>
                    <div class="info-block">
                        <h3>From</h3>
                        <p>Kuala Lumpur, Malaysia</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Experience</h2>
                <div class="timeline-entry">
                    <div class="date">Jul 2023 - Present</div>
                    <h4>PHP Programmer @ IMT Tech Sdn Bhd</h4>
                    <p>Implemented LaTeX as an alternative PDF generator, optimized to produce 1000+ invoice pages in seconds. Built a booking system with adaptive hours, managing 300+ rooms.</p>
                </div>
                <div class="timeline-entry">
                    <div class="date">Sep 2021 - May 2023</div>
                    <h4>PHP Developer @ Unijaya Resources Sdn Bhd</h4>
                    <p>Collaborated with cross-functional teams to develop, maintain, and assist in 7 live projects. Improved API, UI/UX design, and backend performance.</p>
                </div>
                <div class="timeline-entry">
                    <div class="date">Mar 2021 - Aug 2021</div>
                    <h4>Internship Lead Programming @ Leadmind Sdn Bhd</h4>
                    <p>Developed a MERN stack website to efficiently manage 1000+ leads, providing a seamless browsing experience.</p>
                </div>
            </div>

            <div class="section">
                <h2>Education</h2>
                <div class="timeline-entry">
                    <div class="date">2021</div>
                    <h4>Bachelor Degree of Computer Science</h4>
                    <p>Universiti Teknologi MARA (UiTM) • CGPA: 3.53</p>
                </div>
            </div>

            <div class="section">
                <h2>Core Skills</h2>
                <ul class="skills-list">
                    <li><i class="fab fa-laravel"></i> Laravel / Blade</li>
                    <li><i class="fab fa-php"></i> PHP</li>
                    <li><i class="fab fa-vuejs"></i> Vue JS</li>
                    <li><i class="fab fa-react"></i> React JS</li>
                    <li><i class="fas fa-database"></i> MySQL & MongoDB</li>
                    <li><i class="fab fa-node-js"></i> Node JS</li>
                </ul>
            </div>

        </div>

    </div>

</body>
</html>
