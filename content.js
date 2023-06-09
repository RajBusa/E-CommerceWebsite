let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

const jsonData = [
  {
    name: "Red Tape Sneaker Casual Shoes",
    photo: "https://m.media-amazon.com/images/I/613QVGgweAL._UL1440_.jpg",
    description:
      "Red Tape Sneaker Casual Shoes for Men provide exceptional comfort with a soft cushioned insole, slip-resistance, dynamic feet support, arch support, and shock absorption.",
    brand: "Red Tape",
    affiliatelink: "https://amzn.to/3P3yJNq",
  },
  {
    name: "Sharpex 12 Inch Electric Lawn Mower with 30 LTR Grass Catcher Box",
    photo: "https://m.media-amazon.com/images/I/71hKhi5DV4L._SY355_.jpg",
    description:
      "The Sharpex 12 Inch Electric Lawn Mower with 30 LTR Grass Catcher Box is a compact and efficient tool designed for small to medium-sized lawns, providing a convenient and effective solution for grass cutting and collection.",
    brand: "Sharpex",
    affiliatelink: "https://amzn.to/43d4989",
  },
  {
    name: "Realme narzo N55 (Prime Black, 4GB+64GB)",
    photo: "https://m.media-amazon.com/images/I/81ogvU1j6qL._SX679_.jpg",
    description:
      "With fast 33W SUPERVOOC charging, the realme narzo N55 charges up the massive 5000mAh battery from 0-50% in just 29 minutes, making your life super convenient and stress free",
    affiliatelink: "https://amzn.to/3C3SFYN",
  },
  {
    name: "Redmi Pad | MediaTek Helio G99 | 26.95cm (10.61 inch) 2K Resolution & 90Hz Refresh Rate Display | 4GB RAM & 128GB Storage, Expandable up to 1TB | Quad Speaker - Dolby Atmos | Wi-Fi | Graphite Gray",
    photo: "https://m.media-amazon.com/images/I/51DgLLc+LFL._SX679_.jpg",
    description:
      "MediaTek Helio G99 Octa-Core processor | ARM Mali-G57 MC2 GPU | 4GB RAM | 128GB Internal Storage | Expandable upto 1TB with SD Card",
    affiliatelink: "https://amzn.to/3C2JEiu",
  },
  {
    name: "ASUS TUF Gaming A15 (2022), 15.6 (39.62 cm) FHD 144Hz, AMD Ryzen 7 6800H, 4GB RTX 3050Ti Graphics, Gaming Laptop (16GB/512GB SSD/90WHrs Battery/Win 11/with Office/Jaeger Gray/2.2 kg), FA577RE-HN055WS",
    photo: "https://m.media-amazon.com/images/I/71NxKpg1NIL._SX679_.jpg",
    description:
      "Processor: AMD Ryzen 7 6800HS Mobile Processor (8-core/16-thread, 20MB cache, up to 4.7 GHz max boost)",
    affiliatelink: "https://amzn.to/3MGvo3N",
  },
  {
    name: "Nothing Ear (stick) - wireless In Ear earbuds, comfortable ergonomic design, 4.4g ultra lightweight, custom dynamic driver, Clear Voice Technology, press controls, up to 29 hrs of listening time",
    photo: "https://m.media-amazon.com/images/I/61pWIvIfpfL._SL1500_.jpg",
    description:
      "Designed for comfort. Feather-light at just 4.4 g. Ergonomically shaped not to be noticed by over 100 pairs of ears Vivid sound.",
    affiliatelink: "https://amzn.to/43eIgFy",
  },

  {
    name: "OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)",
    photo: "https://m.media-amazon.com/images/I/61LB+d0vheL._SX679_.jpg",
    description:
      "Camera: 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP",
    affiliatelink: "https://amzn.to/3WFuGbM",
  },
];

function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");

  let imgTag = document.createElement("img");
  imgTag.src = ob.photo;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.description);
  h4.appendChild(h4Text);

  let buttonDiv = document.createElement("div");
  buttonDiv.id = "button";

  let buttonTag = document.createElement("button");
  buttonTag.addEventListener("click", function () {
    window.location.href = ob.affiliatelink;
  });
  buttonDiv.appendChild(buttonTag);
  buttonText = document.createTextNode("Purchase");

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(buttonTag);
  buttonTag.appendChild(buttonText);

  return boxDiv;
}

for (let i = 0; i < jsonData.length; i++) {
  containerAccessories.appendChild(dynamicClothingSection(jsonData[i]));
}
