// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import { categoriesUrl, Product, refreshInCartQuantityLogo } from "../app.js";

// -----------------------------
// FUNCTIONS
// -----------------------------

// Send To Cart in local Storage Function
function sendToCart(idOfProduct, optionOfProduct, quantityOfProduct) {
  let listInCart = JSON.parse(localStorage.getItem("cart"));
  let isProductAlreadyInCart = false;
  if (listInCart != null) {
    for (const product of listInCart) {
      if (
        product.id == idOfProduct &&
        product.optionSelected == optionOfProduct
      ) {
        product.quantitySelected = Number(product.quantitySelected) + Number(quantityOfProduct);
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
    });
  } else {
  }
  localStorage.setItem("cart", JSON.stringify(listInCart));
  refreshInCartQuantityLogo();
}

// -----------------------------
// RUN SCRIPT
// -----------------------------

// -----------
// Refresh numbers of products in cart for the cart logo in header
// -----------
refreshInCartQuantityLogo();

// -----------
//    --Redirect links
// -----------

// -----------
//    --Favorites
// -----------

// -----------
//    --fill it up product informations
// -----------
// Load product id saved in local storage
let productToShow = localStorage.getItem("productToShow");
if (productToShow == null) {
  console.log("no product save in local storage");
  window.location = "../index.html";
} else {
  productToShow = JSON.parse(productToShow);
}
// Loop to search product id and apply informations in page
for (let i in categoriesUrl) {
  let categorieName = categoriesUrl[i].name;
  fetch(categoriesUrl[i].url)
    .then((response) => {
      // If request OK, return file in JSON
      if (response.ok) {
        return response.json();
      }
      // If not, print an error message in console
      else {
        console.log("error with server");
      }
    })
    .then((responseJson) => {
      for (let i in responseJson) {
        // If product id in local storage match with product id in server response
        if (productToShow.id == responseJson[i]._id) {
          // Apply informations from the server response
          document.querySelector("#productPicture").src =
            responseJson[i].imageUrl;
          document.querySelector("#productPicture").alt =
            "Image du produit :" + responseJson[i].name;
          document.querySelector("#productName").textContent =
            responseJson[i].name;
          document.querySelector("#productID").innerHTML = responseJson[i]._id;
          document.querySelector("#productPrice").textContent =
            responseJson[i].price.toLocaleString("fr") + " €";
          document.querySelector("#productDescription").textContent =
            responseJson[i].description;

          // Apply options label, in french
          if (categorieName == categoriesUrl[0].name) {
            document.querySelector("#productOptionsLabel").textContent =
              categoriesUrl[0].optionsLabel;
            let arrayOptions = responseJson[i].lenses;
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
          if (categorieName == categoriesUrl[1].name) {
            document.querySelector("#productOptionsLabel").textContent =
              categoriesUrl[1].optionsLabel;
            let arrayOptions = responseJson[i].colors;
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
          if (categorieName == categoriesUrl[2].name) {
            document.querySelector("#productOptionsLabel").textContent =
              categoriesUrl[2].optionsLabel;
            let arrayOptions = responseJson[i].varnish;
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
        }
      }
    });
}
// Add product to cart button is click, send to local storage
// productDisplayBox
// buttonAddToCart
// productQuantity
// productOptions

// Listening quantity
let quantityListened = 0;
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
document
  .querySelector("#buttonAddToCart")
  .addEventListener("click", (event) => {
    sendToCart(productToShow.id, optionListened, quantityListened);
  });





function test() {
  optionChosen.addEventListener("click", function () {
    let optionChosenSelected = document.querySelector(
      "#productOptions option"
    ).selected;
    console.log(optionChosenSelected);
  });
  ///boucle true false pour trouver quelle option est sélectionné

  document
    .querySelector("#buttonAddToCart")
    .addEventListener("click", function () {
      let valid = true;
      for (let input of document.querySelector(
        "#productDisplayBox input, #productDisplayBox select"
      )) {
        valid &= input.reportValidity();
        if (!valid) {
          console.log("error");
          break;
        }
      }
      if (valid) {
        let quantity = document.querySelector("#productQuantity").value;
        let optionChosen = document.querySelector("#productOptions").value;
        console.log(quantity + " " + optionChosen);
      }
    });
}
