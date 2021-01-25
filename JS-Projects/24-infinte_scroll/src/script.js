const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let phostosArray = [];

// Unsplash API
let count = 5;
const apiKey = 'CX4vUlQS4BOPLusXOEV7TuhUz96G-tMe_8Kqy73AgFQ'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
  }
}

// Helper function to set attributes on DOM Elments
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create elements for links and photos
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = phostosArray.length;
  phostosArray.forEach((photo) => {

    // Create an <a> to link to Unsplash
    const item = document.createElement('a');

    // Create <img> photo
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    })

    // Create img for photos
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

    // Event listenner, check when finish loading
    img.addEventListener('load', imageLoaded);

    // Put the <img> inside a <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get images from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    phostosArray = await response.json();
    displayPhotos();
  } catch (error) {

  }
}

// Check to see if scroll near bottom of page, load more photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000, ready) {
    ready = false;
    getPhotos();
  }
});

// On Load
getPhotos();