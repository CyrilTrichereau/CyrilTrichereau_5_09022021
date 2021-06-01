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

//// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
//   ROR TEST ADD ARRAY
const testAddProductToCart = () => {
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
    quantitySelected: 1,
    category: "furniture",
    url: "http://localhost:3000/api/furniture/5beaaf2e1c9d440000a57d9a",
  });
  listCart.push({
    id: "5be9bc241c9d440000a730e7",
    optionSelected: "25mm 4.5",
    quantitySelected: 1,
    category: "camera",
    url: "http://localhost:3000/api/cameras/5be9bc241c9d440000a730e7",
  });
  listCart.push({
    id: "5beaabe91c9d440000a57d96",
    optionSelected: "Blue",
    quantitySelected: 4,
    category: "teddy",
    url: "http://localhost:3000/api/teddies/5beaabe91c9d440000a57d96",
  });
  listCart.push({
    id: "5be9c4c71c9d440000a730e9",
    optionSelected: "35mm 1.8",
    quantitySelected: 1,
    category: "camera",
    url: "http://localhost:3000/api/cameras/5be9c4c71c9d440000a730e9",
  });
  listCart.push({
    id: "5beaadda1c9d440000a57d98",
    optionSelected: "Dark Oak",
    quantitySelected: 1,
    category: "furniture",
    url: "http://localhost:3000/api/furniture/5beaadda1c9d440000a57d98",
  });
  listCart.push({
    id: "5beaa8bf1c9d440000a57d94",
    optionSelected: "Pale brown",
    quantitySelected: 1,
    category: "teddy",
    url: "http://localhost:3000/api/teddies/5beaa8bf1c9d440000a57d94",
  });

  localStorage.setItem("cart", JSON.stringify(listCart));
};
// testAddProductToCart();

// -----------------------------
// -----------------------------
// -----------------------------

// ----------------------------------------------
// ----------------------------------------------
// -------------   ARRAY AND OBJECT -------------
// ----------------------------------------------
// ----------------------------------------------

// List of classes from Tailwind
const classList = {
  productBoxHtmlToAdd: [
    "boxesToListen",
    "w-full",
    "max-w-790",
    "h-96",
    "md:h-44",
    "flex",
    "flex-col",
    "md:flex-row",
    "justify-center",
    "items-center",
    "rounded-3xl",
    "shadow-lg",
    "bg-white",
    "overflow-hidden",
  ],
  pictureBox: ["h-full", "md:h-full", "w-full", "md:w-1/4", "overflow-hidden"],
  picture: ["h-full", "w-full", "object-cover"],
  productContentBox: [
    "w-2/4",
    "h-full",
    "flex",
    "flex-col",
    "justify-evenly",
    "items-center",
    "gap-4",
    "md:gap-0",
  ],
  productContentTitle: [
    "text-xl",
    "font-black",
    "text-center",
    "mt-4",
    "md:mt-0",
  ],
  productContentSpecificationsAndQuantity: [
    "w-full",
    "flex",
    "flex-wrap",
    "flex-row",
    "justify-evenly",
    "items-center",
    "gap-6",
    "md:gap-0",
  ],
  productContentSpecifications: [
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "text-base",
    "font-semibold",
    "text-center",
  ],
  productContentSpecificationsLabel: [
    "text-base",
    "underline",
    "mb-1",
    "text-indigo-900",
  ],
  productContentSpecificationsSelect: [
    "text-center",
    "text-indigo-900",
    "text-base",
    "font-semibold",
    "rounded-2xl",
    "p-1",
    "bg-gray-100",
    "hover:shadow-xl",
    "hover:bg-gray-200",
    "rounded-3xl",
    "focus:text-white",
    "focus:shadow-2xl",
    "focus:bg-indigo-900",
  ],
  productContentQuantity: [
    "flex",
    "flex-col",
    "justify-evenly",
    "items-center",
    "text-base",
    "font-semibold",
    "text-center",
  ],
  productContentQuantityLabel: [
    "text-base",
    "underline",
    "mb-1",
    "text-indigo-900",
  ],
  productContentQuantityInput: [
    "text-center",
    "text-indigo-900",
    "text-base",
    "font-semibold",
    "rounded-2xl",
    "p-1",
    "bg-gray-100",
    "hover:shadow-xl",
    "hover:bg-gray-200",
    "rounded-3xl",
    "focus:text-white",
    "focus:shadow-2xl",
    "focus:bg-indigo-900",
  ],
  productContentEraserButton: [
    "font-semibold",
    "text-xs",
    "text-center",
    "text-indigo-900",
    "bg-gray-100",
    "rounded-3xl",
    "p-1",
    "px-3",
    "cursor-pointer",
    "hover:shadow-xl",
    "hover:bg-red-700",
    "hover:text-white",
    "focus:text-white",
    "focus:shadow-2xl",
    "focus:bg-indigo-900",
    "transform",
    "transition-all",
    "hover:scale-110",
  ],
  productPriceBox: [
    "productPrice",
    "w-full",
    "md:w-1/4",
    "my-4",
    "md:my-0",
    "font-bold",
    "text-xl",
    "text-center",
    "text-indigo-900",
  ],
};

