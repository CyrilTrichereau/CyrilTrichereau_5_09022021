// ----------------- app.js
// -----------------


// -----------------
// ARRAY
// -----------------

// ARRAY Categories with URL, name and options
const categoriesUrl = [
  {
    name: "camera",
    url: "http://localhost:3000/api/cameras",
    optionsLabel: "Lentilles",
    optionsCategory: "lenses",
    number: 0
  },
  {
    name: "teddy",
    url: "http://localhost:3000/api/teddies",
    optionsLabel: "Couleurs",
    optionsCategory: "colors",
    number: 1
  },
  {
    name: "furniture",
    url: "http://localhost:3000/api/furniture",
    optionsLabel: "Vernis",
    optionsCategory: "varnish",
    number: 2
  }
];


// -----------------
// CLASS OBJECT
// -----------------

// CLASS OBJECT Class for
class Product {
  constructor(jsonProduct) {
    jsonProduct && Object.assign(this, jsonProduct);
  }
};

// -----------------
// FUNCTIONS
// -----------------



// FUNCTION Refresh numbers of products in cart for the cart logo in header
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

// FUNCTION Request Get for products
  const fetchProducts = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  };
  


// -------
// EXPORTS
// -------
export {categoriesUrl, Product, refreshInCartQuantityLogo, fetchProducts };
