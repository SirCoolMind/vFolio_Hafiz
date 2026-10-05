<!DOCTYPE html>
<html lang="en" class="scroll-smooth" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Muhammad Hafiz Ruslan | AI-Assisted Full-Stack Developer & Software Engineer</title>
    <meta name="description" content="Muhammad Hafiz Ruslan, AI-assisted full-stack developer and software engineer in Malaysia. Laravel, Vue.js and Node.js systems for government and enterprise clients.">
    <meta name="keywords" content="Muhammad Hafiz Ruslan, Hafiz Ruslan, AI-Assisted Full-Stack Developer, Laravel Developer, PHP 8.3, LaTeX Engine, Vue.js, React, Next.js, Tailwind CSS, Malaysia">
    <meta name="author" content="Muhammad Hafiz Ruslan">

    <!-- OpenGraph -->
    <meta property="og:title" content="Muhammad Hafiz Ruslan | AI-Assisted Full-Stack Developer & Software Engineer">
    <meta property="og:description" content="AI-assisted full-stack developer and software engineer. Laravel, Vue.js and Node.js systems for government and enterprise clients.">
    <meta property="og:image" content="{{ asset('assets/img/person.jpg') }}">
    <meta property="og:type" content="website">

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/favicon.ico') }}" type="image/x-icon">

    <!-- Google Fonts Preconnect & Stylesheets -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Serif+Display:ital,wght@1,300;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Theme bootstrap: apply saved or system theme before first paint -->
    <script>
        (function () {
            var theme = null;
            try { theme = localStorage.getItem('theme'); } catch (e) {}
            if (theme !== 'light' && theme !== 'dark') {
                theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
            }
            document.documentElement.setAttribute('data-theme', theme);
        })();
    </script>

    <!-- Vite Assets -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
</head>
<body class="bg-black text-white antialiased">
    <!-- React Root Mount Container -->
    <div id="root"></div>

    <noscript>
        <div class="p-8 text-center text-white bg-black">
            <h1 class="text-2xl font-bold">JavaScript Required</h1>
            <p class="mt-2 text-white/70">Please enable JavaScript to view the full interactive portfolio of Muhammad Hafiz Ruslan.</p>
        </div>
    </noscript>
</body>
</html>
