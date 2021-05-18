// -----------------------------
// -----------------------------
// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------
// -----------------------------
// -----------------------------
// Objects
import {addressesArrayUrl} from '../app.js';


// Functions
import {separatorThousands, requestServerForArrayOfObjects, redirectionToCategoryDisplayerSet} from "../app.js";




// ------------
// FUNCTION WHO FILL IT UP THE PRODUCT PAGE WITH INFORMATION FROM THE SERVER
// ------------

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
         for (let i in arrayOptions) {
             //Create new html tag
             let productOtherOptions = document.createElement("option");
             // add text
             productOtherOptions.textContent = arrayOptions[i];
            // add as a child of target
             target.appendChild(productOtherOptions);
     }
}


// ------------
// PRODUCT PAGE : DISPLAYER INFOS
// ------------


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
    for (let i in addressesArrayUrl) {
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
                for (let i in value) {
                    if (ID == value[i]._id) {
                        // Apply picture url source
                        productPicture.src = value[i].imageUrl;
                        // Apply picture alt
                        productPicture.alt = value[i].name;
                        // Apply name
                        productName.textContent = value[i].name;
                        // Apply ID
                        productID.innerHTML = value[i]._id;
                        // Apply price with separator thousands and Euro symbol
                        productPrice.textContent = separatorThousands (value[i].price);
                        productPrice.textContent += " €";
                        // Add description
                        productDescription.textContent = value[i].description;

                        // Apply options label, in french

                        if (value[i].lenses != null) {
                            // Apply options label, in french
                            productOptionsLabel.textContent = "Lentilles";
                            addChooseProductOption (productOptions);
                            let thisCameraLenses = value[i].lenses;
                            addProductOptions (thisCameraLenses, productOptions);
                        }
                        if (value[i].colors != null) {
                            // Apply options label, in french
                            productOptionsLabel.textContent = "Couleurs";
                            addChooseProductOption (productOptions);
                            let thisTeddyColors = value[i].colors;
                            addProductOptions (thisTeddyColors, productOptions);
                        }
                        if (value[i].varnish != null) {
                            // Apply options label, in french
                            productOptionsLabel.textContent = "Vernis";
                            addChooseProductOption (productOptions);
                            let thisFurnitureVarnish = value[i].varnish;
                            addProductOptions (thisFurnitureVarnish, productOptions);
                        }
                        else {
                        }
                    }
                    else {
                    }
                }
        })
    }
};





// -----------------------------
// -----------------------------
// -----------------------------
// RUN SCRIPT
// -----------------------------
// -----------------------------
// -----------------------------

// REQUEST SERVER TO GET THE ARRAY OF OBJECTS AND ADD IN AN ARRAY
let arrayProducts = requestServerForArrayOfObjects ();
console.log(arrayProducts);

// PRODUCT PAGE DISPLAYING PRODUCT INFORMATIONS
productPageDisplayInformation ("5be1ef211c9d44000030b062");


