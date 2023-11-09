/*------------------------------------*\
	Newsletter
\*------------------------------------*/

// Attach the following code to the document ready event
$(document).ready(function() {
    // Create an empty array to store subscribed email addresses
    var subscribedEmails = [];

    // Attach a click event handler to the "subscribeButton" button
    $("#subscribeButton").click(function() {
        // Get the email entered in the input field
        var email = $("#newsletterEmail").val(); // Get the value of the input field with ID "newsletterEmail"

        // Check if the email input is empty
        if (email === "") {
            // If empty, display an alert requesting the user to enter an email
            alert("Please enter your email address.");
        }
        // Check if the email does not end with either @gmail.com or @outlook.com
        else if (!(email.endsWith("@gmail.com") || email.endsWith("@outlook.com"))) {
            // If it doesn't, display an alert indicating that the email is invalid
            alert("Please enter a valid email address ending with @gmail.com or @outlook.com.");
        } 
        // Check if the email is already in the list of subscribed emails
        else if (subscribedEmails.includes(email)) {
            // If it is, display an alert indicating that the user is already subscribed
            alert("You are already subscribed with this email address.");
        } 
        // If the email is not empty and not in the list of subscribed emails, add it to the list
        else {
            subscribedEmails.push(email); // Add the email to the list of subscribed emails

            // Call a function to display a confirmation message
            displayConfirmationMessage();
        }
    });

    // Define a function to display the confirmation message
    function displayConfirmationMessage() {
        // Display a confirmation message in an alert
        alert("Thank you for subscribing to our newsletter!");

        // Clear the email input field
        $("#newsletterEmail").val(""); // Clear the value of the input field with ID "newsletterEmail"
    }
});

/*------------------------------------*\
	Testimonial Carousel
\*------------------------------------*/

// Wait for the document to be fully loaded before executing any code
$(document).ready(function () {

    // Select the HTML element with the class "owl-carousel" and store it in the variable "silder"
    var silder = $(".owl-carousel");

    // Initialize the Owl Carousel on the selected element with various configuration options
    silder.owlCarousel({
        // Enable autoplay for the carousel
        autoplay: true,

        // Set the autoplay interval to 3 seconds (3000 milliseconds)
        autoplayTimeout: 3000,

        // Don't pause autoplay when hovering over the carousel
        autoplayHoverPause: false,

        // Show only one item at a time in the carousel
        items: 1,

        // Add space to the stage (container) on both sides
        stagePadding: 20,

        // Center the active item in the carousel
        center: true,

        // Hide navigation arrows (next/prev)
        nav: false,

        // Set the margin between items to 50 pixels
        margin: 50,

        // Show pagination dots
        dots: true,

        // Enable infinite looping of the carousel
        loop: true,

        // Define responsive settings based on the viewport width
        responsive: {
            // When viewport width is 0 or more, show 1 item
            0: { items: 1 },

            // When viewport width is 480px or more, show 2 items
            480: { items: 2 },

            // When viewport width is 575px or more, show 2 items
            575: { items: 2 },

            // When viewport width is 768px or more, show 2 items
            768: { items: 2 },

            // When viewport width is 991px or more, show 3 items
            991: { items: 3 },

            // When viewport width is 1200px or more, show 4 items
            1200: { items: 4 }
        }
    });
});