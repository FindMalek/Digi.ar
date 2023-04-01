// Get references to the different sections
const companySection = document.getElementById("company-section");
const applicantSection = document.getElementById("applicant-section");
const partnershipSection = document.getElementById("partnership-section");

// Get a reference to the "I am" dropdown
const categoryDropdown = document.getElementById("category");

// Add an event listener to the dropdown to show/hide the appropriate section
categoryDropdown.addEventListener("change", function() {
    if (categoryDropdown.value === "company") {
        companySection.style.display = "block";
        applicantSection.style.display = "none";
        partnershipSection.style.display = "none";
    } else if (categoryDropdown.value === "applicant") {
        companySection.style.display = "none";
        applicantSection.style.display = "block";
        partnershipSection.style.display = "none";
    } else if (categoryDropdown.value === "partnership") {
        companySection.style.display = "none";
        applicantSection.style.display = "none";
        partnershipSection.style.display = "block";
    } else {
        companySection.style.display = "none";
        applicantSection.style.display = "none";
        partnershipSection.style.display = "none";
    }
});

// Get the input elements
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');

// Add event listeners for input
fullnameInput.addEventListener('input', validateFullname);
emailInput.addEventListener('input', validateEmail);

// Validation functions
function validateFullname() {
    const fullnameRegex = /^[A-Za-z- ]+$/;
    const fullname = this.value.trim();
    if (fullnameRegex.test(fullname)) {
        this.classList.remove('is-invalid');
        document.getElementById('fullname-error').style.display = 'none';
    } else {
        this.classList.add('is-invalid');
        document.getElementById('fullname-error').style.display = 'block';
    }
}

function validateEmail() {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const email = this.value.trim();
    if (emailRegex.test(email)) {
        this.classList.remove('is-invalid');
        document.getElementById('email-error').style.display = 'none';
    } else {
        this.classList.add('is-invalid');
        document.getElementById('email-error').style.display = 'block';
    }
}
form.addEventListener('submit', (event) => {
    // prevent form submission if it's not completely filled out
    if (!isFormFilled) {
        event.preventDefault();
    }
});

function updateSubmitButtonState() {
    // check if all fields are filled out and conditions are met
    isFormFilled = nameInput.value && emailInput.value;
    const isButtonEnabled = isNameValid && isEmailValid && isFormFilled;

    // enable/disable submit button
    submitButton.disabled = !isButtonEnabled;
}