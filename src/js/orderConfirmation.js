// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import { categoriesUrl, Product, refreshInCartQuantityLogo } from "../app.js";

// -----------------------------
// FUNCTIONS
// -----------------------------
// FUNCTION Get Order Confirmation in Local Storage
const getOrderConfirmation = () => {
  const response = localStorage.getItem("orderConfirmation");
  if (response == null) {
    errorWithConfirmation();
  } else {
    return JSON.parse(response);
  }
};

// FUNCTION Error If No Oredr Confirmation Informations In Local Storage
const errorWithConfirmation = () => {
  document.querySelector("#titleOrderConfirmation").textContent =
    "Erreur dans la commande";

  document.querySelector(
    "#cartAnimationOrderConfirmation"
  ).innerHTML = `<i class="
    far 
    fa-sad-cry 
    sadIcon
    text-6xl
    md:text-9xl 
    mx-auto">
  </i>`;

  document.querySelector("#subtitleOrderConfirmation").textContent =
    "Merci de retenter de nouveau votre chance !";

  document.querySelector("#paragraphOrderConfirmation").innerHTML = `<p
    class="
      w-full
      text-1xl
      mt-6
      font-semibold
      text-center text-indigo-900
      italic
    "
  >
  Nous sommes désolé mais une erreur s'est glissé dans la commande et elle n'a malheuresement pas pu aboutir...
  </p>
<a
    href="mailto:contact@orinoco.fr"
    class="
      w-full
      flex flex-col
      justify-center
      items-center
      mb-4
      md:mb-0
      group
    "
  >
    <p
      class="
        w-auto
        text-sm
        lg:text-base
        xl:text-lg
        mt-2
        text-indigo-900
        italic
        font-bold
        text-center
        group-hover:shadow-xl
        group-hover:underline
        group-focus:text-white
        group-focus:shadow-2xl
        group-hover:bg-white
        group-focus:bg-indigo-900
        rounded-3xl
        px-4
      "
    >
    N'hésitez pas à contacter notre service client en cas de récidive !
    </p>
  </a>
`
};

// FUNCTION Update Order Confirmation Number And Total Price On Page
const updateInformationsOnPage = (orderConfirmation) => {
  // Update Order Confirmation Number
  document.querySelector("#orderNumber").textContent =
    orderConfirmation.orderId;
  // Calculate total price
  let totalOrderPrice = 0;
  for (let productPrice of orderConfirmation.products) {
    console.log(productPrice);
    totalOrderPrice += productPrice.price;
    console.log(totalOrderPrice);
  }
  document.querySelector("#orderPrice").textContent =
    totalOrderPrice.toLocaleString("fr") + " €";
};

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

// Get the order confirmation informations on local storage
const orderConfirmation = getOrderConfirmation();

// And update the order confirmation number and total price on page
updateInformationsOnPage(orderConfirmation);
