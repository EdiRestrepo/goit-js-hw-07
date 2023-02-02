import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Create the same gallery as in the first task, but using the SimpleLightbox library, 
//which will handle image clicks, modal opening and closing and image scrolling with the keyboard.


//Do this task in the 02-lightbox.html and 02-lightbox.js files. Break it down into several subtasks:

//1. Creating and rendering markup from the galleryItems data array and provided gallery element template. 
//   Use the ready-made code from the first task.
//2. Adding the script and library styles using the cdnjs CDN service. You need to add links to two files: 
//   simple-lightbox.min.js and simple-lightbox.min.css.
//3. Library initialization after gallery items are created and added to div.gallery. To do this, read the 
//   SimpleLightbox documentation - first of all, the Usage and Markup sections.
//4. Look in the documentation for the Options section and add image caption display from the alt attribute. 
//   Let the caption be at the bottom and appear 250 milliseconds after image opening.

//list container selector
const listGallery = document.querySelector(".gallery");

//It is necessary to slightly change the gallery card markup; use this template.
const galleryMarkup = galleryItems
  .map(
    (galleryItems) =>
      `<a class="gallery__item" href="${galleryItems.original}">
      <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
    </a>`
  )
  .join("\n");

  //1. Creating and rendering markup from the galleryItems data array and provided gallery element template. 
//   Use the ready-made code from the first task.
listGallery.insertAdjacentHTML("afterbegin", galleryMarkup);


//library selector listener
listGallery.addEventListener("click", selectlibrary);

function selectlibrary(event) {
    event.preventDefault();
    let lightbox = new SimpleLightbox('.gallery a', { /* options */ });
  }

