// -----------------------------
// -----------------------------
// -----------------------------
// IMPORT FUNCTIONS, OBJECTS, ARRAY
// -----------------------------
// -----------------------------
// -----------------------------
// Objects
import requestsURL from './JS/objectsAndVariables/requestsURL.js';

// Functions
import heroPictureLoading from './JS/functions/heroPicture.js';
import actionsWhenClickFilter from './JS/functions/actionsWhenClickFilter.js';

// -----------------------------
// -----------------------------
// -----------------------------
// RUN SCRIPT
// -----------------------------
// -----------------------------
// -----------------------------

// TARGET HTML FOR CATEGORY DISPLAYER
let productBoxTarget = document.getElementById('categoryDisplayed');

// FUNCTION CATEGORY DISPLAYER
actionsWhenClickFilter (productBoxTarget);

// HERO PICTURE LOADING
heroPictureLoading (requestsURL.camera, 4);