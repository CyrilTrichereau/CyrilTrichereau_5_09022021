// ----------------------------------------------
// ----------------------------------------------
// -------------   ARRAY AND OBJECT -------------
// ----------------------------------------------
// ----------------------------------------------
// ARRAY Categories with URL, name and options
export const categoriesUrl = [
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

// ----------------------------------------------
// ----------------------------------------------
// -------------   FUNCTIONS -------------
// ----------------------------------------------
// ----------------------------------------------
//
// -----------------------------
// FUNCTION Refresh numbers of products in cart for the cart logo in header
// -----------------------------
export const refreshInCartQuantityLogo = () => {
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
export const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

//
// -----------------------------
// FUNCTION Get Cart
// -----------------------------
export const getCart = () => {
  let localStorageCart = localStorage.getItem("cart");
  if (localStorageCart != null && JSON.parse(localStorageCart) != 0) {
    eraseChildBoxes ("#productInCart")
    return JSON.parse(localStorageCart);
  } 
};

//
// -----------------------------
// FUNCTION Update Cart
// -----------------------------
export const updateCart = (newCart) => {
  localStorage.setItem("cart", JSON.stringify(newCart));
};

//
// -----------------------------
// FUNCTION Add Classes
// -----------------------------
export const addClasses = (classList, target) => {
  for (let oneClass of classList) {
    target.classList.add(oneClass);
  }
};

//
// -----------------------------
// FUNCTION Set Attributes
// -----------------------------

export const setAttributes = (array, target) => {
  for (let attribute of array) {
    target.setAttribute(attribute.name, attribute.value);
  }
};

//
// -----------------------------
// FUNCTION New Div
// -----------------------------
export const newDiv = (classListTargeted) => {
  let div = document.createElement("div");
  addClasses(classListTargeted, div);
  return div;
};

//
// -----------------------------
// FUNCTION New Html Tag
// -----------------------------
export const newHtmlTag = (tag, classListTargeted) => {
  let htmlTag = document.createElement(tag);
  addClasses(classListTargeted, htmlTag);
  return htmlTag;
};

//
// -----------------------------
// FUNCTION New Html Text
// -----------------------------
export const newHtmlText = (tag, classListTargeted, textToAdd) => {
  let htmlText = document.createElement(tag);
  addClasses(classListTargeted, htmlText);
  htmlText.textContent = textToAdd;
  return htmlText;
};

//
// -----------------------------
// FUNCTION Erase child boxes from query selector target
// -----------------------------
export const eraseChildBoxes = (querySelectorTargeted) => {
  let target = document.querySelector(querySelectorTargeted);
  // erase products boxes displayed
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
};
