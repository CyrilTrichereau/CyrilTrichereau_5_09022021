
// -------
// CATEGORY DISPLAYER
// -------

// IMPORT FUNCTIONS
import newProductBoxHomePage from "./newProductBoxHomePage";
import separatorThousands from "./separatorThousands";



// -------
// MAIN FUNCTION
// -------

function categoryFilteredDisplayerHomePage (category, target) {
    // Request to server
    fetch(category)
        .then(function(response) {
            // If request OK, return file in JSON
            if (response.ok) {
                return response.json();
            }
            // If not, print an error message in console
            else {
                console.error(error)
            }
        })

        .then (function (value) {
            console.log(value);
            //Erase the category displayer
            while (target.firstChild) {
                target.removeChild(target.firstChild)
            };




            // Loop for divid the object in variables
            for (let i = 0; i < value.length; i++) {
                let valueSource = value[i].imageUrl;
                let valueName = value[i].name;
                let valuePrice = value[i].price;

                let valueDescription = value[i].description;
                // Call the function to create products boxes and set the variables
                newProductBoxHomePage (valueSource, valueName, separatorThousands (valuePrice), valueDescription, target);
            }
        })
};





// -------
// EXPORTS
// -------
export default categoryFilteredDisplayerHomePage;
