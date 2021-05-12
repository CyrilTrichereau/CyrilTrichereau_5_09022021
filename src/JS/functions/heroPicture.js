
// -----------------------------
// -----------------------------
// -----------------------------
// HERO PICTURE LOADING
// -----------------------------
// -----------------------------
// -----------------------------

function heroPictureLoading (category, numberProduct) {
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

    // Then do something with data
    .then (function (value) {
        // Find picture in html
        let target = document.getElementById('heroPicture');
        // Apply the choosen source
        target.src = value[numberProduct].imageUrl;
    });
}


// -------
// EXPORTS
// -------
export default heroPictureLoading;





