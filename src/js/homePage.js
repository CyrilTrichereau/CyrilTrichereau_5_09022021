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
  productBox: [
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "max-w-xs",
    "rounded-3xl",
    "shadow-lg",
    "bg-white",
    "overflow-hidden",
    "m-2",
    "my-4",
    "cursor-pointer",
    "transform",
    "transition-all",
    "hover:scale-105",
    "hover:shadow-xl",
    "focus:shadow-2xl",
  ],
  pictureBox: ["h-60", "w-full", "object-cover"],
  titleProduct: [
    "my-4",
    "px-6",
    "text-2xl",
    "font-black",
    "text-center",
    "text-indigo-900",
  ],
  priceProduct: [
    "px-6",
    "font-semibold",
    "text-lg",
    "text-center",
    "text-indigo-900",
  ],
  descriptionProduct: [
    "my-4",
    "px-6",
    "pb-4",
    "text-md",
    "font-semibold",
    "italic",
    "text-center",
  ],
};
// ---------------------------------------
// ---------------------------------------
// -------------   FUNCTIONS -------------
// ---------------------------------------
// ---------------------------------------

//
// -----------------------------
// FUNCTION Display objects from category array requested
// -----------------------------
const displayCategory = (arrayOfProducts, categoryName) => {
  let target = document.querySelector("#categoryDisplayed");
  // create products boxes from arrayOfProducts
  for (let productInArray of arrayOfProducts) {
    let product = productInArray;

    // 1 - Create box for product
    let productBox = moduleApp.newHtmlTag("a", classList.productBox);
    moduleApp.setAttributes(
      [
        { name: "href", value: "./pages/productPage.html" },
        { name: "data-id", value: product._id },
      ],
      productBox
    );
    // Listening product boxes when click, save informations on local storage and go to the product page
    listeningClickOnProductBoxes(productBox, product._id, categoryName);

    // 2.1 - Create picture box and add in product box
    let pictureBox = moduleApp.newHtmlTag("img", classList.pictureBox);
    moduleApp.setAttributes(
      [
        { name: "src", value: product.imageUrl },
        { name: "alt", value: "Image du produit: " + product.name },
      ],
      pictureBox
    );
    productBox.appendChild(pictureBox);

    // 2.2 - Create title and add in product box
    let titleProduct = moduleApp.newHtmlText("h4", classList.titleProduct, product.name);
    productBox.appendChild(titleProduct);

    // 2.3 - Create price and add in product box
    let priceProduct = moduleApp.newHtmlText(
      "p",
      classList.priceProduct,
      product.price.toLocaleString("fr") + " €"
    );
    productBox.appendChild(priceProduct);

    // 2.4 - Create picture box and add in product box
    let descriptionProduct = moduleApp.newHtmlText(
      "p",
      classList.descriptionProduct,
      product.description
    );
    productBox.appendChild(descriptionProduct);

    // Add the product box to the target
    target.appendChild(productBox);
  }
};

//
// -----------------------------
// FUNCTION Display all products when loading page
// -----------------------------
const displayAllProducts = async () => {
  for (let category of moduleApp.categoriesUrl) {
    const responseJson = await moduleApp.fetchProducts(category.url);
    displayCategory(responseJson, category.name);
  }
};

//
// -----------------------------
// FUNCTION Hero picture loading and create redirect link to category displayer with a category displayed
// -----------------------------
const heroPictureAndCategoryDisplayed = async (
  urlOfCategory,
  productNumber,
  categoryName
) => {
  const responseJson = await moduleApp.fetchProducts(urlOfCategory);
  // loading hero picture
  let targetPicture = document.querySelector("#heroPicture");
  targetPicture.src = responseJson[productNumber].imageUrl;
  // redirect link to category
  let targetLink = document.querySelector("#goToCategoryCamera");
  targetLink.addEventListener("click", () => {
    moduleApp.eraseChildBoxes("#categoryDisplayed");
    displayCategory(responseJson, categoryName);
  });
};

//
// -----------------------------
// FUNCTION click on filter
// -----------------------------
const clickOnFilter = (filterIdHtml, url, categoryName) => {
  let buttonFilter = document.querySelector(filterIdHtml);
  buttonFilter.addEventListener("click", async () => {
    const responseJson = await moduleApp.fetchProducts(url);
    moduleApp.eraseChildBoxes("#categoryDisplayed");
    displayCategory(responseJson, categoryName);
  });
};

//
// -----------------------------
// FUNCTION Listening product boxes when click, save informations on local storage and go to the product page
// -----------------------------
const listeningClickOnProductBoxes = (
  targetToListen,
  productId,
  categoryName
) => {
  targetToListen.addEventListener("click", (event) => {
    event.preventDefault();
    let productToAdd = { id: productId, category: categoryName };
    localStorage.setItem("productToShow", JSON.stringify(productToAdd));
    window.location = "./pages/productPage.html";
  });
};

// ---------------------------------------
// ---------------------------------------
// ------------- RUN SCRIPT --------------
// ---------------------------------------
// ---------------------------------------

// Refresh numbers of products in cart for the cart logo in header
moduleApp.refreshInCartQuantityLogo();

// Hero picture loading and create redirect link to category displayer with a category displayed
heroPictureAndCategoryDisplayed(moduleApp.categoriesUrl[0].url, 4, moduleApp.categoriesUrl[0].name);

// Display all products when loading page
displayAllProducts();

// Listen click on filter and create products boxes with informations from responseObject
clickOnFilter(
  "#buttonTeddyFilter",
  moduleApp.categoriesUrl[1].url,
  moduleApp.categoriesUrl[1].name
);
clickOnFilter(
  "#buttonCameraFilter",
  moduleApp.categoriesUrl[0].url,
  moduleApp.categoriesUrl[0].name
);
clickOnFilter(
  "#buttonFurnitureFilter",
  moduleApp.categoriesUrl[2].url,
  moduleApp.categoriesUrl[2].name
);
