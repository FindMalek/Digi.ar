const folderPath = "images/brands-black-white/";
const logoLinks = [];

for (let i = 1; i <= 26; i++) {
  const fileName = `${i}.png`;
  logoLinks.push(fileName);
}

const logoLinksTwice = [...logoLinks, ...logoLinks];

console.log(logoLinksTwice);

const clientsSlides = document.querySelector(".clients__slides");

// Fetch and append images in order
for (let i = 0; i < logoLinksTwice.length; i++) {
  const fileName = logoLinksTwice[i];
  fetch(`./${folderPath}${fileName}`)
    .then((response) => response.blob())
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      const logoImg = document.createElement("img");
      logoImg.src = objectURL;
      logoImg.style.filter = "grayscale(100%)";
      logoImg.style.padding = "30px";
      logoImg.style.maxHeight = "200px";
      logoImg.style.width = "auto";
      clientsSlides.appendChild(logoImg);
    })
    .catch((error) => console.error(error));
}
