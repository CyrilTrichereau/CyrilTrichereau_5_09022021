// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import {
  categoriesUrl,
  Product,
  refreshInCartQuantityLogo,
  fetchProducts,
} from "../app.js";

// -----------------------------
// FUNCTIONS
// -----------------------------

// FUNCTION Display objects from category array requested
const displayCategory = (arrayOfProducts) => {
  let target = document.querySelector("#categoryDisplayed");
  // erase products boxes displayed
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
  // create products boxes from arrayOfProducts
  for (let productInArray of arrayOfProducts) {
    let product = new Product(productInArray);
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
};

// FUNCTION Hero picture loading and create redirect link to category displayer with a category displayed
const heroPictureAndCategoryDisplayed = async (
  urlOfCategory,
  productNumber,
  categoryName
) => {
  const responseJson = await fetchProducts(urlOfCategory);
  // loading hero picture
  let targetPicture = document.querySelector("#heroPicture");
  targetPicture.src = responseJson[productNumber].imageUrl;
  // redirect link to category
  let targetLink = document.querySelector("#goToCategoryCamera");
  targetLink.addEventListener("click", () => {
    displayCategory(responseJson);
    storeProductToShow(categoryName);
  });
};

// FUNCTION click on filter
const clickOnFilter = async (filterIdHtml, url, categoryName) => {
  let buttonFilter = document.querySelector(filterIdHtml);
  buttonFilter.addEventListener("click", async () => {
    const responseJson = await fetchProducts(url);
    displayCategory(responseJson);
    // Store in local storage ID and category of the productToShow
    storeProductToShow(categoryName);
  });
};

// FUNCTION Store product to show : Store in local storage ID and category of the productToShow
const storeProductToShow = (categoryName) => {
  document.querySelectorAll(".productDisplay").forEach((product) => {
    product.addEventListener("click", function () {
      let productToAdd = { id: this.dataset.id, category: categoryName };
      localStorage.setItem("productToShow", JSON.stringify(productToAdd));
    });
  });
};

// -----------------------------
// RUN SCRIPT
// -----------------------------

// Refresh numbers of products in cart for the cart logo in header
refreshInCartQuantityLogo();

// Hero picture loading and create redirect link to category displayer with a category displayed
heroPictureAndCategoryDisplayed(categoriesUrl[0].url, 4, categoriesUrl[0].name);

// Listen click on filter and create products boxes with informations from responseObject
clickOnFilter(
  "#buttonTeddyFilter",
  categoriesUrl[1].url,
  categoriesUrl[1].name
);
clickOnFilter(
  "#buttonCameraFilter",
  categoriesUrl[0].url,
  categoriesUrl[0].name
);
clickOnFilter(
  "#buttonFurnitureFilter",
  categoriesUrl[2].url,
  categoriesUrl[2].name
);
