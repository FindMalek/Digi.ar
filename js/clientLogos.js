const folderPath = "images/clients/";
const logoLinks = [];

for (let i = 1; i <= 27; i++) {
  const fileName = `${i}.png`;
  logoLinks.push(fileName);
}

const clientsSlides = document.querySelector(".clients__slides");

logoLinks.forEach((fileName) => {
  fetch(`./${folderPath}${fileName}`)
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
