<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Virtual Folio - Portfolio HTML5 Template</title>

    <link rel="shortcut icon" href="{{ asset('assets/favicon.ico') }}" type="image/x-icon">

    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/themify-icons.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/bootstrap.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('assets/vendor/animate/animate.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('assets/vendor/owl-carousel/owl.carousel.css')}}">

    <link rel="stylesheet" type="text/css"
        href="{{asset('assets/vendor/perfect-scrollbar/css/perfect-scrollbar.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('assets/vendor/nice-select/css/nice-select.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('assets/vendor/fancybox/css/jquery.fancybox.min.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/virtual.css')}}">

    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/topbar.virtual.css')}}">
</head>

<body class="theme-red">

    <!-- Back to top button -->
    <div class="btn-back_to_top">
        <span class="ti-arrow-up"></span>
    </div>

    <!-- Setting button -->
    <div class="config">
        <div class="template-config">
            <!-- Settings -->
            <div class="d-block">
                <button class="btn btn-fab btn-sm" id="sideel" title="Settings"><span
                        class="ti-settings"></span></button>
            </div>
            <!-- Puschase -->
            <div class="d-block">
                <a href="https://macodeid.com/projects/virtual-folio/" class="btn btn-fab btn-sm"
                    title="Get this template" data-toggle="tooltip" data-placement="left"><span
                        class="ti-download"></span></a>
            </div>
            <!-- Help -->
            <div class="d-block">
                <a href="#" class="btn btn-fab btn-sm" title="Help" data-toggle="tooltip" data-placement="left"><span
                        class="ti-help"></span></a>
            </div>
        </div>
        <div class="set-menu">
            <p>Select Color</p>
            <div class="color-bar" data-toggle="selected">
                <span class="color-item bg-theme-red selected" data-class="theme-red"></span>
                <span class="color-item bg-theme-blue" data-class="theme-blue"></span>
                <span class="color-item bg-theme-green" data-class="theme-green"></span>
                <span class="color-item bg-theme-orange" data-class="theme-orange"></span>
                <span class="color-item bg-theme-purple" data-class="theme-purple"></span>
            </div>
            <select class="custom-select d-block my-2" id="change-page">
                <option value="">Choose Page</option>
                <option value="index">Topbar</option>
                <option value="blog-topbar">Blog (Topbar)</option>
                <option value="index-2">Minibar</option>
                <option value="blog-minibar">Blog (Minibar)</option>
            </select>
        </div>
    </div>

    @include('vfolio.section.header')

    @include('vfolio.section.about')

    @include('vfolio.section.service')

    @include('vfolio.section.funfact')

    <!-- Portfolio page -->
    @include('vfolio.section.portfolio')
    <!-- End Portfolio page -->

    <!-- Testimonial -->
    @include('vfolio.section.testimonial')
    <!-- End testimonial -->

    <!-- Client -->
    @include('vfolio.section.client')
    <!-- End client -->

    <!-- Blog -->
    @include('vfolio.section.blog')
    <!-- End blog -->

    <!-- Contact -->
    @include('vfolio.section.contact')
    <!-- End Contact -->

    <!-- Footer -->
    @include('vfolio.section.footer')
    <!-- End footer -->


    <script src="{{ asset('assets/js/jquery-3.5.1.min.js') }}"></script>

    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('assets/vendor/owl-carousel/owl.carousel.min.js') }}"></script>

    <script src="{{ asset('assets/vendor/perfect-scrollbar/js/perfect-scrollbar.js') }}"></script>

    <script src="{{ asset('assets/vendor/isotope/isotope.pkgd.min.js') }}"></script>

    <script src="{{ asset('assets/vendor/nice-select/js/jquery.nice-select.min.js') }}"></script>

    <script src="{{ asset('assets/vendor/fancybox/js/jquery.fancybox.min.js') }}"></script>

    <script src="{{ asset('assets/vendor/wow/wow.min.js') }}"></script>

    <script src="{{ asset('assets/vendor/animateNumber/jquery.animateNumber.min.js') }}"></script>

    <script src="{{ asset('assets/vendor/waypoints/jquery.waypoints.min.js') }}"></script>

    <script src="{{ asset('assets/js/google-maps.js') }}"></script>

    <script src="{{ asset('assets/js/topbar-virtual.js') }}"></script>

    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM&callback=initMap">
    </script>

</body>

</html>
