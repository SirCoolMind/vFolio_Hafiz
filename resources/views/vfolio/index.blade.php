<!DOCTYPE html>
<html lang="en" class="scroll-smooth" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $page['title'] }}</title>
    <meta name="description" content="{{ $page['description'] }}">
    <meta name="author" content="Muhammad Hafiz Ruslan">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="{{ $canonical }}">

    <!-- OpenGraph / Twitter: what LinkedIn, WhatsApp, Slack etc. show for a shared link -->
    <meta property="og:type" content="profile">
    <meta property="og:site_name" content="Muhammad Hafiz Ruslan">
    <meta property="og:locale" content="en_MY">
    <meta property="og:url" content="{{ $canonical }}">
    <meta property="og:title" content="{{ $page['title'] }}">
    <meta property="og:description" content="{{ $page['description'] }}">
    <meta property="og:image" content="{{ asset('assets/img/og-image.jpg') }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Muhammad Hafiz Ruslan, AI-assisted full-stack developer and software engineer">
    <meta property="profile:first_name" content="Muhammad Hafiz">
    <meta property="profile:last_name" content="Ruslan">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $page['title'] }}">
    <meta name="twitter:description" content="{{ $page['description'] }}">
    <meta name="twitter:image" content="{{ asset('assets/img/og-image.jpg') }}">

    <!-- Structured data: lets Google tie this site, GitHub and LinkedIn to one person -->
    <script type="application/ld+json">
    {!! json_encode([
        '@context' => 'https://schema.org',
        '@graph' => [
            [
                '@type' => 'WebSite',
                '@id' => route('home').'#website',
                'url' => route('home'),
                'name' => 'Muhammad Hafiz Ruslan',
                'inLanguage' => 'en',
                'publisher' => ['@id' => route('home').'#person'],
            ],
            [
                '@type' => 'ProfilePage',
                '@id' => $canonical.'#webpage',
                'url' => $canonical,
                'name' => $page['title'],
                'description' => $page['description'],
                'isPartOf' => ['@id' => route('home').'#website'],
                'mainEntity' => ['@id' => route('home').'#person'],
            ],
            [
                '@type' => 'Person',
                '@id' => route('home').'#person',
                'name' => 'Muhammad Hafiz Ruslan',
                'alternateName' => 'Hafiz Ruslan',
                'url' => route('home'),
                'image' => asset('assets/img/person.jpg'),
                'jobTitle' => 'AI-Assisted Full-Stack Developer & Software Engineer',
                'description' => 'AI-assisted full-stack developer and software engineer based in Malaysia, building Laravel, Vue.js and Node.js systems for government and enterprise clients.',
                'worksFor' => ['@type' => 'Organization', 'name' => 'Unijaya Resources Sdn Bhd'],
                'alumniOf' => ['@type' => 'CollegeOrUniversity', 'name' => 'Universiti Teknologi MARA (UiTM)'],
                'address' => ['@type' => 'PostalAddress', 'addressLocality' => 'Kuala Lumpur', 'addressCountry' => 'MY'],
                'knowsAbout' => ['Laravel', 'PHP', 'Vue.js', 'React', 'Node.js', 'PostgreSQL', 'ClickHouse', 'LaTeX', 'GitLab CI/CD', 'DevSecOps'],
                'sameAs' => ['https://github.com/SirCoolMind', 'https://www.linkedin.com/in/hafizruslan98/'],
            ],
        ],
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_HEX_TAG) !!}
    </script>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/favicon.ico') }}" type="image/x-icon">

    <!-- Hero portrait (LCP): start the download now instead of after the JS bundle renders.
         srcset/sizes must match HeroSection.tsx. -->
    <link rel="preload" as="image" fetchpriority="high"
          href="/assets/img/person.webp"
          imagesrcset="/assets/img/person-600.webp 600w, /assets/img/person-900.webp 900w, /assets/img/person.webp 1200w"
          imagesizes="(min-width: 768px) 390px, (min-width: 640px) 360px, 320px">

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

    @production
    <!-- Microsoft Clarity: heatmaps & session recordings (live site only) -->
    <script type="text/javascript">
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "yt6zlqvzwi");
    </script>
    @endproduction
</head>
<body class="bg-black text-white antialiased">
    <!-- React Root Mount Container. The markup inside is replaced when React mounts;
         it gives crawlers that don't run JavaScript real text and links to follow. -->
    <div id="root">
        <div class="sr-only">
            <h1>Muhammad Hafiz Ruslan, AI-Assisted Full-Stack Developer &amp; Software Engineer</h1>
            <p>{{ $page['description'] }}</p>
            <nav aria-label="Pages">
                <a href="{{ route('home') }}">Home</a>
                <a href="{{ route('about') }}">About</a>
                <a href="{{ route('work') }}">Work</a>
                <a href="{{ route('contact') }}">Contact</a>
                <a href="/assets/file/Resume%20Muhammad%20Hafiz%20Ruslan%202026.pdf">Resume (PDF)</a>
                <a href="https://github.com/SirCoolMind">GitHub</a>
                <a href="https://www.linkedin.com/in/hafizruslan98/">LinkedIn</a>
            </nav>
        </div>
    </div>

    <noscript>
        <div class="p-8 text-center text-white bg-black">
            <h1 class="text-2xl font-bold">JavaScript Required</h1>
            <p class="mt-2 text-white/70">Please enable JavaScript to view the full interactive portfolio of Muhammad Hafiz Ruslan.</p>
        </div>
    </noscript>
</body>
</html>
