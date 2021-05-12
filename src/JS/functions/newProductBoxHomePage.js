// -----------------------------
// -----------------------------
// -----------------------------
// FUNCTION WHO CREATE A NEW PRODUCT BOX
// -----------------------------
// -----------------------------
// -----------------------------

// ADD CLASSES FUNCTION
function addClasses(value, target) {
  // Read array and add every class
  for (let i = 0; i < value.length; i++) {
    target.classList.add(value[i]);
  }
}

// ADD PICTURE FUNCTION
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

// ADD BLOC TEXT FUNCTION
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
// --------- MAIN FUNCTION -----------
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
  let newDivContainer = document.createElement("div");
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
// EXPORTS
// -------
export default newProductBoxHomePage;
export {addClasses, newPicture, newBlocText};
