// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import * as moduleApp from "../app.js";

// ----------------------------------------------
// ----------------------------------------------
// -------------   ARRAY AND OBJECT -------------
// ----------------------------------------------
// ----------------------------------------------

// List of classes from Tailwind
const classList = {
  addedToCartBox: [
    "addedToCart",
    "addedToCartMove",
    "font-bold",
    "text-2xl",
    "text-center",
    "mb-4",
  ],
};

// ---------------------------------------
// ---------------------------------------
// -------------   FUNCTIONS -------------
// ---------------------------------------
// ---------------------------------------
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
      responseJson = await moduleApp.fetchProducts(
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

  // Apply options label, in french and loop to add options
  for (let category of moduleApp.categoriesUrl) {
    if (productToShow.category == category.name) {
      document.querySelector("#productOptionsLabel").textContent =
      category.optionsLabel;
      for (let options of responseJson[category.optionsCategory]) {
          let addOption = document.createElement("option");
          addOption.value = options;
          addOption.textContent = options;
          document.querySelector("#productOptions").appendChild(addOption);
      }
    } else {
    }
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
  moduleApp.refreshInCartQuantityLogo();
  showAddedToCart();
};
//
// -----------------------------
// FUNCTION Show "added to cart"
// -----------------------------
const showAddedToCart = () => {
  let addedToCart = document.querySelector("#productAddedToCart");
  moduleApp.eraseChildBoxes("#productAddedToCart");
  let addedToCartBox = moduleApp.newHtmlText(
    "p",
    classList.addedToCartBox,
    "Produit ajouté !"
  );
  addedToCart.appendChild(addedToCartBox);
};

// ---------------------------------------
// ---------------------------------------
// ------------- RUN SCRIPT --------------
// ---------------------------------------
// ---------------------------------------

// Refresh numbers of products in cart for the cart logo, in header
moduleApp.refreshInCartQuantityLogo();

// Load product id and category saved in local storage
let productToShowInformations = getProductToShow();

// Get product informations with his id store in local storage and apply informations in page
let urlOfProduct;
getProductInformationWithIdAndApplyInformations(
  productToShowInformations,
  moduleApp.categoriesUrl
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
