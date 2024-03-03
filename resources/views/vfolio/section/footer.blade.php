<div class="vg-footer" id="contact">
    <h1 class="text-center">vFolio Hafiz Ruslan</h1>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-3 py-3">
                <div class="float-lg-right">
                    <p>Follow me</p>
                    <hr class="divider">
                    <ul class="list-unstyled">
                        <li><i class="fa-brands fa-square-github" style="color: #ffffff;"></i>&nbsp;<a href="https://www.linkedin.com/in/hafizruslan98/" target="_blank">LinkedIn</a></li>
                        <li><i class="fa-brands fa-linkedin" style="color: #ffffff;"></i>&nbsp;<a href="https://github.com/SirCoolMind" target="_blank">Github</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 py-3">
                <div class="float-lg-left">
                    <p>Contact me</p>
                    <hr class="divider">
                    <ul class="list-unstyled">
                        <li>hafizcoolman@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-12 col-lg-5 py-3">
                <div class="float-lg-right">
                    <p>Get In Touch</p>
                    <hr class="divider">
                    <div class="row">
                        <form class="pt-0" method="POST" action="{{route('sendEmail')}}">
                            @csrf
                            <div class="form-row">
                                <div class="col-12 wow fadeInUp">
                                    <input class="form-control" type="text" name="contact_name" placeholder="Your Name">
                                </div>
                                <div class="col-6 mt-3 wow fadeInUp">
                                    <input class="form-control" type="email" name="contact_email" placeholder="Email Address">
                                </div>
                                <div class="col-6 mt-3 wow fadeInUp">
                                    <input class="form-control" type="text" name="contact_subject" placeholder="Subject">
                                </div>
                                <div class="col-12 mt-3 wow fadeInUp">
                                    <textarea class="form-control" name="contact_message" rows="6"
                                        placeholder="Enter message here.."></textarea>
                                </div>
                                <div class="col-12 mt-3 wow fadeInUp">
                                    <input class="form-control" type="text" name="combat_spam" placeholder="17 + 2">
                                </div>
                                <button type="button" onclick="generalFormSubmit(this)" class="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-12">
                <p class="text-center mb-0 mt-4">Copyright &copy; 2023. Hafiz Ruslan. All right reserved.
            </div>
        </div>
    </div>
</div>
