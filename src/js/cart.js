// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import { categoriesUrl, Product, refreshInCartQuantityLogo } from "../app.js";

// -----------------------------
// FUNCTIONS
// -----------------------------

function eraseProductListener() {
  const eraserButton = document.querySelector(".productEraser");
  console.log(eraserButton);
}

// -----------------------------
// RUN SCRIPT
// -----------------------------

// Refresh numbers of products in cart for the cart logo in header
refreshInCartQuantityLogo();

//continuer ici à mettre à jour le code en intégrant ensuite une création html en prenant homepage en exemple
//ensuite faire des validations de formulaire sur product page et cart

//    --fill it up product informations

//
//
//   ROR TEST ADD ARRAY
let listCart = localStorage.getItem("cart");
if (listCart != null) {
  listCart = JSON.parse(listCart);
} else {
  console.log("Cart empty");
}
listCart = [];
listCart.push({
  id: "5beaaf2e1c9d440000a57d9a",
  optionSelected: "Light Oak",
  quantitySelected: 3,
});
listCart.push({
  id: "5be9bc241c9d440000a730e7",
  optionSelected: "25mm 4.5",
  quantitySelected: 5,
});
listCart.push({
  id: "5beaabe91c9d440000a57d96",
  optionSelected: "Blue",
  quantitySelected: 4,
});
listCart.push({
  id: "5be9c4c71c9d440000a730e9",
  optionSelected: "35mm 1.8",
  quantitySelected: 7,
});
listCart.push({
  id: "5beaadda1c9d440000a57d98",
  optionSelected: "Dark Oak",
  quantitySelected: 8,
});
listCart.push({
  id: "5beaa8bf1c9d440000a57d94",
  optionSelected: "Pale brown",
  quantitySelected: 9,
});

localStorage.setItem("cart", JSON.stringify(listCart));

