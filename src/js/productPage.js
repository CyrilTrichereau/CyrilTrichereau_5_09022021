// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import {
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
} from "../app.js";

//
// -----------------------------
// FUNCTIONS
// -----------------------------

//
// -----------------------------
// FUNCTION Load Product To Show from local storage
// -----------------------------
const getProductToShow = () => {
  let product = localStorage.getItem("productToShow");
  if (product == null) {
    console.log("no product save in local storage");
    window.location = "../index.html";
  } else {
    product = JSON.parse(product);
    return product;
  }
};

//
// -----------------------------
// FUNCTION Get product informations with his id store in local storage and apply informations in page
// -----------------------------
const getProductInformationWithIdAndApplyInformations = async (
  productToShow,
  categoriesOfUrl
) => {
  let responseJson;
  // Loop to get the right category with url with category of product to show from local storage
  for (let categoryFromcategoriesUrl of categoriesOfUrl) {
    if (productToShow.category == categoryFromcategoriesUrl.name) {
      responseJson = await fetchProducts(
        categoryFromcategoriesUrl.url + "/" + productToShow.id
      );
      urlOfProduct = categoryFromcategoriesUrl.url + "/" + productToShow.id;
    }
  }
  // Apply informations from the server response
  document.querySelector("#productPicture").src = responseJson.imageUrl;
  document.querySelector("#productPicture").alt =
    "Image du produit :" + responseJson.name;
  document.querySelector("#productName").textContent = responseJson.name;
  document.querySelector("#productID").innerHTML = responseJson._id;
  document.querySelector("#productPrice").textContent =
    responseJson.price.toLocaleString("fr") + " €";
  document.querySelector("#productDescription").textContent =
    responseJson.description;

  // Apply options label, in french
  if (productToShow.category == categoriesUrl[0].name) {
    document.querySelector("#productOptionsLabel").textContent =
      categoriesUrl[0].optionsLabel;
    let arrayOptions = responseJson.lenses;
    for (let i in arrayOptions) {
      //Create new html tag
      let productOtherOptions = document.createElement("option");
      // add text
      productOtherOptions.textContent = arrayOptions[i];
      // add as a child of target
      document
        .querySelector("#productOptions")
        .appendChild(productOtherOptions);
    }
  }
  if (productToShow.category == categoriesUrl[1].name) {
    document.querySelector("#productOptionsLabel").textContent =
      categoriesUrl[1].optionsLabel;
    let arrayOptions = responseJson.colors;
    for (let i in arrayOptions) {
      //Create new html tag
      let productOtherOptions = document.createElement("option");
      // add text
      productOtherOptions.textContent = arrayOptions[i];
      // add as a child of target
      document
        .querySelector("#productOptions")
        .appendChild(productOtherOptions);
    }
  }
  if (productToShow.category == categoriesUrl[2].name) {
    document.querySelector("#productOptionsLabel").textContent =
      categoriesUrl[2].optionsLabel;
    let arrayOptions = responseJson.varnish;
    for (let i in arrayOptions) {
      //Create new html tag
      let productOtherOptions = document.createElement("option");
      // add text
      productOtherOptions.textContent = arrayOptions[i];
      // add as a child of target
      document
        .querySelector("#productOptions")
        .appendChild(productOtherOptions);
    }
  } else {
  }
};

//
// -----------------------------
// FUNCTION Send product to cart in local storage
// -----------------------------
const sendToCart = (
  idOfProduct,
  optionOfProduct,
  quantityOfProduct,
  category
) => {
  let listInCart = JSON.parse(localStorage.getItem("cart"));
  let isProductAlreadyInCart = false;
  if (listInCart != null) {
    for (const product of listInCart) {
      if (
        product.id == idOfProduct &&
        product.optionSelected == optionOfProduct
      ) {
        product.quantitySelected =
          Number(product.quantitySelected) + Number(quantityOfProduct);
        isProductAlreadyInCart = true;
        break;
      } else {
      }
    }
  } else {
    listInCart = [];
  }
  if (isProductAlreadyInCart == false) {
    listInCart.push({
      id: idOfProduct,
      optionSelected: optionOfProduct,
      quantitySelected: quantityOfProduct,
      url: urlOfProduct,
      category: category,
    });
  } else {
  }
  localStorage.setItem("cart", JSON.stringify(listInCart));
  refreshInCartQuantityLogo();
};

// -----------------------------
// RUN SCRIPT
// -----------------------------

// Refresh numbers of products in cart for the cart logo, in header
refreshInCartQuantityLogo();

// Load product id and category saved in local storage
let productToShowInformations = getProductToShow();

// Get product informations with his id store in local storage and apply informations in page
let urlOfProduct;
getProductInformationWithIdAndApplyInformations(
  productToShowInformations,
  categoriesUrl
);

// Listening quantity
let quantityListened = 1;
document
  .querySelector("#productQuantity")
  .addEventListener("change", (event) => {
    quantityListened = event.target.value;
  });
// Listening options
let optionListened = "";
document
  .querySelector("#productOptions")
  .addEventListener("change", (event) => {
    optionListened = event.target.value;
  });

// Send product to cart
document.querySelector("#buttonAddToCart").addEventListener("click", () => {
  sendToCart(
    productToShowInformations.id,
    optionListened,
    quantityListened,
    productToShowInformations.category
  );
});
