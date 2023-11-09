/*------------------------------------*\
	Menu
\*------------------------------------*/

// Wait for the HTML document to be fully loaded and interpreted
document.addEventListener("DOMContentLoaded", function() {
    // Find the default 'Lunch' tab link and its content
    const lunchTabLink = document.querySelector('a[href="#Lunch"]');
    const lunchTabContent = document.querySelector('#Lunch');

    // Mark the default 'Lunch' tab link and tab content as 'active' and 'show'
    lunchTabLink.classList.add('active'); // Mark the default tab link as active
    lunchTabContent.classList.add('active', 'in', 'show'); // Mark the default tab content as active and shown

    // Add click event listeners to handle tab switching for all menu tab links
    document.querySelectorAll('.menu-nav a[data-toggle="tab"]').forEach(function(tabLink) {
        tabLink.addEventListener('click', function(event) {
            // Prevent the default behavior of the link (e.g., navigating to a URL)
            event.preventDefault();

            // Remove the 'active', 'in', and 'show' classes from all tab links and tab contents
            document.querySelectorAll('.menu-nav li, .tab-pane').forEach(function(item) {
                item.classList.remove('active', 'in', 'show');
            });

            // Find the corresponding tab content based on the clicked tab link
            const targetContent = document.querySelector(this.getAttribute('href'));

            // Add the 'active', 'in', and 'show' classes to the clicked tab link and its corresponding content
            this.parentElement.classList.add('active'); // Mark the clicked tab link as active
            targetContent.classList.add('active', 'in', 'show'); // Mark the corresponding tab content as active and shown
        });
    });
});
  
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
            "Name:             " + name + "\n" +
            "Phone:            " + phone + "\n" +
            "Date:             " + date + "\n" +
            "Email:            " + email + "\n" +
            "Number of Guests: " + number + "\n" +
            "Time:             " + time;

        alert(confirmationMessage);

        // Reset the form after submission.
        $("#reservationForm")[0].reset();
    });
});

/*------------------------------------*\
	Basket
\*------------------------------------*/
// Initialize an empty array to represent the shopping basket
const Basket = [];

// Function to add a product to the shopping basket
function addToBasket(productName, price) {
    // Nested function to find a product in the basket based on its name
    function findProduct(item) {
        return item.productName === productName;
    }

    // Find a product in the basket using the findProduct function
    const product = Basket.find(findProduct);

    if (product) {
        // If the product is already in the basket, increment its quantity
        product.quantity++;
    } else {
        // If the product is not in the basket, add it with a quantity of 1
        Basket.push({ productName, price, quantity: 1 });
    }

    // Update the basket display and total cost
    updateBasket();
}

// Function to remove a product from the shopping basket
function removeFromBasket(productName) {
    // Find the index of the product to be removed in the basket
    const index = Basket.findIndex(item => item.productName === productName);

    if (index !== -1) {
        // If the product is found in the basket
        if (Basket[index].quantity > 1) {
            // If the product quantity is greater than 1, decrement the quantity
            Basket[index].quantity--;
        } else {
            // If the product quantity is 1, remove the product from the basket
            Basket.splice(index, 1);
        }

        // Update the basket display and total cost
        updateBasket();
    }
}

// Function to update the basket display and calculate the total cost
function updateBasket() {
    // Get the basket items container element from the HTML
    const BasketItems = document.getElementById("BasketItems");

    // Clear the basket display by setting its content to an empty string
    BasketItems.innerHTML = "";

    // Initialize a variable 'total' to keep track of the total cost
    let total = 0;

    // Iterate through each item in the basket
    Basket.forEach(item => {
        // Create a list item element for each item
        const BasketItem = document.createElement("li");

        // Create a "Remove" button element
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove";

        // Add an onclick event handler to remove the respective product
        removeButton.onclick = () => removeFromBasket(item.productName);

        // Display product name, quantity, and total price for each item
        BasketItem.textContent = `${item.productName} x${item.quantity} - £${(item.price * item.quantity).toFixed(2)}`;

        // Append(adding, attaching or concatenating one element or data) the "Remove" button to the list item
        BasketItem.appendChild(removeButton);

        // Append(adding, attaching or concatenating one element or data) the list item to the basket items container
        BasketItems.appendChild(BasketItem);

        // Calculate the total cost by summing the cost of each item
        total += item.price * item.quantity;
    });

    // Get the element for displaying the total cost
    const BasketTotal = document.getElementById("BasketTotal");

    // Display the total cost with two decimal places
    BasketTotal.textContent = total.toFixed(2);
}

// Placeholder function for implementing the buy process
function buy() {
    alert("Payment gateway is not added yet.");
}

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