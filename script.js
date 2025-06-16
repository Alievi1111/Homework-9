const products1 = [
  { title: "Gray T-Shirt", price: "$14.99", img: "../assets/png/first.png" },
  { title: "Black Jeans", price: "$34.99", img: "../assets/png/second.png" },
  { title: "Green Jacket", price: "$59.95", img: "../assets/png/third.png" },
  {
    title: "White Sneakers",
    price: "$49.95",
    img: "../assets/png/fourth..png",
  },
];

const products2 = [
  {
    title: "Blue Sweatshirt",
    price: "$29.95 - $179.95",
    img: "../assets/png/2first.png",
  },
  {
    title: "Red Hoodie",
    price: "$24.95 - $149.95",
    img: "../assets/png/2second.png",
  },
  {
    title: "Yellow Pullover",
    price: "$19.95 - $129.95",
    img: "../assets/png/2third.png",
  },
  {
    title: "Purple Jacket",
    price: "$39.95 - $199.95",
    img: "../assets/png/2fourth.png",
  },
];

function createCard(product) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.img}" alt="${product.title}">
    <div class="title">${product.title}</div>
    <div class="price">${product.price}</div>
  `;
  return card;
}

const cardOne = document.querySelector("#cardOne");
products1.forEach(function (product) {
  cardOne.appendChild(createCard(product));
});

const cardTwo = document.querySelector("#cardTwo");
products2.forEach(function (product) {
  cardTwo.appendChild(createCard(product));
});