// ---------------------------------------
// ---------------------------------------
// -------------   FUNCTIONS -------------
// ---------------------------------------
// ---------------------------------------
//
// -----------------------------
// FUNCTION Refresh Sub Total
// -----------------------------
const refreshSubTotal = () => {
  // Calculate subtotal
  let subtotalOfAllProducts = 0;
  let listPrices = document.querySelectorAll(".productPrice");
  for (let price of listPrices) {
    subtotalOfAllProducts += Number(price.dataset.subtotalPrice);
  }
  // Sub Total
  document.querySelector("#subTotal").textContent =
    subtotalOfAllProducts.toLocaleString("fr") + " €";
  // Shipping cost
  const valueShippingCost = 15;
  document.querySelector("#shippingCost").textContent =
    valueShippingCost.toLocaleString("fr") + " €";
  // Taxes
  document.querySelector("#taxes").textContent =
    Number(((subtotalOfAllProducts / 120) * 20).toFixed(2)).toLocaleString(
      "fr"
    ) + " €";
  // Total
  document.querySelector("#total").textContent =
    (subtotalOfAllProducts + valueShippingCost).toLocaleString("fr") + " €";
};

//
// -----------------------------
// FUNCTION Request products with id and create products boxes
// -----------------------------
const requestProductsAndDisplay = async (productToRequest) => {
  for (let i in productToRequest) {
    const responseFetch = await fetchProducts(productToRequest[i].url);
    let productTargeted = productToRequest[i];
    createCartProductBoxes(
      responseFetch,
      productToRequest[i].category,
      productTargeted
    );
  }
  refreshSubTotal();
};

//
// -----------------------------
// FUNCTION Subtotal per product box
// -----------------------------
const subtotalProductBox = (quantity, price, target) => {
  target.textContent = (quantity * price).toLocaleString("fr") + " €";
  target.dataset.subtotalPrice = quantity * price;
};

