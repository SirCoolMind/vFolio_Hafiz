<div class="vg-page page-home" id="home" style="background-image: url({{asset('assets/img/bg_image_1.jpg')}}">
    <!-- Navbar -->
    <div class="navbar navbar-expand-lg navbar-dark sticky" data-offset="500">
        <div class="container">
            <a href="" class="navbar-brand">vFolio</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
                <span class="ti-menu"></span>
            </button>
            <div class="collapse navbar-collapse" id="main-navbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a href="#home" class="nav-link" data-animate="scrolling">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link" data-animate="scrolling">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#portfolio" class="nav-link" data-animate="scrolling">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#blog" class="nav-link" data-animate="scrolling">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link" data-animate="scrolling">Contact</a>
                    </li>
                </ul>
                <ul class="nav ml-auto">
                    <li class="nav-item">
                        {{-- <button class="btn btn-fab btn-theme no-shadow">En</button> --}}
                    </li>
                </ul>
            </div>
        </div>
    </div> <!-- End Navbar -->
    <!-- Caption header -->
    <div class="caption-header text-center wow zoomInDown">
        <h5 class="fw-normal">{{__('general.welcome')}}</h5>
        <h1 class="fw-light mb-4">I'm <b class="fg-theme">Hafiz</b> Ruslan</h1>
        <div class="badge">Laravel Fullstack Web Developer</div>
        <div> <img src="{{asset('assets/img/logo/laravel_logo.png')}}" alt="" width="auto" height="60"></div>
    </div> <!-- End Caption header -->
    <div class="floating-button"><span class="ti-mouse"></span></div>
</div>
