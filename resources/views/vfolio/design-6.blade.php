<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hafiz Ruslan - App Interface</title>
    <link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;600&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('fonts/font-awesome/css/all.min.css') }}">
    <style>
        :root {
            --app-bg: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --glass-bg: rgba(255, 255, 255, 0.15);
            --glass-border: rgba(255, 255, 255, 0.3);
            --text-main: #ffffff;
            --text-sub: rgba(255, 255, 255, 0.8);
            --shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        }

        body {
            margin: 0;
            padding: 2vh 2vw;
            height: 100vh;
            box-sizing: border-box;
            background: var(--app-bg);
            font-family: 'Inter', -apple-system, sans-serif;
            color: var(--text-main);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .app-window {
            width: 100%;
            max-width: 1400px;
            height: 94vh;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            box-shadow: var(--shadow);
            display: flex;
            overflow: hidden;
        }

        /* Sidebar Navigation */
        .sidebar {
            width: 280px;
            background: rgba(0, 0, 0, 0.1);
            border-right: 1px solid var(--glass-border);
            padding: 2rem;
            display: flex;
            flex-direction: column;
        }

        .user-profile {
            text-align: center;
            margin-bottom: 3rem;
        }

        .user-profile img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 3px solid rgba(255,255,255,0.5);
            margin-bottom: 1rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .user-profile h2 {
            margin: 0;
            font-size: 1.2rem;
            font-weight: 600;
        }

        .user-profile p {
            margin: 0.5rem 0 0 0;
            font-size: 0.85rem;
            color: var(--text-sub);
        }

        .nav-menu {
            list-style: none;
            padding: 0;
            margin: 0;
            flex-grow: 1;
        }

        .nav-item {
            margin-bottom: 0.5rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            padding: 1rem;
            color: var(--text-main);
            text-decoration: none;
            border-radius: 12px;
            transition: all 0.3s ease;
            font-size: 0.95rem;
        }

        .nav-link i {
            width: 24px;
            margin-right: 15px;
            font-size: 1.2rem;
            opacity: 0.8;
        }

        .nav-link:hover, .nav-link.active {
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .btn-action {
            display: block;
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            margin-top: auto;
            border: none;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(118, 75, 162, 0.3);
            transition: transform 0.2s;
        }
        
        .btn-action:hover {
            transform: translateY(-2px);
        }

        /* Main Content Area */
        .main-content {
            flex-grow: 1;
            padding: 3rem 4rem;
            overflow-y: auto;
            scroll-behavior: smooth;
        }
        
        .main-content::-webkit-scrollbar {
            width: 8px;
        }
        .main-content::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 10px;
        }

        .content-header {
            margin-bottom: 3rem;
            animation: fadeIn 0.8s ease;
        }

        .content-header h1 {
            font-size: 3rem;
            margin: 0 0 1rem 0;
            font-weight: 600;
        }

        .content-header p {
            font-size: 1.2rem;
            color: var(--text-sub);
            max-width: 700px;
            line-height: 1.6;
        }

        /* App Cards */
        .app-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .app-card {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
            animation: slideUp 0.6s ease both;
        }

        .app-card:nth-child(2) { animation-delay: 0.1s; }
        .app-card:nth-child(3) { animation-delay: 0.2s; }

        .app-card:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-5px);
        }

        .app-card h3 {
            margin: 0 0 1.5rem 0;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
        }

        .app-card h3 i {
            margin-right: 10px;
            background: rgba(255,255,255,0.2);
            padding: 10px;
            border-radius: 10px;
        }

        .job-entry {
            margin-bottom: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .job-entry:last-child { border: none; margin: 0; padding: 0; }

        .job-entry h4 { margin: 0 0 0.5rem 0; }
        .job-entry span { font-size: 0.8rem; color: var(--text-sub); display: block; margin-bottom: 0.5rem; }
        .job-entry p { margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-sub); }

        .tag-cloud {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .tag {
            background: rgba(255,255,255,0.2);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 0.85rem;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
            .app-window { flex-direction: column; height: 100%; border-radius: 0; }
            .sidebar { width: 100%; padding: 1rem; border-right: none; border-bottom: 1px solid var(--glass-border); flex-direction: row; align-items: center; }
            .user-profile { margin: 0; display: flex; align-items: center; text-align: left; }
            .user-profile img { width: 50px; height: 50px; margin: 0 1rem 0 0; }
            .nav-menu { display: none; }
            .main-content { padding: 2rem; }
            .btn-action { width: auto; margin: 0 0 0 auto; }
        }
    </style>
</head>
<body>

    <div class="app-window">
        
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="user-profile">
                <img src="{{ asset('assets/img/person.jpg') }}" alt="Hafiz Ruslan">
                <h2>Hafiz Ruslan</h2>
                <p>Fullstack Developer</p>
            </div>
            
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link active"><i class="fas fa-home"></i> Overview</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"><i class="fas fa-briefcase"></i> Experience</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"><i class="fas fa-code"></i> Skills</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"><i class="fas fa-graduation-cap"></i> Education</a>
                </li>
            </ul>

            <a href="{{asset('assets/file/Resume Muhammad Hafiz Ruslan.pdf')}}" class="btn-action">
                <i class="fas fa-download"></i> Get Resume
            </a>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <div class="content-header">
                <h1>Welcome to my workspace</h1>
                <p>I enjoy using creative solutions in problem-solving and make use of my knowledge to assist others. Explore my professional journey below.</p>
            </div>

            <div class="app-grid">
                
                <!-- Experience Widget -->
                <div class="app-card">
                    <h3><i class="fas fa-building"></i> Work Experience</h3>
                    
                    <div class="job-entry">
                        <h4>PHP Programmer</h4>
                        <span>IMT Tech | Jul 2023 - Present</span>
                        <p>Implemented LaTeX for rapid PDF invoice generation. Built comprehensive booking systems for 300+ rooms.</p>
                    </div>

                    <div class="job-entry">
                        <h4>PHP Developer</h4>
                        <span>Unijaya Resources | Sep 2021 - May 2023</span>
                        <p>Collaborated to develop and maintain 7 live projects. Enhanced API and backend architectural performance.</p>
                    </div>
                </div>

                <!-- Skills Widget -->
                <div class="app-card">
                    <h3><i class="fas fa-laptop-code"></i> Tech Stack</h3>
                    <div class="tag-cloud">
                        <span class="tag">Laravel</span>
                        <span class="tag">PHP</span>
                        <span class="tag">Vue JS</span>
                        <span class="tag">React JS</span>
                        <span class="tag">Node JS</span>
                        <span class="tag">MySQL</span>
                        <span class="tag">MongoDB</span>
                        <span class="tag">SASS</span>
                    </div>
                </div>

                <!-- Education Widget -->
                <div class="app-card">
                    <h3><i class="fas fa-university"></i> Education</h3>
                    
                    <div class="job-entry">
                        <h4>BSc Computer Science</h4>
                        <span>UiTM | 2021</span>
                        <p>First-class honors graduate (CGPA: 3.53). Project Leader for Build-IT KICTM.</p>
                    </div>
                    
                    <div class="job-entry">
                        <h4>Science PST Module II</h4>
                        <span>Selangor Matriculation College | 2017</span>
                        <p>Graduated with CGPA: 3.83.</p>
                    </div>
                </div>

            </div>
        </main>
    </div>

</body>
</html>
