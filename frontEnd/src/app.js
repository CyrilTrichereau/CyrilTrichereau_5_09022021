// ----------------- app.js
// -----------------


// ARRAY
// -----------------

const categoriesUrl = [
  {
    name: "camera",
    url: "http://localhost:3000/api/cameras",
    optionsLabel: "Lentilles"
  },
  {
    name: "teddy",
    url: "http://localhost:3000/api/teddies",
    optionsLabel: "Couleurs"
  },
  {
    name: "furniture",
    url: "http://localhost:3000/api/furniture",
    optionsLabel: "Vernis"
  }
];


// FUNCTIONS
// -----------------

class Product {
  constructor(jsonProduct) {
    jsonProduct && Object.assign(this, jsonProduct);
  }
};

// -------
// EXPORTS
// -------
export {categoriesUrl, Product };
