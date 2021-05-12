
// -------
// ACTIONS TO DO AFTER A CLICK IN FILTER BUTTON
// -------

// IMPORT FUNCTIONS
import requestsURL from '../objectsAndVariables/requestsURL.js';
import categoryFilteredDisplayerHomePage from './categoryFilteredDisplayerHomePage.js';

// -------
// MAIN FUNCTION
// -------
function actionsWhenClickFilter (target) {
    // Creation of an array
    let buttonsFilter = [];
    // Set variables with targeting the button in html page
    let buttonTeddyFilter = document.getElementById('buttonTeddyFilter');
    let buttonCameraFilter = document.getElementById('buttonCameraFilter');
    let buttonFurnitureFilter  = document.getElementById('buttonFurnitureFilter');
    //Send the variables to the array
    buttonsFilter.push (buttonTeddyFilter, buttonCameraFilter, buttonFurnitureFilter);
    console.log(buttonsFilter);
    // Set the listener with a loop who use the array
    for (let i = 0; i < buttonsFilter.length; i++) {
        buttonsFilter[i].addEventListener('click', function () {
            // if it's the teddy filter who is click
            if (buttonsFilter[i] == buttonTeddyFilter) {
                categoryFilteredDisplayerHomePage (requestsURL.teddy, target);
            }
            // if it's the camera filter who is click
            else if (buttonsFilter[i] == buttonCameraFilter) {
                categoryFilteredDisplayerHomePage (requestsURL.camera, target);
            }
            // if it's the furniture filter who is click
            else if (buttonsFilter[i] == buttonFurnitureFilter) {
                categoryFilteredDisplayerHomePage (requestsURL.furniture, target);
            }
            // Else print in console an error message
            else {
                console.log("error with selection of category");
            }
        })
    }

}

// -------
// EXPORTS
// -------
export default actionsWhenClickFilter;