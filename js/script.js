console.log('Connected!');

// Mobile nav bar 
const mobileMenu = () => {
    const menu = document.querySelector("ul");
    menu.classList.toggle("mobilemenu");
};
// Scroll to top function 
const scrollToTop = () => { 
    window.scrollTo(0, 0); 
};

// EDIT CODE BELOW TO MATCH OWN CONTACT FORM

const constraints = {
    firstName: {
        presence: { allowEmpty: false }
    },
    lastName: {
        presence: { allowEmpty: false }
    },
    email: {
        presence: { allowEmpty: false },
        email: true
    },
    message: {
        presence: { allowEmpty: false }
    }
};

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
  const formValues = {
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      email: form.elements.email.value,
      message: form.elements.message.value
  };

  const errors = validate(formValues, constraints);

  if (errors) {
    event.preventDefault();
    const errorMessage = Object
        .values(errors)
        .map(function (fieldValues) { return fieldValues.join(', ')})
        .join("\n");

    alert(errorMessage);
  }
}, false);




// Add php to test contact form using the following tutorial https://blog.mailtrap.io/php-email-contact-form/
