<script>
    initializeFlatpickr = function(){

        $('.flatpickr-y-m-d').flatpickr({
            dateFormat: 'Y-m-d',
            allowInput: true
        });

        $('.flatpickr').flatpickr({
            dateFormat: 'd/m/Y',
            allowInput: true
        });
        $('.flatpickr').flatpickr({
            dateFormat: 'd/m/Y',
            allowInput: true
        });
    }

    initializeTooltipPopover = function(){
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            // added { html: true, sanitize: false } option to render button in content area of popover
            return new bootstrap.Popover(popoverTriggerEl, { html: true, sanitize: false, trigger: 'focus' });
        });

        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    $(function(){
        initializeFlatpickr();
        initializeTooltipPopover();
    })
</script>

{{-- General Function --}}
<script>
    currencyFormat = function(elem,e){
        let initValue = $(elem).val();
        let value = initValue
            .replace(/\D/g,"")
            .replace(/^0+/,'')
            .replace(/([0-9])([0-9]{2})$/, '$1.$2')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // skip for arrow keys
        if (e.which >= 37 && e.which <= 40)
            return;

        //adjusted value because regex couldnt help
        let length = value.length;
        if(length == 0){ value = "0.00"; }
        else if(length == 1 ){ value = "0.0"+value.toString(); }
        else if(length == 2 ){ value = "0."+value.toString(); }

        $(elem).val(value);
    }

    refreshDatatableByID = function(target){
        $('#'+target).DataTable().ajax.reload( function() {
            initializeTooltipPopover();
        });
    }
</script>
{{-- General Function END --}}

<script>
    generalFormSubmit = function(elem) {
        var form = $(elem).closest('form');
        var refreshFunctionName = form.attr('data-refreshFunctionName');
        var refreshFunctionNameIfSuccess = form.attr('data-refreshFunctionNameIfSuccess');
        var refreshFunctionURL = form.attr('data-refreshFunctionURL');
        var refreshFunctionDivId = form.attr('data-refreshFunctionDivId');
        var reloadPage = form.attr('data-reloadPage');
        event.preventDefault();
        $.ajax({
            url: $(form).attr('action'),
            method: $(form).attr('method'),
            data: new FormData($(form)[0]),
            async: true,
            contentType: false,
            processData: false,
            success: function(data) {

                toastr.success(data.title ?? "Saved");
                event.preventDefault();

                //If data-reloadPage exists, then reload the page
                if (reloadPage) {
                    if (reloadPage == "true") {
                        location.reload();
                        return false;
                    }
                }

                //If redirect page exists, then redirect to the page
                if(data.redirectRoute ?? false){
                    window.location.href = data.redirectRoute;
                    return false;
                }

                //or put the div id directly to load with the url
                if (refreshFunctionDivId) {
                    if (refreshFunctionURL) {
                        $('#' + refreshFunctionDivId).load(refreshFunctionURL,function(){
                            if(refreshFunctionName){ executeFunctionByName(refreshFunctionName) }
                            if(refreshFunctionNameIfSuccess){ executeFunctionByName(refreshFunctionNameIfSuccess) }
                        });
                    }

                }else{
                    if(refreshFunctionName){ executeFunctionByName(refreshFunctionName) }
                    if(refreshFunctionNameIfSuccess){ executeFunctionByName(refreshFunctionNameIfSuccess) }
                }
                return false;

            },
            error: function(data) {
                var data = data.responseJSON;
                // console.log(data);
                if (data.errors === undefined) {
                    if(data.message == "CSRF token mismatch.")
                        Swal.fire("Token Expired", "Please refresh the page", 'error');
                    else
                        Swal.fire(data.title, data.detail, 'error');
                } else {
                    $('#bahagianErrorBox').html("").show(); //clear error message
                    let errorsHtml = "<ul>";
                    $.each(data.errors, function(key, value) {
                        errorsHtml += '<li>' + value + '</li>';
                    });
                    errorsHtml += '</ul>';
                    $('#bahagianErrorBox').html(errorsHtml); //put error message into box
                    $('html, body').animate({
                        scrollTop: 0
                    }, 'fast'); // scroll to the top
                }

                 //or put the div id directly to load with the url
                 if (refreshFunctionDivId) {
                    if (refreshFunctionURL) {
                        $('#' + refreshFunctionDivId).load(refreshFunctionURL,function(){
                            if(refreshFunctionName){ executeFunctionByName(refreshFunctionName) }
                        });
                    }

                }else{
                    if(refreshFunctionName){ executeFunctionByName(refreshFunctionName) }
                }
                return false;
            },
        });
    }

    getModalContent = (elem) => {
        $.get(elem.dataset.action, function(response) {
            $("#general-modal-div").html(response);
            initializeFlatpickr();
            $("#general-modal-div #baseAjaxModalContent").modal("show");
        });
    }
</script>

{{-- Toastr Config --}}
<script>
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
</script>
{{-- Toastr Config END --}}
