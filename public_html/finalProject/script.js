// Katie Nordberg 10/16/2021

// Create an array of product objects
const products = [
  {
    id: 1,
    pictureSrc: "./assets/glassPlanter.jpg",
    pictureAlt: "Glass propogation jar",
    name: "Glass Planter",
    description: "6\" glass propogation jar for growing plants from cuttings",
    price: 4.5,
    categories: ["pots"],
  },
  {
    id: 2,
    pictureSrc: "./assets/concretePots.jpg",
    pictureAlt: "2 white concrete pots",
    name: "Concrete Pots",
    description: "Set of TWO elegant concrete pots",
    price: 15,
    categories: ["pots"],
  },
  {
    id: 3,
    pictureSrc: "./assets/cactus.jpg",
    pictureAlt: "Just a plain little cactus",
    name: "Cactus",
    description: "Small cactus",
    price: 5,
    categories: ["plants"],
  },
  {
    id: 4,
    pictureSrc: "./assets/fancyCactus.jpg",
    pictureAlt: "A blooming cactus with multiple branches",
    name: "Fancy Cactus",
    description: "A cactus but make it fancy",
    price: 10,
    categories: ["plants"],
  },
  {
    id: 5,
    pictureSrc: "./assets/goldPot.jpg",
    pictureAlt: "A fancy gold pot",
    name: "Gold Pot",
    description: "An authentic 7 karat gold pot for your most prized plant baby",
    price: 50,
    categories: ["pots"],
  },
  {
    id: 6,
    pictureSrc: "./assets/largeHousePlant.jpg",
    pictureAlt: "A large house plant",
    name: "Large House Plant",
    description: "A large house plant that would work great in any room of the home",
    price: 75,
    categories: ["plants"],
  },
  {
    id: 7,
    pictureSrc: "./assets/twoPlantsAndCandleGiftSet.jpg",
    pictureAlt: "Large house plant and medium house plant in white ceramic pots next to a candle",
    name: "Large Gift Set - 2 Plants and a Candle",
    description: "Two house plants, one large and one medium. White ceramic pots included. As well as a full size white candle. Perfect gift for Mother's day or even Valentine's day!",
    price: 135,
    categories: ["plants", "pots"],
  },
  {
    id: 8,
    pictureSrc: "./assets/roseGoldStandAndMarblePlanter.jpg",
    pictureAlt: "White marble pot holding a cactus and being elevated by a pink stand",
    name: "Marble Pot with Metal Rose Gold Stand",
    description: "Sturdy marble pot and a stylish rose gold stand",
    price: 15,
    categories: ["pots"],
  },
  // {
  //   id: 9,
  //   pictureSrc: "./assets/snakePlant.jpg",
  //   pictureAlt: "",
  //   name: "Snake Plant",
  //   description: "",
  //   price: ,
  //   categories: ["plants"],
  // },
]

let plants = [];
let pots = [];

let itemsInCart = [];

products.forEach((product) => {
  if (product.categories.includes("plants")) {
    plants.push(product);
  }
});

products.forEach((product) => {
  if (product.categories.includes("pots")) {
    pots.push(product);
  }
});

// Add products to page
function createProduct(product) {
  const container = document.createElement("div");
  container.classList.add("product");
  container.setAttribute("data-id", product.id);

  const productImage = document.createElement("img");
  productImage.setAttribute("src", product.pictureSrc);
  productImage.setAttribute("alt", product.pictureAlt);
  productImage.classList.add("productImages");

  const productName = document.createElement("h3");
  productName.textContent = `${product.name} - $${product.price.toFixed(2)}`;
  productName.classList.add("productNames");

  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productDescription.classList.add("productDescriptions");

  container.appendChild(productImage);
  container.appendChild(productName);
  container.appendChild(productDescription);

  container.addEventListener("click", selectItem);

  document.getElementById("displayedProducts").appendChild(container);
}

function viewProductsInCategory (category) {
  removeChildren(document.getElementById("displayedProducts"));

  category.forEach((product) => {
    createProduct(product);
  });
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// Add product to cart when clicked
function selectItem(e) {
let selection = products[e.currentTarget.dataset.id - 1];
  // If the item is already in the cart then increment the quantity
  if (countQuantity(selection, itemsInCart) >= 1) {
    itemsInCart[itemsInCart.indexOf(selection)].quantity += 1;
  } else { // Otherwise add it to the cart
    selection.quantity = 1;
    itemsInCart.push(selection);
  }
  // Refresh cart
  displayItemsInCart();
}

// Remove product from shopping cart
function removeItemFromCart(e) {
  itemsInCart[itemsInCart.indexOf(products[e.target.dataset.id - 1])].quantity--;
  if (itemsInCart[itemsInCart.indexOf(products[e.target.dataset.id - 1])].quantity === 0) {
    itemsInCart.splice(itemsInCart.indexOf(products[e.target.dataset.id - 1]), 1);
  }
  displayItemsInCart();
}

function displayItemsInCart() {
  removeChildren(document.getElementById("cartItems"));
  itemsInCart.forEach((product) => {
    cartItem = document.createElement("li");
    cartItem.setAttribute("data-id", product.id)

    cartItemQuantity = document.createElement("p");
    cartItemQuantity.textContent = `Quantity: ${product.quantity}`;

    cartItemDeleteButton = document.createElement("button");
    cartItemDeleteButton.textContent = "🗑️";
    cartItemDeleteButton.setAttribute("data-id", product.id)
    cartItemDeleteButton.addEventListener("click", removeItemFromCart);

    cartItemText = document.createElement("h2");
    cartItemText.textContent = product.name;

    cartItemPrice = document.createElement("p");
    cartItemPrice.textContent = `$${product.price.toFixed(2)}`;

    cartItem.setAttribute("data-quantity", countQuantity(product, itemsInCart));

    cartItem.appendChild(cartItemDeleteButton);
    cartItem.appendChild(cartItemText);
    cartItem.appendChild(cartItemPrice);
    cartItem.appendChild(cartItemQuantity);
    document.getElementById("cartItems").appendChild(cartItem);
  });
}

function countQuantity(itemToCount, arrayToLookIn) {
  var count = 0;
  arrayToLookIn.forEach((currentItem) => (currentItem === itemToCount && count++));
  return count;
}

function openCart() {
  document.getElementById("shoppingCart").classList.remove("shoppingAreaInactive");
  document.getElementById("shoppingCart").classList.add("shoppingAreaActive");
}

function closeCart() {
  document.getElementById("shoppingCart").classList.add("shoppingAreaInactive");
  document.getElementById("shoppingCart").classList.remove("shoppingAreaActive");
}

document.getElementById("shoppingCartIcon").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);

viewProductsInCategory(products);

document.getElementById("allProducts").addEventListener("click", () => {viewProductsInCategory(products)});
document.getElementById("plants").addEventListener("click", () => {viewProductsInCategory(plants)});
document.getElementById("pots").addEventListener("click", () => {viewProductsInCategory(pots)});

// Create shopping cart area
// total - loop through itemsInCart and add up prices
// Put the number of items in the cart on top of the cart. Just itemsInCart.length and update it when things are added/removed
