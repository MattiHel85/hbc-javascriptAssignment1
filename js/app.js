$(function() {
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    
    //Serialize the form data
    var formData = $(form).serialize();

    //Submit the form using AJAX
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })

    .done(function(response){
        //make sure that the formMessages div has the 'success' class
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        //Set the message text
        $(formMessages).text(response);

        //Clear the form
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    })

    .fail(function(data) {
        //make sure that the formMessages div has the 'error' class
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        //Set the message text
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text("Error, your message wasn't sent");
        }
    })
});