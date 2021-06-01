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
  },
  {
    name: "teddy",
    url: "http://localhost:3000/api/teddies",
    optionsLabel: "Couleurs",
    optionsCategory: "colors",
  },
  {
    name: "furniture",
    url: "http://localhost:3000/api/furniture",
    optionsLabel: "Vernis",
    optionsCategory: "varnish",
  },
];

// -----------------
// CLASS OBJECT
// -----------------

// CLASS OBJECT Class for
class Product {
  constructor(jsonProduct) {
    jsonProduct && Object.assign(this, jsonProduct);
  }
}

// -----------------
// FUNCTIONS
// -----------------

//
// -----------------------------
// FUNCTION Refresh numbers of products in cart for the cart logo in header
// -----------------------------
const refreshInCartQuantityLogo = () => {
  let listInCart = localStorage.getItem("cart");
  if (!listInCart) {
    document.querySelector("#inCartQuantity").textContent = "";
  } else {
    listInCart = JSON.parse(listInCart);
    let totalInCartQuantity = 0;
    for (const product of listInCart) {
      totalInCartQuantity += Number(product.quantitySelected);
    }
    document.querySelector("#inCartQuantity").textContent = totalInCartQuantity;
  }
};

//
// -----------------------------
// FUNCTION Request Get for products
// -----------------------------
const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

//
// -----------------------------
// FUNCTION Message for empty cart
// -----------------------------
const emptyCartMessage = () => {
  let emptyCartMessage = /* html */ `
    <p 
    class="
    w-5/6 
    mt-8 
    text-3xl 
    font-black 
    text-center">
    Votre panier est vide !...
    </p>
    <i class="
      far 
      fa-sad-tear 
      sadIcon
      text-6xl
      md:text-9xl">
    </i>
    <a
    href="../index.html"
    alt="Redirection vers la page d'accueil"
    class="
      w-auto
      text-sm
      lg:text-base
      xl:text-lg
      text-indigo-900
      italic
      font-semibold
      text-center
      hover:shadow-xl
      hover:underline
      focus:text-white
      focus:shadow-2xl
      hover:bg-white
      focus:bg-indigo-900
      rounded-3xl
      px-4
      mb-8
    "
    >
    Retournez sur la page d'accueil afin de séléctionner des produits !
    </a>
    `;
  document.querySelector("#productInCart").innerHTML += emptyCartMessage;
};

//
// -----------------------------
// FUNCTION Get Cart
// -----------------------------
const getCart = () => {
  let localStorageCart = localStorage.getItem("cart");
  if (localStorageCart == null || JSON.parse(localStorageCart) == 0) {
    emptyCartMessage();
  } else {
    return JSON.parse(localStorageCart);
  }
};

//
// -----------------------------
// FUNCTION Update Cart
// -----------------------------
const updateCart = (newCart) => {
  localStorage.setItem("cart", JSON.stringify(newCart));
};

//
// -----------------------------
// FUNCTION Add Classes
// -----------------------------
const addClasses = (classList, target) => {
  for (let oneClass of classList) {
    target.classList.add(oneClass);
  }
};

//
// -----------------------------
// FUNCTION Set Attributes
// -----------------------------

const setAttributes = (array, target) => {
  for (let attribute of array) {
    target.setAttribute(attribute.name, attribute.value);
  }
};

//
// -----------------------------
// FUNCTION New Div
// -----------------------------
const newDiv = (classListTargeted) => {
  let div = document.createElement("div");
  addClasses(classListTargeted, div);
  return div;
};

//
// -----------------------------
// FUNCTION New Html Tag
// -----------------------------
const newHtmlTag = (tag, classListTargeted) => {
  let htmlTag = document.createElement(tag);
  addClasses(classListTargeted, htmlTag);
  return htmlTag;
};

//
// -----------------------------
// FUNCTION New Html Text
// -----------------------------
const newHtmlText = (tag, classListTargeted, textToAdd) => {
  let htmlText = document.createElement(tag);
  addClasses(classListTargeted, htmlText);
  htmlText.textContent = textToAdd;
  return htmlText;
};

// -------
// EXPORTS
// -------
export {
  categoriesUrl,
  Product,
  refreshInCartQuantityLogo,
  fetchProducts,
  getCart,
  updateCart,
  addClasses,
  setAttributes,
  newDiv,
  newHtmlTag,
  newHtmlText,
};
