// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

import { categoriesUrl, Product } from "../app.js";

// -----------------------------
// FUNCTIONS
// -----------------------------








// -----------------------------
// RUN SCRIPT
// -----------------------------

//    --Redirect links

//    --fill it up informations
fetch(categoriesUrl[0].url)
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

});



//    --favorite button





