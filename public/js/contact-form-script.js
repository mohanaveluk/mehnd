$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var contnumber = $("#mobilenumber").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "/contact/add",
        data: {userName:name, userEmail:email, userPhone:contnumber, userMessage:message},
        dataType: "JSON",
        success : function(response){
            if (response !== '' && response.status) {
                formSuccess(response.message);
            } else {
                formError();
                submitMSG(false, response.message);
            }
        },failure: function(response) {
            formError();
            submitMSG(false, response.message);
        }
    });
}

function formSuccess(message){
    $("#contactForm")[0].reset();
    submitMSG(true, message)
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success mt-3";
    } else {
        var msgClasses = "h3 text-center text-danger mt-3";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}