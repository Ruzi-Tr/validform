
$(document).ready(function () {
    const validateFirstName = () => {
        const firstName = $('#firstName').val();
        const firstNameInp = $('#firstName');
        const firstNameError = $('#firstNameError');
        let isValid = true;

        if (firstName.length < 3 || !/^[a-zA-Z]+$/.test(firstName)) {
            firstNameError.text('First name must be at least 3 alphabetic characters.');
            firstNameInp.css('border-color', 'red');
            isValid = false;
        } else {
            firstNameError.text('');
            firstNameInp.css('border-color', 'green');
        }
        return isValid;
    };

    const validateLastName = () => {
        const lastName = $('#lastName').val();
        const lastNameInp = $('#lastName');
        const lastNameError = $('#lastNameError');
        let isValid = true;

        if (lastName.length < 3 || !/^[a-zA-Z]+$/.test(lastName)) {
            lastNameError.text('Last name must be at least 3 alphabetic characters.');
            lastNameInp.css('border-color', 'red');
            isValid = false;
        } else {
            lastNameError.text('');
            lastNameInp.css('border-color', 'green');
        }
        return isValid;
    };

    const validateEmail = () => {
        const email = $('#email').val();
        const emailInp = $('#email');
        const emailError = $('#emailError');
        let isValid = true;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.text('Please enter a valid email address.');
            emailInp.css('border-color', 'red');
            isValid = false;
        } else {
            emailError.text('');
            emailInp.css('border-color', 'green');
        }
        return isValid;
    };

    const validatePhone = () => {
        const phone = $('#phone').val();
        const phoneInp = $('#phone');
        const phoneNumberError = $('#phoneNumberError');
        let isValid = true;

        if (!/^[0-9]{10}$/.test(phone)) {
            phoneNumberError.text('Phone number must be exactly 10 digits.');
            phoneInp.css('border-color', 'red');
            isValid = false;
        } else {
            phoneNumberError.text('');
            phoneInp.css('border-color', 'green');
        }
        return isValid;
    };

    const validatePayment = () => {
        const paymentOption = $('input[name="paymentOption"]:checked');
        const paymentError = $('#paymentError');
        let isValid = true;

        if (paymentOption.length === 0) {
            paymentError.text('Please select a payment option.');
            isValid = false;
        } else {
            paymentError.text('');
        }
        return isValid;
    };

    $('#firstName').on('input', function () {
        const isValid = validateFirstName();
        toggleSubmitButton(isValid);


    });

    $('#lastName').on('input', function () {
        const isValid = validateLastName();
        toggleSubmitButton(isValid);
    });

    $('#email').on('input', function () {
        const isValid = validateEmail();
        toggleSubmitButton(isValid);
    });

    $('#phone').on('input', function () {
        const isValid = validatePhone();
        toggleSubmitButton(isValid);
    });

    $('input[name="paymentOption"]').on('change', function () {
        const isValid = validatePayment();
        toggleSubmitButton(isValid);
    });

    const toggleSubmitButton = (isValid) => {
        const submitButton = $('#sub');

        const allValid = validateFirstName() && validateLastName() && validateEmail() && validatePhone() && validatePayment();
        if (allValid) {
            submitButton.css('background-color', 'blue');
        } else {
            submitButton.css('background-color', '');
        }
    };


    $('#registrationForm').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;


        isValid &= validateFirstName();
        isValid &= validateLastName();
        isValid &= validateEmail();
        isValid &= validatePhone();
        isValid &= validatePayment();

        if (isValid) {
            alert('Form submitted successfully!');
            this.reset();
        } else {
            alert('Please fix the errors in the form.');
        }
    });
});
