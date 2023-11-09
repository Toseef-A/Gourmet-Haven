/*------------------------------------*\
	Reservation form
\*------------------------------------*/

// Execute this code when the document is ready.
$(document).ready(function() {

    $("#reservationForm").submit(function(event) {
        // Prevent the form from submitting immediately.
        event.preventDefault(); 

        // Validation for Name: Ensure it contains two strings separated by a space.
        var name = $("#name").val();
        var nameParts = name.split(" ");

        if (nameParts.length !== 2) {
            alert("Please enter both a first name and a surname separated by a space.");
            // Stop form submission if validation fails.
            return;
        }

        // Validation for Phone: Ensure it starts with "+44" or "07" and has the correct number of digits.
        var phone = $("#phone").val();

        if (phone.startsWith("07") && digits.length === 11) {
            alert("Please enter a valid phone number starting with +44 or 07 and consisting of the correct number of digits.");
            return;
        }

        // Validation for Date: Ensure it's not empty.
        var date = $("#date").val();
        if (date === "") {
            alert("Date is required. Please fill it in.");
            return;
        }

        // Validation for Email: Custom validation based on pattern.
        var email = $("#email").val();

        // Check if the email ends with "@gmail.com" or "@outlook.com."
        if (!(email.endsWith("@gmail.com") || email.endsWith("@outlook.com"))) {
            alert("Please enter a valid email address ending with @gmail.com or @outlook.com.");
            return;
        }

        // Validation for Number of Guests: Ensure it's not the default "Select" value.
        var number = $("#Npeople").val();
        if (number === "Select the number" || number === "") {
            alert("Please select the number of guests.");
            return;
        }

        // Validation for Time: Ensure it's not empty.
        var time = $("#time").val();
        if (time === "") {
            alert("Time is required. Please fill it in.");
            return;
        }

        // Display a confirmation message after successful form submission.
        var confirmationMessage = "You have successfully booked a table with the following details:\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Date: " + date + "\n" +
            "Email: " + email + "\n" +
            "Number of Guests: " + number + "\n" +
            "Time: " + time;

        alert(confirmationMessage);

        // Reset the form after submission.
        $("#reservationForm")[0].reset();
    });
});

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