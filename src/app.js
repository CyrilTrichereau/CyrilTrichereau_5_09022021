// ----------------- app.js
// -----------------

const addressesArrayUrl = [
  {
    name: "camera",
    url: "http://localhost:3000/api/cameras",
    optionsLabel: "Lentilles",
  },
  {
    name: "teddy",
    url: "http://localhost:3000/api/teddies",
    optionsLabel: "Couleurs",
  },
  {
    name: "furniture",
    url: "http://localhost:3000/api/furniture",
    optionsLabel: "Vernis",
  },
];

// -----------------
// FUNCTIONS
// -----------------

// -------
// SEPARATOR THOUSANDS
// -------

function separatorThousands(numberSource, b) {
  numberSource = "" + numberSource;
  b = b || " ";
  var c = "",
    d = 0;
  while (numberSource.match(/^0[0-9]/)) {
    numberSource = numberSource.substr(1);
  }
  for (var i = numberSource.length - 1; i >= 0; i--) {
    c = d != 0 && d % 3 == 0 ? numberSource[i] + b + c : numberSource[i] + c;
    d++;
  }
  return c;
}

// -------
// REQUEST SERVER TO CREATE AN ARRAY OF OBJECTS
// -------

function requestServerForArrayOfObjects() {
  // Adresses sources, categories and options label
  const addressesArrayUrl = [
    {
      name: "camera",
      url: "http://localhost:3000/api/cameras",
      optionsLabel: "Lentilles",
    },
    {
      name: "teddy",
      url: "http://localhost:3000/api/teddies",
      optionsLabel: "Couleurs",
    },
    {
      name: "furniture",
      url: "http://localhost:3000/api/furniture",
      optionsLabel: "Vernis",
    },
  ];

  // Set array of objects to return
  const arrayRequested = [];
  // Object constructor
  class productInformationsConstructor {
    constructor(
      name,
      id,
      imageUrl,
      description,
      price,
      options,
      optionsLabel,
      category,
      urlCategory
    ) {
      this.name = name;
      this.id = id;
      this.imageUrl = imageUrl;
      this.description = description;
      this.price = price;
      this.options = options;
      this.optionsLabel = optionsLabel;
      this.category = category;
      this.urlCategory = urlCategory;
    }
  }

  // Loop for explore every url and put in an array of objects
  for (let i in addressesArrayUrl) {
    let nameCategorie = addressesArrayUrl[i].name;
    fetch(addressesArrayUrl[i].url)
      .then((response) => {
        // If request OK, return file in JSON
        if (response.ok) {
          return response.json();
        }
        // If not, print an error message in console
        else {
        }
      })
      .then((value) => {

        // For every object in array received
        for (let i in value) {
          // Create and fill the new object
          let newObject = new productInformationsConstructor(
            value[i].name,
            value[i]._id,
            value[i].imageUrl,
            value[i].description,
            value[i].price,
            "",
            "",
            "",
            ""
          );
          //If this category, apply specifics values
          if (nameCategorie == addressesArrayUrl[0].name) {
            newObject.options = value[i].lenses;
            newObject.optionsLabel = addressesArrayUrl[0].optionsLabel;
            newObject.category = addressesArrayUrl[0].name;
            newObject.urlCategory = addressesArrayUrl[0].url;
          }
          //If this category, apply specifics values
          if (nameCategorie == addressesArrayUrl[1].name) {
            newObject.options = value[i].colors;
            newObject.optionsLabel = addressesArrayUrl[1].optionsLabel;
            newObject.category = addressesArrayUrl[1].name;
            newObject.urlCategory = addressesArrayUrl[1].url;
          }
          //If this category, apply specifics values
          if (nameCategorie == addressesArrayUrl[2].name) {
            newObject.options = value[i].varnish;
            newObject.optionsLabel = addressesArrayUrl[2].optionsLabel;
            newObject.category = addressesArrayUrl[2].name;
            newObject.urlCategory = addressesArrayUrl[2].url;
          } else {
          }
          console.log(newObject);
          //Push the new object to the array
          arrayRequested.push(newObject);
        }
      });
  }
  console.log(arrayRequested);
  console.log(arrayRequested[0]);
  console.log(addressesArrayUrl);
  return arrayRequested;
}

// -------
// LINK OF REDIRECTION TO THE HOMEPAGE, PRODUCT CATEGORY DISPLAYER, WITH A CATEGORY SET
// -------

function redirectionToCategoryDisplayerSet() {}


// -------
// EXPORTS
// -------
export {
  addressesArrayUrl,
  separatorThousands,
  requestServerForArrayOfObjects,
  redirectionToCategoryDisplayerSet,
};
