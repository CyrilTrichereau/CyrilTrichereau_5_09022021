// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import { categoriesUrl, Product } from "../app.js";

// -----------------------------
// FUNCTIONS
// -----------------------------

// Display objects from category array requested
function displayCategory(arrayOfProducts) {
  let target = document.querySelector("#categoryDisplayed");
  // erase products boxes displayed
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
  // create products boxes from arrayOfProducts
  for (let i in arrayOfProducts) {
    let product = new Product(arrayOfProducts[i]);
    target.innerHTML += `<a
        href="./pages/productPage.html"
        class="productDisplay flex flex-col justify-center items-center max-w-xs rounded-3xl shadow-lg bg-white overflow-hidden m-2 my-4  cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl focus:shadow-2xl productBoxHomePage" data-id=${
          product._id
        }>
            <img src = "${product.imageUrl}" alt="Image du produit: ${
      product.name
    }" />
            <h4
              class = "my-4 px-6 text-2xl font-black text-center text-indigo-900">
            ${product.name}
            </h4>
            <p
              class = "px-6 font-semibold text-lg text-center text-indigo-900">
              </p>
              ${product.price.toLocaleString("fr") + " €"}
                <p 
                class="my-4 px-6 pb-4 text-md font-semibold italic text-center">
              ${product.description}
            </p>
      </a>`;
  }
}

// Function click on filter
function clickOnFilter(filterIdHtml, url) {
  let buttonFilter = document.querySelector(filterIdHtml);
  buttonFilter.addEventListener("click", () => {
    fetch(url)
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
        displayCategory(responseJson);

        // Temporary product to show : add the product name to local storage in productToShow
        document.querySelectorAll(".productDisplay").forEach((product) => {
          product.addEventListener("click", function () {
            let productToAdd = {id: this.dataset.id};
            localStorage.setItem("productToShow", JSON.stringify(productToAdd));
          });
        });
      });
  });
}

// -----------------------------
// RUN SCRIPT
// -----------------------------

//    --hero picture loading and create redirect link to category displayer with a category displayed
fetch(categoriesUrl[0].url)
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
    // loading hero picture
    let targetPicture = document.querySelector("#heroPicture");
    targetPicture.src = responseJson[4].imageUrl;
    // redirect link to category
    let targetLink = document.querySelector("#goToCategoryCamera");
    targetLink.addEventListener("click", () => {
      displayCategory(responseJson);
    });
  });

//    --listen click on filter and create products boxes with informations from responseObject
clickOnFilter("#buttonTeddyFilter", categoriesUrl[1].url);
clickOnFilter("#buttonCameraFilter", categoriesUrl[0].url);
clickOnFilter("#buttonFurnitureFilter", categoriesUrl[2].url);

//    --listen the cart local storage to update the numbers of products

//    --save product id to local storage for product page
