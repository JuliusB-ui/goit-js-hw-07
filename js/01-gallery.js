import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  let li = `<li class="gallery__item">
  <a class="gallery__link" href="javascript:void(0)">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  gallery.innerHTML += li;
});

gallery.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.tagName === "IMG") {
    let bigImage = event.target.getAttribute("data-source");
    let instance = basicLightbox.create(`
    <img src="${bigImage}" width="800" height="600">
`);
    instance.show();

    window.addEventListener("keyup", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
});
