const folderPath = "https://findmalek.github.io/Digi.ar/images/clients/";
const logoLinks = [];

fetch(folderPath)
  .then((response) => response.text())
  .then((html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const fileLinks = tempDiv.querySelectorAll("a");
    fileLinks.forEach((link) => {
      const fileName = decodeURIComponent(link.getAttribute("href").substring(1));
      if (fileName.endsWith(".png")) {
        logoLinks.push(fileName);
      }
    });

    const clientsSlides = document.querySelector(".clients__slides");

    logoLinks.forEach((fileName) => {
      const imageUrl = `${folderPath}${fileName}`;
      const logoImg = document.createElement("img");
      logoImg.src = imageUrl;
      logoImg.style.filter = "grayscale(100%)";
      logoImg.style.padding = "20px";
      logoImg.style.maxHeight = "150px";
      logoImg.style.width = "auto";
      clientsSlides.appendChild(logoImg);
    });
  })
  .catch((error) => console.error(error));
