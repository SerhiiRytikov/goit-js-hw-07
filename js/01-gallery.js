import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryAllPhotoPreview = document.querySelector('.gallery');

const gelImg = galleryItems
  .map(
    el =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img
          class="gallery__image"
          src=${el.preview}
          data-source=${el.original}
          alt=${el.description}
        />
      </a>
    </div>`,
  )
  .join('');

galleryAllPhotoPreview.innerHTML = gelImg;

galleryAllPhotoPreview.addEventListener('click', selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img  src=${event.target.dataset.source}  width ="800" />`,
  );

  instance.show();

  document.addEventListener('keydown', keyEsc);
  function keyEsc(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}
