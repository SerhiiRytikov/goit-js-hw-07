import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItem = document.querySelector(".gallery");

galleryItem.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600">`
  );

  instance.show();

  window.addEventListener("keydown", closeGallery);
  function closeGallery(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
});

function createGallery(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}

galleryItem.innerHTML = createGallery(galleryItems);