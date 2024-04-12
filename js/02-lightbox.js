import { galleryItems } from "./gallery-items.js";
// Change code below this line

let galleryContainer = document.querySelector("ul.gallery");

const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHander = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});

galleryHander.on("show.SimpleLightbox");
