//validation function


function validateForm(form) {
    $('#guest-form').validate({
        rules: {
            firstname: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            website: {
                url: true
            
            },
            country: {
                required: true,
                minlength: 2
            },

            comments: {
                minlength: 5
            }
        },
        messages: {
            firstname: {
                required: "First Name is required",
                minlength: "Your First Name must be at least 2 characters"
            },
            lastname: {
                required: "Last Name is required",
                minlength: "Your Last Name must be at least 2 characters"
            },
            email: {
                required: "Email is required, everyone has an email, right?",
                email: "Please enter a valid email"
            },
            website: {
                url: "Please enter a valid url beginning with 'http://'"
            
            },
            country: {
                required: "Country is required",
                minlength: "Country must be at least 2 characters"
            },

            comments: {
                minlength: "Comments must be at least 5 characters"
            }        
        }
    });
                             
}

$(document).ready(function() {
    var path = location.pathname;
    var pathArray = path.split('/');
    var pArrLength = pathArray.length;
    for(i = 0; i < pArrLength; i++) {
        $("a[href*='" + pathArray[i] + "']").addClass("selected");
 

    }
    $('#accordion').accordion({
       heightStyle: "content"
    });
    
    $('nav li').hover(function() {
        $(this).find('.subnav').slideDown(1000);
        $(this).find('a').addClass('active');
        $(this).stop(true,true);
    }, function() {
        $(this).find('.subnav').slideUp(1000);
        $(this).find('a').removeClass('active');
        $(this).stop(true,true);
    });
        
});