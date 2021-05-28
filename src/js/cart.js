// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import { categoriesUrl, Product, refreshInCartQuantityLogo } from "../app.js";

//// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
//   ROR TEST ADD ARRAY
function testAddProductToCart() {
  let listCart = localStorage.getItem("cart");
  if (listCart != null) {
    listCart = JSON.parse(listCart);
  } else {
    console.log("Cart empty");
  }
  listCart = [];
  // listCart.push({
  //   id: "5beaaf2e1c9d440000a57d9a",
  //   optionSelected: "Light Oak",
  //   quantitySelected: 1,
  // });
  listCart.push({
    id: "5be9bc241c9d440000a730e7",
    optionSelected: "25mm 4.5",
    quantitySelected: 1,
  });
  // listCart.push({
  //   id: "5beaabe91c9d440000a57d96",
  //   optionSelected: "Blue",
  //   quantitySelected: 4,
  // });
  listCart.push({
    id: "5be9c4c71c9d440000a730e9",
    optionSelected: "35mm 1.8",
    quantitySelected: 1,
  });
  // listCart.push({
  //   id: "5beaadda1c9d440000a57d98",
  //   optionSelected: "Dark Oak",
  //   quantitySelected: 1,
  // });
  // listCart.push({
  //   id: "5beaa8bf1c9d440000a57d94",
  //   optionSelected: "Pale brown",
  //   quantitySelected: 1,
  // });

  localStorage.setItem("cart", JSON.stringify(listCart));
}
// testAddProductToCart();

// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------

// -----------------------------
// FUNCTIONS
// -----------------------------

//
// -----------------------------
// FUNCTION Load products stored in Cart in local storage
// -----------------------------
const loadProductIdStoreInCart = () => {
  let localStorageCart = localStorage.getItem("cart");
  if (localStorageCart == null) {
    emptyCartMessage();
  } else {
    return JSON.parse(localStorageCart);
  }
};

//
// -----------------------------
// FUNCTION Refresh Sub Total
// -----------------------------
function refreshSubTotal() {
  // Sub Total
  document.querySelector("#subTotal").textContent =
    subTotalManagedWithProductBoxesCreation.toLocaleString("fr") + " €";
  // Shipping cost
  const valueShippingCost = 15;
  document.querySelector("#shippingCost").textContent =
    valueShippingCost.toLocaleString("fr") + " €";
  // Taxes
  document.querySelector("#taxes").textContent =
    Number(
      ((subTotalManagedWithProductBoxesCreation / 120) * 20).toFixed(2)
    ).toLocaleString("fr") + " €";
  // Total
  document.querySelector("#total").textContent =
    (
      subTotalManagedWithProductBoxesCreation + valueShippingCost
    ).toLocaleString("fr") + " €";
}

//
// -----------------------------
// FUNCTION Message for empty cart
// -----------------------------
function emptyCartMessage() {
  let emptyCartMessage = `
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
}

//
// -----------------------------
// FUNCTION Create products boxes
// -----------------------------
function createProductBoxes(responseJson, categoryName, productTargeted) {
  let target = document.querySelector("#productInCart");
  let product = new Product(responseJson);
  let addOptionsToHtml = [];

  // Add options according to the category
  for (let category of categoriesUrl) {
    if (categoryName == category.name) {
      product.optionsLabel = category.optionsLabel;
      for (let options of (product[category.optionsCategory])) {
        console.log(options)
        if (productTargeted.optionSelected == options) {
          addOptionsToHtml += `<option selected="selected" value="${options}">${options}</option>;`;
        } else {
          addOptionsToHtml += `<option value="${options}">${options} </option>;`;
        }
      }
    } else {
    }
  }

  let priceProductMultipliedByQuantity =
    productTargeted.quantitySelected * product.price;
    
  // add the subtotal product to the general subtotal
  subTotalManagedWithProductBoxesCreation += priceProductMultipliedByQuantity;

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
      ${priceProductMultipliedByQuantity.toLocaleString("fr") + " €"}
    </p>
  </div>`;
}

//
// -----------------------------
// FUNCTION Erase Product with eraser button inside product box
// -----------------------------
function eraseProductListener() {
  const eraserButton = document.querySelector(".productEraser");
}

// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// RUN SCRIPT
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------

// Refresh numbers of products in cart for the cart logo in header
refreshInCartQuantityLogo();

// Declare Sub Total managed with products boxes creation
let subTotalManagedWithProductBoxesCreation = 0;

// Ask local storage to pick up cart and if empty, transform the page in empty cart, else continue to run script
const productsInCart = loadProductIdStoreInCart();

subTotalManagedWithProductBoxesCreation;
// Loop : for every product in cart, match the id, create a product box and fill with informations
for (let i in productsInCart) {
  let productTargeted = productsInCart[i];

  //Loop request to server an array of objects
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
          if (productTargeted.id == responseJson[i]._id) {
            createProductBoxes(responseJson[i], categoryName, productTargeted);
          }
          refreshSubTotal();
        }
      });
  }
}
eraseProductListener();

const sendProductsOrderAndContact = async (body) => {
  try {
    const response = await fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

const storeResponseInLocalStorage = async (body) => {
  try {
    await sendProductsOrderAndContact(body).then((responseJson) => {
      console.log(responseJson);
      localStorage.setItem("orderConfirmation", JSON.stringify(responseJson));
      localStorage.removeItem("cart");
      window.location = "./orderConfirmation.html";
    });
  } catch (e) {
    console.log(e);
  }
};

document.querySelector("#submitButton").addEventListener("click", (event) => {
  event.preventDefault();
  var valid = true;
  for (let input of document.querySelectorAll("input")) {
    valid &= input.reportValidity();
    if (!valid) {
      console.log("form not valid");
      break;
    }
  }
  if (valid) {
    const body = {
      products: [],
      contact: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        email: "",
      },
    };
    body.contact.firstName = document.querySelector("#firstName").value;
    body.contact.lastName = document.querySelector("#lastName").value;
    body.contact.address = document.querySelector("#address").value;
    body.contact.city = document.querySelector("#city").value;
    body.contact.email = document.querySelector("#email").value;

    let listCart = JSON.parse(localStorage.getItem("cart"));
    for (let i in listCart) {
      body.products.push(listCart[i].id);
    }
    console.log(body);

    storeResponseInLocalStorage(body);
  }
});
