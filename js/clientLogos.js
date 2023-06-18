const clientsSlides = document.querySelector(".clients__slides");

fetch("images/clients/")
  .then((response) => response.text())
  .then((html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const logoLinks = tempDiv.querySelectorAll("a");

    logoLinks.forEach((link) => {
      fetch(link.href)
        .then((response) => response.blob())
        .then((blob) => {
          const objectURL = URL.createObjectURL(blob);
          const logoImg = document.createElement("img");
          logoImg.src = objectURL;
          logoImg.style.filter = "grayscale(100%)";
          logoImg.style.padding = "20px";
          logoImg.style.maxHeight = "150px";
          logoImg.style.width = "auto";
          clientsSlides.appendChild(logoImg);
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));
