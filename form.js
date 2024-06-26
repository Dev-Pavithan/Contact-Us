document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('btn');
    const contactForm = document.getElementById('contactForm');
    const closeButton = document.getElementById('closeBtn');

    contactButton.addEventListener('click', () => {
        contactFormContainer.style.display = 'flex';
        contactButton.style.display = 'none'; // Hide the button
    });

    closeButton.addEventListener('click', () => {
        contactForm.style.display = 'none';
        contactButton.style.display = 'block'; // Show the button again
    });
});
document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'flex';
    this.style.display = 'none'; 
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let address = document.getElementById('address').value.trim();
    let phone = document.getElementById('phone').value.trim();

    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    let nameError = document.getElementById('nameError');
    let addressError = document.getElementById('addressError');
    let phoneError = document.getElementById('phoneError');
    let emailError = document.getElementById('emailError');
    let messageError = document.getElementById('messageError');

    nameError.textContent = '';
    addressError.textContent = '';
    phoneError.telContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }
    
    if (address === '') {
        addressError.textContent = 'Address is required';
        isValid = false;
    }

    let phonePattern = /^\+94\d{9}$/;
    if (!phonePattern.test(phone)) {
        phoneError.telContent = 'Phone number must start with +94 followed by nine digits';
        isValid = false;
    }

    if (!email.includes('@')) {
        emailError.textContent = 'Email must contain @ symbol';
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        isValid = false;
    }

    if (isValid) {
        let formData = {
            name: name,
            address: address,
            phone: phone,
            email: email,
            message: message
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        document.getElementById('contactForm').style.display = 'none';
        alert('Form submitted successfully!');
    }
});
