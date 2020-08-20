$(document).ready(function () {         // DOM loaded and ready
    $("#fName").focus();                // Sets focus to first name field
    $("#contact_form").validate(
        {   // jQuery Form validation plugin invoked
            rules: {                        // Plugin rules begins

                fName: {
                    required: true          // Field is required
                },

                lName: {
                    required: true          // Field is required
                },

                email: {
                    required: true,         // Field is required
                    email: true             // Field is email
                },

                phone: {
                    required: true,         // Field is required
                    phoneUS: true           // Field is US phone number
                },

                questions: {
                    required: true          // Field is required
                }
            },
            messages: {
                email: "Enter a valid email",        // Custom message for email
                questions: "Inquiry is required"     // Custom message for questions
            },
        }); // end validate
    // Form animation
    $("#contact_form").animate(
        { opacity: .1 }, 2000, "easeInExpo")
        .animate(
            { opacity: .78 }, 1500, "easeOutExpo");

    // Add padding and rounding to input controls 
    $(":text")
    .css("padding", "3px")
    .css("border-radius","6px");

    $("input[name='email']")
    .css("padding", "3px")
    .css("border-radius","6px");

    $("input[name='phone']")
    .css("padding", "3px")
    .css("border-radius","6px");

    $("input[name='d']")
    .css("padding", "3px")
    .css("border-radius","6px");
}); // end ready