//
// -----------------------------
// FUNCTION Create Product Box
// -----------------------------
const createCartProductBoxes = (
  responseJson,
  categoryName,
  productTargeted
) => {
  let target = document.querySelector("#productInCart");
  let product = new Product(responseJson);

  // Product Box
  let productBoxHtmlToAdd = document.createElement("div");
  addClasses(classList.productBoxHtmlToAdd, productBoxHtmlToAdd);

  // 1 - Product image box
  let pictureBox = document.createElement("div");
  addClasses(classList.pictureBox, pictureBox);

  // 1.1 - Product image box - Picture
  let picture = document.createElement("img");
  addClasses(classList.picture, picture);
  picture.src = product.imageUrl;
  picture.setAttribute("alt", "Image du produit : " + product.name);
  pictureBox.appendChild(picture);

  // -----------------
  // 2 - Product content box
  let productContentBox = document.createElement("div");
  addClasses(classList.productContentBox, productContentBox);

  // 2.1 - Product content box - Title
  let productContentTitle = document.createElement("h4");
  addClasses(classList.productContentTitle, productContentTitle);
  productContentTitle.textContent = product.name;
  productContentBox.appendChild(productContentTitle);

  // 2.2 - Product content box - Specifications and quantity
  let productContentSpecificationsAndQuantity = document.createElement("div");
  addClasses(
    classList.productContentSpecificationsAndQuantity,
    productContentSpecificationsAndQuantity
  );
  productContentBox.appendChild(productContentSpecificationsAndQuantity);

  // 2.2.1 - Product content box - Specifications and quantity - Specifications
  let productContentSpecifications = document.createElement("div");
  addClasses(
    classList.productContentSpecifications,
    productContentSpecifications
  );
  productContentSpecificationsAndQuantity.appendChild(
    productContentSpecifications
  );

  // 2.2.1 - Product content box - Specifications and quantity - Specifications - Label
  let productContentSpecificationsLabel = document.createElement("label");
  addClasses(
    classList.productContentSpecificationsLabel,
    productContentSpecificationsLabel
  );
  productContentSpecificationsLabel.setAttribute(
    "for",
    "productSpecifications"
  );
  productContentSpecificationsLabel.textContent = product.optionsLabel;
  productContentSpecifications.appendChild(productContentSpecificationsLabel);

  // 2.2.1 - Product content box - Specifications and quantity - Specifications - Select
  let productContentSpecificationsSelect = document.createElement("select");
  addClasses(
    classList.productContentSpecificationsSelect,
    productContentSpecificationsSelect
  );
  productContentSpecificationsSelect.id = "productSpecifications";
  productContentSpecificationsSelect.required = true;
  productContentSpecifications.appendChild(productContentSpecificationsSelect);

  // 2.2.1 - Product content box - Specifications and quantity - Specifications - Select - First Option
  let productContentSpecificationsFirstOptions =
    document.createElement("option");
  productContentSpecificationsFirstOptions.value = "";
  productContentSpecificationsFirstOptions.textContent =
    "Choisissez une option";
  productContentSpecificationsSelect.appendChild(
    productContentSpecificationsFirstOptions
  );

  // 2.2.1 - Product content box - Specifications and quantity - Specifications - Select - Other Option
  for (let category of categoriesUrl) {
    if (categoryName == category.name) {
      product.optionsLabel = category.optionsLabel;
      for (let options of product[category.optionsCategory]) {
        if (productTargeted.optionSelected == options) {
          let addOption = document.createElement("option");
          addOption.setAttribute("selected", "selected");
          addOption.value = options;
          addOption.textContent = options;
          productContentSpecificationsSelect.appendChild(addOption);
        } else {
          let addOption = document.createElement("option");
          addOption.value = options;
          addOption.textContent = options;
          productContentSpecificationsSelect.appendChild(addOption);
        }
      }
    } else {
    }
  }

  // 2.2.2 - Product content box - Specifications and quantity - Quantity
  let productContentQuantity = document.createElement("div");
  addClasses(classList.productContentQuantity, productContentQuantity);
  productContentSpecificationsAndQuantity.appendChild(productContentQuantity);

  // 2.2.2 - Product content box - Specifications and quantity - Quantity - Label
  let productContentQuantityLabel = document.createElement("label");
  addClasses(
    classList.productContentQuantityLabel,
    productContentQuantityLabel
  );
  productContentQuantityLabel.setAttribute("for", "productQuantity");
  productContentQuantityLabel.textContent = "Quantité";
  productContentQuantity.appendChild(productContentQuantityLabel);

  // 2.2.2 - Product content box - Specifications and quantity - Quantity - Input
  let productContentQuantityInput = document.createElement("input");
  addClasses(
    classList.productContentQuantityInput,
    productContentQuantityInput
  );
  setAttributes(
    [
      { name: "type", value: "number" },
      { name: "step", value: 1 },
      { name: "min", value: 1 },
      { name: "max", value: 9 },
      { name: "name", value: "quantity" },
      { name: "title", value: "Quantité" },
      { name: "inputmode", value: "numeric" },
      { name: "value", value: productTargeted.quantitySelected },
      { name: "id", value: "productQuantity" },
      { name: "required", value: "" },
    ],
    productContentQuantityInput
  );
  productContentQuantity.appendChild(productContentQuantityInput);

  // 2.3 - Product content box - Eraser button
  let productContentEraserButton = document.createElement("p");
  addClasses(classList.productContentEraserButton, productContentEraserButton);
  productContentEraserButton.textContent = "Supprimer";

  productContentBox.appendChild(productContentEraserButton);

  // -----------------
  // 3 - Product price
  let productPriceBox = document.createElement("p");
  addClasses(classList.productPriceBox, productPriceBox);

  subtotalProductBox(
    productContentQuantityInput.value,
    product.price,
    productPriceBox
  );

  // Integrate boxes
  productBoxHtmlToAdd.appendChild(pictureBox);
  productBoxHtmlToAdd.appendChild(productContentBox);
  productBoxHtmlToAdd.appendChild(productPriceBox);
  target.appendChild(productBoxHtmlToAdd);

  // Listening quantity
  optionListeningAndUpdateToCart(
    productContentQuantityInput,
    productContentSpecificationsSelect,
    product._id,
    productContentQuantityInput,
    product.price,
    productPriceBox
  );
  // Listening options
  optionListeningAndUpdateToCart(
    productContentSpecificationsSelect,
    productContentQuantityInput,
    product._id,
    productContentQuantityInput,
    product.price,
    productPriceBox
  );
  // Listening button Eraser
  eraserButtonListeningAndErase(
    productContentEraserButton,
    productContentQuantityInput.value,
    productContentSpecificationsSelect.value,
    product._id,
    target
  );
};

