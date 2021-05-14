// -----------------------------
// -----------------------------
// -----------------------------
// FUNCTION WHO FILL IT UP THE PRODUCT PAGE WITH INFORMATION FROM THE SERVER
// -----------------------------
// -----------------------------
// -----------------------------


// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------

// Objects
import addressesArrayUrl from '../objectsAndVariables/requestsURL.js';

// Functions
import separatorThousands from "./separatorThousands";


function addChooseProductOption (target) {
    // 1st OPTION : CHOOSE YOUR OPTION
        // Create new html tag
        let productOption = document.createElement("option");
        // add text
        productOption.textContent = "Choisissez une option";
        // add as a child of target
        target.appendChild(productOption);
}


function addProductOptions (arrayOptions, target) {
         for (let i = 0; i < arrayOptions.length; i++) {
            console.log(arrayOptions.length);
             //Create new html tag
             let productOtherOptions = document.createElement("option");
             // add text
             productOtherOptions.textContent = arrayOptions[i];
            // add as a child of target
             target.appendChild(productOtherOptions);
     }
}


// -----------------------------
// MAIN FUNCTION
// -----------------------------

function productPageDisplayInformation (ID) {
    // Start by targeting the html for output the information
    let productPicture = document.getElementById('productPicture');
    let productName = document.getElementById('productName');
    let productID = document.getElementById('productID');
    let productOptionsLabel = document.getElementById('productOptionsLabel');
    let productOptions = document.getElementById('productOptions');
    let productPrice = document.getElementById('productPrice');
    let productDescription = document.getElementById('productDescription');
    
    // FOR EVERY CATEGORY
    console.log(addressesArrayUrl);
    for (let i = 0; i < addressesArrayUrl.length; i++) {
        // Request to server
        fetch(addressesArrayUrl[i].url)
            .then(function(response) {
                // If request OK, return file in JSON
                if (response.ok) {
                    return response.json();
                }
                // If not, print an error message in console
                else {
                }
            })

            .then (function (value) {
                console.log(value);
                // Loop for divid the object in variables
                for (let i = 0; i < value.length; i++) {
                    if (ID == value[i]._id) {
                        // Apply picture url source
                        productPicture.src = value[i].imageUrl;
                        // Apply name
                        productName.textContent = value[i].name;
                        // Apply ID
                        productID.innerHTML = value[i]._id;
                        // Apply options label, in french





                        if (value[i].lenses != null) {
                            // Apply options label, in french
                            productOptionsLabel.textContent = "Lentilles";
                            addChooseProductOption (productOptions);
                            let thisCameraLenses = value[i].lenses;
                            console.log(thisCameraLenses);
                            addProductOptions (thisCameraLenses, productOptions);


                            // -------------------------ADD VALUE
                            // <option value="50mm 1.8">50mm 1.8</option>
                        }





                        if (value[i].colors != null) {
                            // Apply options label, in french
                            productOptionsLabel.textContent = "Couleurs";
                        }
                        if (value[i].varnish != null) {
                            // Apply options label, in french
                            productOptionsLabel.textContent = "Vernis";
                        }
                        else {
                        }
                        // Apply price with separator thousands and Euro symbol
                        productPrice.textContent = separatorThousands (value[i].price);
                        productPrice.textContent += " €";
                        // Add description
                        productDescription = value[i].description;
                    }
                    else {
                    }
                }
        })
    }
      





}




// -------
// EXPORTS
// -------
export default productPageDisplayInformation;