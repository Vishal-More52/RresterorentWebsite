

// nav hide 

function navHide() {
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
}
navHide()

   


// =================================================
// ===============  Counter script start =================
// =================================================
   // counter design
 document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
 });



// =================================================
// ===============  Counter script end =================
// =================================================




// aos animation

function AOS_Animation(){

    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        offset: 100,
    });
}

AOS_Animation()










// =========================================
//              Booking table script
// ===================================
function BookTable(){
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form
        const personCount = document.getElementById('select1').value;
        const bookingDate = document.getElementById('datepicker1').value;
        const bookingTime = document.getElementById('timepicker').value;

        // Check if all fields are filled
        if (personCount && bookingDate && bookingTime) {
            // Create the success message
            const message = `Table booked successfully! 
                             \nNumber of Persons: ${personCount} 
                             \nBooking Date: ${bookingDate} 
                             \nBooking Time: ${bookingTime}`;

            // Display the success notification
            const notification = document.getElementById('notification');
            notification.style.display = 'block';
            notification.classList.add('alert', 'alert-success');
            notification.textContent = message;

            // Reset the form
            document.getElementById('bookingForm').reset();
        } else {
            // If any field is empty, you can show an error message (optional)
            alert('Please fill in all the fields.');
        }
    });
}

BookTable()



// =========================================
// =========Contact form validation=========
// =========================================

function ContactFormValidation(){
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Clear previous error messages
        clearErrorMessages();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Basic validation
        if (name === '') {
            showError('nameError', 'Please enter your full name.');
            isValid = false;
        }
        if (email === '') {
            showError('emailError', 'Please enter your email address.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }
        if (subject === '') {
            showError('subjectError', 'Please enter a subject.');
            isValid = false;
        }
        if (message === '') {
            showError('messageError', 'Please enter a message.');
            isValid = false;
        }

        // If all validations pass, you can submit the form
        if (isValid) {
            alert('Form submitted successfully!');
            // Uncomment the next line to actually submit the form
            // this.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.color = 'red'; // Optional: Style the error message
    }

    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
}
 ContactFormValidation()



 // =========================================
// =========Order logic======================
// =========================================
function Order() {
    document.addEventListener("DOMContentLoaded", function() {
        const orderButtons = document.querySelectorAll('.order-btn');
        const orderMessage = document.getElementById('orderMessage');

        orderButtons.forEach(button => {
            button.addEventListener('click', function() {
                const foodName = this.getAttribute('data-name');
                const deliveryTime = this.getAttribute('data-time');
                const price = this.getAttribute('data-price');

                orderMessage.style.display = 'block';
                orderMessage.innerHTML = `Order placed successfully!<br>Food: ${foodName}<br>Delivery Time: ${deliveryTime}<br>Amount: ${price}`;
            });
        });
    });
}

Order()




function SendEmail(){
    (function(){
        emailjs.init("PO7q8Tn_HhojqS69y"); // Replace with your EmailJS user ID or public key
    })();

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        let templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs.send('service_ekd870k','template_8tsj1vc', templateParams)
        .then(function(response) {
            document.getElementById('statusMessage').innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
        }, function(error) {
            document.getElementById('statusMessage').innerHTML = '<div class="alert alert-danger">Failed to send message. Please try again later.</div>';
        });
    });

}

SendEmail()



function More_Details(){
    document.getElementById('clientForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous messages
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'none';

        // Perform validation (optional, as HTML5 validation is already set)
        if (this.checkValidity()) {
            // Show the success message
            document.getElementById('successMessage').style.display = 'block';

            // Optionally, reset the form after submission
            this.reset();
        } else {
            // Show the error message
            document.getElementById('errorMessage').style.display = 'block';
        }
    });
}
More_Details()

function More_DetailsSteps(){
    }

More_DetailsSteps()