<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafiz Ruslan - Snap Scroll Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/font-awesome/css/all.min.css') }}">
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            font-family: 'Montserrat', sans-serif;
            overflow: hidden;
            background: #121212;
            color: white;
        }

        .scroll-container {
            width: 100vw;
            height: 100vh;
            overflow-x: auto;
            overflow-y: hidden;
            display: flex;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
        }

        .scroll-section {
            flex: 0 0 100vw;
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem 5rem;
            box-sizing: border-box;
            position: relative;
        }

        /* Distinct Backgrounds for each section */
        #s1 { background: #ff4757; }
        #s2 { background: #2ed573; }
        #s3 { background: #1e90ff; }
        #s4 { background: #ffa502; }

        .content-box {
            max-width: 800px;
            width: 100%;
            background: rgba(0,0,0,0.2);
            padding: 3rem;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        h1 {
            font-size: 4rem;
            font-weight: 900;
            margin: 0 0 1rem 0;
            text-transform: uppercase;
            line-height: 1;
        }

        h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0 0 2rem 0;
            border-bottom: 4px solid white;
            display: inline-block;
            padding-bottom: 0.5rem;
        }

        h3 {
            font-size: 1.5rem;
            margin: 0 0 0.5rem 0;
        }

        p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin: 0 0 1rem 0;
        }

        .nav-dots {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 15px;
            z-index: 100;
        }

        .dot {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: rgba(255,255,255,0.5);
            cursor: pointer;
            text-decoration: none;
            transition: 0.3s;
        }
        
        .dot:hover { background: white; transform: scale(1.2); }

        .job {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        }

        .job-date {
            font-weight: bold;
            color: rgba(255,255,255,0.8);
            font-size: 0.9rem;
            text-transform: uppercase;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            text-align: center;
        }
        
        .skill-item {
            background: rgba(255,255,255,0.15);
            padding: 1rem;
            border-radius: 10px;
            font-weight: 700;
            font-size: 1.1rem;
        }

        @media(max-width: 800px) {
            h1 { font-size: 2.5rem; }
            .scroll-section { padding: 2rem; }
            .skills-grid { grid-template-columns: 1fr 1fr; }
        }
    </style>
</head>
<body>

    <div class="nav-dots">
        <a href="#s1" class="dot"></a>
        <a href="#s2" class="dot"></a>
        <a href="#s3" class="dot"></a>
        <a href="#s4" class="dot"></a>
    </div>

    <div class="scroll-container">
        
        <!-- Section 1: Intro -->
        <div class="scroll-section" id="s1">
            <div class="content-box text-center" style="text-align:center;">
                <img src="{{ asset('assets/img/person.jpg') }}" alt="Hafiz" style="width:150px; height:150px; border-radius:50%; margin-bottom:1rem; border:5px solid white;">
                <h1>Hafiz Ruslan</h1>
                <p style="font-size: 1.5rem; font-weight:700;">Laravel Fullstack Web Developer</p>
                <p>I enjoy using creative solutions in problem-solving and make use of my knowledge to assist others.</p>
                <br>
                <a href="{{asset('assets/file/Resume Muhammad Hafiz Ruslan.pdf')}}" style="display:inline-block; padding:15px 30px; background:white; color:#ff4757; text-decoration:none; font-weight:bold; border-radius:30px;">Download Resume</a>
            </div>
        </div>

        <!-- Section 2: Experience -->
        <div class="scroll-section" id="s2">
            <div class="content-box">
                <h2>Experience</h2>
                
                <div class="job">
                    <div class="job-date">Jul 2023 - Present</div>
                    <h3>PHP Programmer @ IMT Tech</h3>
                    <p style="font-size:1rem;">Implemented LaTeX for 1000+ invoice pages in seconds. Built an adaptive room booking system.</p>
                </div>

                <div class="job">
                    <div class="job-date">Sep 2021 - May 2023</div>
                    <h3>PHP Developer @ Unijaya</h3>
                    <p style="font-size:1rem;">Developed 7 live projects. Improved API and backend performance.</p>
                </div>
            </div>
        </div>

        <!-- Section 3: Skills -->
        <div class="scroll-section" id="s3">
            <div class="content-box">
                <h2>Core Skills</h2>
                <div class="skills-grid">
                    <div class="skill-item"><i class="fab fa-laravel"></i> Laravel</div>
                    <div class="skill-item"><i class="fab fa-vuejs"></i> Vue JS</div>
                    <div class="skill-item"><i class="fab fa-react"></i> React JS</div>
                    <div class="skill-item"><i class="fab fa-node"></i> Node JS</div>
                    <div class="skill-item"><i class="fab fa-php"></i> PHP</div>
                    <div class="skill-item"><i class="fas fa-database"></i> MySQL / MongoDB</div>
                </div>
            </div>
        </div>

        <!-- Section 4: Education -->
        <div class="scroll-section" id="s4">
            <div class="content-box">
                <h2>Education</h2>
                <div class="job">
                    <div class="job-date">2021</div>
                    <h3>Bachelor Degree of Computer Science</h3>
                    <p>Universiti Teknologi MARA (UiTM) <br> CGPA: 3.53 (First-class honors)</p>
                </div>
                <div class="job">
                    <div class="job-date">2017</div>
                    <h3>Science PST Module II</h3>
                    <p>Selangor Matriculation College <br> CGPA: 3.83</p>
                </div>
            </div>
        </div>

    </div>

</body>
</html>