//
// -----------------------------
// FUNCTION Option listening and updating cart
// -----------------------------
const optionListeningAndUpdateToCart = (
  targetToListen,
  secondOptionToTarget,
  idTargeted,
  quantityForPrice,
  productPrice,
  targetPrice
) => {
  targetToListen.addEventListener("change", () => {
    let listCart = getCart();
    for (let i in listCart) {
      if (
        listCart[i].id == idTargeted &&
        listCart[i].optionSelected == secondOptionToTarget.value
      ) {
        listCart[i].quantitySelected = targetToListen.value;
        break;
      }
      if (
        listCart[i].id == idTargeted &&
        listCart[i].quantitySelected == secondOptionToTarget.value
      ) {
        listCart[i].optionSelected = targetToListen.value;
        break;
      }
    }
    subtotalProductBox(quantityForPrice.value, productPrice, targetPrice);
    refreshSubTotal();
    updateCart(listCart);
    refreshInCartQuantityLogo();
  });
};

//
// -----------------------------
// FUNCTION Erase product in cart with eraser button
// -----------------------------
const eraserButtonListeningAndErase = (
  targetToListen,
  quantity,
  option,
  idTargeted,
  target
) => {
  targetToListen.addEventListener("click", () => {
    let listCart = getCart();
    for (let i in listCart) {
      if (
        listCart[i].id == idTargeted &&
        listCart[i].optionSelected == option &&
        listCart[i].quantitySelected == quantity
      ) {
        listCart.splice(i, 1);
        break;
      }
    }
    updateCart(listCart);
    // erase products boxes displayed
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
    let listCartUpdated = getCart();
    // Refresh product displayer : For every product in cart, request server with product id
    requestProductsAndDisplay(listCartUpdated);
    refreshInCartQuantityLogo();
  });
};

//
// -----------------------------
// FUNCTION Send products Order and contact
// -----------------------------
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
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

//
// -----------------------------
// FUNCTION Store order response in local storage
// -----------------------------
const SendOrderAndStoreResponse = async (body) => {
  try {
    await sendProductsOrderAndContact(body).then((responseJson) => {
      localStorage.setItem("orderConfirmation", JSON.stringify(responseJson));
      localStorage.removeItem("cart");
      window.location = "./orderConfirmation.html";
    });
  } catch (e) {
    console.log(e);
  }
};

//
// -----------------------------
// FUNCTION Listening submit button : when click, check input validity, send order and store response in local storage
// -----------------------------
const listeningSubmitButton = () => {
  document.querySelector("#submitButton").addEventListener("click", (event) => {
    event.preventDefault();
    var valid = true;
    for (let input of document.querySelectorAll("input")) {
      valid &= input.reportValidity();
      if (!valid) {
        console.log("form not valid");
        return;
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

      let listCart = getCart();
      for (let i in listCart) {
        body.products.push(listCart[i].id);
      }
      SendOrderAndStoreResponse(body);
    }
  });
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

// Ask local storage to pick up cart and if empty, transform the page in empty cart, else continue to run script
const productsInCart = getCart();

// For every product in cart, request server with product id
requestProductsAndDisplay(productsInCart);

// Listening submit button : when click, check input validity, send order and store response in local storage
listeningSubmitButton();