//
// Load product id saved in local storage
let productsInCart = localStorage.getItem("cart");
if (productsInCart == null) {
  // -------
  // -------------------INSCRIRE UN MESSAGE DE PANIER VIDE
  // -------
} else {
  productsInCart = JSON.parse(productsInCart);

  // Loop : for every product in cart, match the id, create a product box and fill with informations
  for (let i in productsInCart) {
    let productTargeted = productsInCart[i];

    //Loop request to server an array of objetcs
    for (let i in categoriesUrl) {
      let categoryName = categoriesUrl[i].name;
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
            const indexArray = i;
            if (productTargeted.id == responseJson[i]._id) {
              let target = document.querySelector("#productInCart");
              let product = new Product(responseJson[i]);
              let addOptionsToHtml = [];

              if (categoryName == categoriesUrl[0].name) {
                product.optionsLabel = categoriesUrl[0].optionsLabel;
                for (let i in product.lenses) {
                  if (productTargeted.optionSelected == product.lenses[i]) {
                    let option = `<option selected="selected" value="${product.lenses[i]}">${product.lenses[i]}</option>;`;
                    addOptionsToHtml += option;
                  } else {
                    let option = `<option value="${product.lenses[i]}">${product.lenses[i]} </option>;`;
                    addOptionsToHtml += option;
                  }
                }
              }

              if (categoryName == categoriesUrl[1].name) {
                product.optionsLabel = categoriesUrl[1].optionsLabel;
                for (let i in product.colors) {
                  if (productTargeted.optionSelected == product.colors[i]) {
                    let option = `<option selected="selected" value="${product.colors[i]}">${product.colors[i]}</option>;`;
                    addOptionsToHtml += option;
                  } else {
                    let option = `<option value="${product.colors[i]}">${product.colors[i]}</option>;`;
                    addOptionsToHtml += option;
                  }
                }
              }

              if (categoryName == categoriesUrl[2].name) {
                product.optionsLabel = categoriesUrl[2].optionsLabel;
                for (let i in product.varnish) {
                  if (productTargeted.optionSelected == product.varnish[i]) {
                    let option = `<option selected="selected" value="${product.varnish[i]}">${product.varnish[i]}</option>;`;
                    addOptionsToHtml += option;
                  } else {
                    let option = `<option value="${product.varnish[i]}">${product.varnish[i]}</option>;`;
                    addOptionsToHtml += option;
                  }
                }
              } else {
              }

              let priceProductMultipliedByQuantity =
                productTargeted.quantitySelected * product.price;

              target.innerHTML += `          
                <div
                class="
                  product
                  w-full
                  max-w-790
                  h-96
                  md:h-44
                  flex flex-col
                  md:flex-row
                  justify-center
                  items-center
                  rounded-3xl
                  shadow-lg
                  bg-white
                  overflow-hidden
                "
              >
                <!-- PRODUCT IMAGE -->
                <div class="h-full md:h-full w-full md:w-1/4 overflow-hidden">
                  <img
                    src="${product.imageUrl}"
                    alt="Image du produit :${product.name}"
                    id="productPicture"
                    class="h-full w-full object-cover"
                  />
                </div>
    
                <!-- PRODUCT CONTENT -->
                <div
                  class="
                    w-2/4
                    h-full
                    flex flex-col
                    justify-evenly
                    items-center
                    gap-4
                    md:gap-0
                  "
                >
                  <!-- TITLE -->
                  <h4
                    class="text-xl font-black text-center mt-4 md:mt-0"
                    id="productName"
                  >
                    ${product.name}
                  </h4>
                  <!-- SPECIFICATIONS AND QUANTITY -->
                  <div
                    class="
                      w-full
                      flex flex-wrap flex-row
                      justify-evenly
                      items-center
                      gap-6
                      md:gap-0
                    "
                  >
                    <!-- SPECIFICATIONS -->
                    <div
                      class="
                        flex flex-col
                        justify-center
                        items-center
                        text-base
                        font-semibold
                        text-center
                      "
                    >
                      <label
                        for="productSpecifications"
                        class="text-base underline mb-1 text-indigo-900"
                        >${product.optionsLabel}</label
                      >
                      <select
                        name="${product.optionsLabel}"
                        id="productSpecifications"
                        required
                        class="
                          text-center text-indigo-900 text-base
                          font-semibold
                          rounded-2xl
                          p-1
                          bg-gray-100
                          hover:shadow-xl
                          hover:bg-gray-200
                          rounded-3xl
                          focus:text-white
                          focus:shadow-2xl
                          focus:bg-indigo-900
                        "
                      >
                        <option value="">Choisissez une option</option>
                        ${addOptionsToHtml}
                      </select>
                    </div>
                    <!-- NUMBER ITEMS -->
                    <div
                      class="
                        flex flex-col
                        justify-evenly
                        items-center
                        text-base
                        font-semibold
                        text-center
                      "
                    >
                      <label
                        for="productQuantity"
                        class="text-base underline mb-1 text-indigo-900"
                        >Quantité</label
                      >
                      <input
                        type="number"
                        id="productQuantity"
                        class="
                          text-center text-indigo-900 text-base
                          font-semibold
                          rounded-2xl
                          p-1
                          bg-gray-100
                          hover:shadow-xl
                          hover:bg-gray-200
                          rounded-3xl
                          focus:text-white
                          focus:shadow-2xl
                          focus:bg-indigo-900
                        "
                        step="1"
                        min="1"
                        max="9"
                        name="quantity"
                        value="${productTargeted.quantitySelected}"
                        title="Quantité"
                        inputmode="numeric"
                      />
                    </div>
                  </div>
                  <!-- ERASE -->
                  <p
                    class="
                      productEraser
                      font-semibold
                      text-xs text-center text-indigo-900
                      bg-gray-100
                      rounded-3xl
                      p-1
                      px-3
                      cursor-pointer
                      hover:shadow-xl
                      hover:bg-red-700
                      hover:text-white
                      focus:text-white
                      focus:shadow-2xl
                      focus:bg-indigo-900
                      transform
                      transition-all
                      hover:scale-110
                    "
                  >
                    Supprimer
                  </p>
                </div>
    
                <!-- PRICE -->
                <p
                  class="
                    w-full
                    md:w-1/4
                    my-4
                    md:my-0
                    font-bold
                    text-xl text-center text-indigo-900
                  "
                  id="productPrice"
                >
                  ${
                    priceProductMultipliedByQuantity.toLocaleString("fr") + " €"
                  }
                </p>
              </div>`;
            } else {
            }
          }
        });
    }
  }
}
eraseProductListener();
