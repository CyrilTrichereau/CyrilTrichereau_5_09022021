// ----------------- app.js
// -----------------


// ARRAY
// -----------------

const categoriesUrl = [
  {
    name: "camera",
    url: "http://localhost:3000/api/cameras",
    optionsLabel: "Lentilles",
    optionsCategory: "lenses"
  },
  {
    name: "teddy",
    url: "http://localhost:3000/api/teddies",
    optionsLabel: "Couleurs",
    optionsCategory: "colors"
  },
  {
    name: "furniture",
    url: "http://localhost:3000/api/furniture",
    optionsLabel: "Vernis",
    optionsCategory: "varnish"
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
