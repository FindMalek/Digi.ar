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
  }
  else if (categoryDropdown.value === "applicant") {
    companySection.style.display = "none";
    applicantSection.style.display = "block";
    partnershipSection.style.display = "none";
  }
  else if (categoryDropdown.value === "partnership") {
    companySection.style.display = "none";
    applicantSection.style.display = "none";
    partnershipSection.style.display = "block";
  }
  else {
    companySection.style.display = "none";
    applicantSection.style.display = "none";
    partnershipSection.style.display = "none";
  }
});
