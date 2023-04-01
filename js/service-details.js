// Get all the Learn More anchor tags
const learnMoreLinks = document.querySelectorAll('.learn-more');

// Add a click event listener to each link
learnMoreLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    
    // Extract the name of the service from the link ID
    const serviceName = link.id.split('-')[0] + '-' + link.id.split('-')[1];
    
    // Construct the URL of the service details page
    const url = `src/services-details/${serviceName}-section.html`;

    // Call the loadServiceDetails() function with the URL
    loadServiceDetails(url);
  });
});

function loadServiceDetails(url) {
  // Use fetch API to get the service details HTML
  fetch(`./${url}`)
    .then(response => response.text())
    .then(html => {
      // Insert the service details HTML into the #service-details element
      const serviceDetails = document.getElementById('service-details');
      serviceDetails.innerHTML = html;
      
      // Use the scrollTo() method to smoothly scroll down to the service details section
      const offsetTop = serviceDetails.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
}

