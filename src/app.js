// ----------------- app.js
// -----------------


// ARRAY
// -----------------

const categoriesUrl = [
  {
    name: "camera",
    url: "http://localhost:3000/api/cameras",
    optionsLabel: "Lentilles",
    optionsCategory: "lenses"
  },
  {
    name: "teddy",
    url: "http://localhost:3000/api/teddies",
    optionsLabel: "Couleurs",
    optionsCategory: "colors"
  },
  {
    name: "furniture",
    url: "http://localhost:3000/api/furniture",
    optionsLabel: "Vernis",
    optionsCategory: "varnish"
  }
];


// FUNCTIONS
// -----------------

class Product {
  constructor(jsonProduct) {
    jsonProduct && Object.assign(this, jsonProduct);
  }
};


// Refresh numbers of products in cart for the cart logo in header
function refreshInCartQuantityLogo () {
  let listInCart = localStorage.getItem("cart");
  if (listInCart == null || listInCart == 0) {
    document.querySelector("#inCartQuantity").textContent = "";
  } else {
    listInCart = JSON.parse(listInCart);
    let totalInCartQuantity = 0;
    for (const product of listInCart) {
      totalInCartQuantity += Number (product.quantitySelected);
    }
    document.querySelector("#inCartQuantity").textContent = totalInCartQuantity;
  }
  }


// -------
// EXPORTS
// -------
export {categoriesUrl, Product, refreshInCartQuantityLogo };
