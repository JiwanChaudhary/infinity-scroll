const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArrays = [];

// Create elements for links and photos, add to DOM
function displayPhotos() {
    //Run function for each function in photo arrays
    photoArrays.forEach((photo) => {
        //Create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        // Create <img> for photo
        const image = document.createElement('img');
        image.setAttribute('src', photo.urls.regular);
        image.setAttribute('alt', photo.alt_description);
        image.setAttribute('title', photo.alt_description);

        // Put <img> inside <a> and both inside imagecontainer
        item.appendChild(image);
        imageContainer.appendChild(item);
    })
}

// Unsplash API
const count = 10;
const ApiKey = '05PblfzfhPruZ8reA0uR6XVzd2SNisg9S5B_Tn0Oc90';
const ApiUrl = `https://api.unsplash.com/photos/random?client_id=${ApiKey}&count=${count}`;

async function GetPhotos() {
    try {
        const response = await fetch(ApiUrl);
        photoArrays = await response.json();
        displayPhotos();
    } catch (error) {
        // Error Here
    }
}

// On Load
GetPhotos();