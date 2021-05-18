// -----------------------------
// -----------------------------
// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------
// -----------------------------
// -----------------------------
// Objects
import { addressesArrayUrl } from "../app.js";

// Functions
import {
  separatorThousands,
  requestServerForArrayOfObjects,
  redirectionToCategoryDisplayerSet,
} from "../app.js";

// -----------------------------
// -----------------------------
// -----------------------------
// FUNCTION WHO CREATE A NEW PRODUCT BOX
// -----------------------------
// -----------------------------
// -----------------------------

// ---------
// ADD CLASSES FUNCTION
// ---------
function addClasses(value, target) {
  // Read array and add every class
  for (let i in value) {
    target.classList.add(value[i]);
  }
}

// ---------
// ADD PICTURE FUNCTION
// ---------
function newPicture(classes, source, alt, target) {
  // Create new html tag
  let valueNewPicture = document.createElement("img");
  // add classes with addClasses function
  addClasses(classes, valueNewPicture);
  // add alt value
  valueNewPicture.setAttribute("alt", alt);
  // add source
  valueNewPicture.src = source;
  // add as a child of target
  target.appendChild(valueNewPicture);
}

// ---------
// ADD BLOC TEXT FUNCTION
// ---------
function newBlocText(HtmlTag, classes, text, target) {
  // Create new html tag
  let valueNewBlocText = document.createElement(HtmlTag);
  // add classes with addClasses function
  addClasses(classes, valueNewBlocText);
  // add text
  valueNewBlocText.innerText = text;
  // add as a child of target
  target.appendChild(valueNewBlocText);
}

// ---------
// FUNCTION WHO CREATE A NEW PRODUCT BOX
// ---------
// NEW PRODUCT BOX HOME PAGE FUNCTION
function newProductBoxHomePage(
  pictureSource,
  titleH4Text,
  priceText,
  descriptionText,
  productBoxTarget
) {
  // SET VARIABLES
  // Box Classes
  let newDivContainerClasses = [
    "product",
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
    "productBoxHomePage",
  ];
  let pictureClasses = [];
  let titleH4Classes = [
    "my-4",
    "px-6",
    "text-2xl",
    "font-black",
    "text-center",
    "text-indigo-900",
  ];
  let priceClasses = [
    "px-6",
    "font-semibold",
    "text-lg",
    "text-center",
    "text-indigo-900",
  ];
  let descriptionClasses = [
    "my-4",
    "px-6",
    "pb-4",
    "text-md",
    "font-semibold",
    "italic",
    "text-center",
  ];

  // Box alt Tag
  let pictureAttributeAlt = "Image du produit";

  // HTML CREATION - ARCHITECTURE AND ADD CONTENT
  // Div container CREATION
  let newDivContainer = document.createElement("a");
  newDivContainer.href = "./pages/productPage.html";
  addClasses(newDivContainerClasses, newDivContainer);
  productBoxTarget.appendChild(newDivContainer);

  // Picture CREATION
  newPicture(
    pictureClasses,
    pictureSource,
    pictureAttributeAlt,
    newDivContainer
  );

  // Title H4 CREATION
  newBlocText("h4", titleH4Classes, titleH4Text, newDivContainer);

  // Price CREATION
  priceText += " €";
  newBlocText("p", priceClasses, priceText, newDivContainer);

  // Description CREATION
  newBlocText("p", descriptionClasses, descriptionText, newDivContainer);
}

// -------
// CATEGORY INFORMATION DISPLAYER
// -------

function categoryFilteredDisplayerHomePage(category, target) {
  // Request to server
  fetch(category)
    .then(function (response) {
      // If request OK, return file in JSON
      if (response.ok) {
        return response.json();
      }
      // If not, print an error message in console
      else {
        console.error(error);
      }
    })

    .then(function (value) {
      console.log(value);
      //Erase the category displayer
      while (target.firstChild) {
        target.removeChild(target.firstChild);
      }

      // Loop for divid the object in variables
      for (let i in value) {
        let valueSource = value[i].imageUrl;
        let valueName = value[i].name;
        let valuePrice = value[i].price;

        let valueDescription = value[i].description;
        // Call the function to create products boxes and set the variables
        newProductBoxHomePage(
          valueSource,
          valueName,
          separatorThousands(valuePrice),
          valueDescription,
          target
        );
      }
    });
}

// -------
// ACTIONS WHEN CLICK ON BUTTON FILTER
// -------
function actionsWhenClickFilter(target) {
  // Creation of an array
  let buttonsFilter = [];
  // Set variables with targeting the button in html page
  let buttonTeddyFilter = document.getElementById("buttonTeddyFilter");
  let buttonCameraFilter = document.getElementById("buttonCameraFilter");
  let buttonFurnitureFilter = document.getElementById("buttonFurnitureFilter");
  //Send the variables to the array
  buttonsFilter.push(
    buttonTeddyFilter,
    buttonCameraFilter,
    buttonFurnitureFilter
  );
  // Set the listener with a loop who use the array
  for (let i in buttonsFilter) {
    buttonsFilter[i].addEventListener("click", function () {
      // if it's the teddy filter who is click
      if (buttonsFilter[i] == buttonTeddyFilter) {
        categoryFilteredDisplayerHomePage(addressesArrayUrl[1].url, target);
      }
      // if it's the camera filter who is click
      else if (buttonsFilter[i] == buttonCameraFilter) {
        categoryFilteredDisplayerHomePage(addressesArrayUrl[0].url, target);
      }
      // if it's the furniture filter who is click
      else if (buttonsFilter[i] == buttonFurnitureFilter) {
        categoryFilteredDisplayerHomePage(addressesArrayUrl[2].url, target);
      }
      // Else print in console an error message
      else {
        console.log("error with selection of category");
      }
    });
  }
}

// -------
// ACTIONS WHEN CLICK ON CATEGORY REDIRECTION IN THE HERO
// -------

// goToCategoryCamera

// ---------
// --------- REDIRECT WHEN CLICK PRODUCT BOX
// ---------
// function redirectWhenClickProductBox (productID) {
//   // targeting product boxes in html
//   let listener = document.getElementsByClassName('productBoxHomePage');
//   // listening click in target
//   listener.addEventListener ('click', () => {
//       localStorage.setItem ('productInCache', 'productID');
//       listener.style.backgroundColor = "#7000CD";
//   });
// };

// -----------------------------
// -----------------------------
// -----------------------------
// RUN SCRIPT
// -----------------------------
// -----------------------------
// -----------------------------

// TARGET HTML FOR CATEGORY DISPLAYER
// ---------
let productBoxTarget = document.getElementById("categoryDisplayed");

// REQUEST SERVER TO GET THE ARRAY OF OBJECTS AND ADD IN AN ARRAY
// ---------
let arrayProducts = requestServerForArrayOfObjects();
console.log(arrayProducts);

// HERO PICTURE LOADING AND LINK TO CATEGORY DISPLAYER
// ---------
// Find picture in html
let targetPicture = document.getElementById("heroPicture");
// Apply the choosen source
targetPicture.src = arrayProducts;
// Target the link
let targetLink = document.getElementById("goToCategoryCamera");
// Set the displayer category to the right category
targetLink.addEventListener("click", function () {
  categoryFilteredDisplayerHomePage(addressesArrayUrl[0].url, target);
});


// FUNCTION CATEGORY DISPLAYER
actionsWhenClickFilter(productBoxTarget);

// REDIRECT WHEN CLICK PRODUCT BOX
// redirectWhenClickProductBox ();
