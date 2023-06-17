const clientsSlides = document.querySelector(".clients__slides");

// Fetch the logo images from the directory
fetch("images/clients/")
  .then((response) => response.text())
  .then((html) => {
    // Create a temporary div element to parse the fetched HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // Select all the <a> elements (logo images) within the fetched HTML
    const logoLinks = tempDiv.querySelectorAll("a");

    // Loop through each logo link and create <img> elements
    logoLinks.forEach((link) => {
        const logoImg = document.createElement("img");
        logoImg.src = link.href;
        logoImg.style.filter = "grayscale(100%)";
        logoImg.style.padding = "20px"; // Adjust the padding value as desired
        logoImg.style.maxHeight = "150px"; // Set the maximum height to 200px
        logoImg.style.width = "auto"; // Let the width adjust automatically based on the aspect ratio
        clientsSlides.appendChild(logoImg);
      });
  })
  .catch((error) => console.error(error));
