<div class="container py-5">
    <div class="row">
        <div class="col-lg-4 py-3">
            <div class="img-place wow fadeInUp">
                <img src="{{ asset('assets/img/person.jpg') }}" alt="">
            </div>
        </div>
        <div class="col-lg-6 offset-lg-1 wow fadeInRight">
            <h1 class="fw-light">Muhammad Hafiz Ruslan</h1>
            <h5 class="fg-theme mb-3">Laravel Fullstack Web Developer</h5>
            <p class="text-muted">
                I enjoy using creative solutions in problem-solving and make use of my knowledge to assist others.
            </p>
            <ul class="theme-list">
                <li><b>From:</b> Kuala Lumpur, Malaysia</li>
                <li><b>Lives In:</b> Banting, Malaysia</li>
                <li><b>Age:</b> {{ Carbon::parse('1998-03-11')->age }}</li>
                <li><b>Gender:</b> Male</li>
            </ul>
            <a class="btn btn-theme-outline" href="{{asset('assets/file/Resume Muhammad Hafiz Ruslan.pdf')}}" target="_blank">Download Resume</a>
        </div>
    </div>
</div>
