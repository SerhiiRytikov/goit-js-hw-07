import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryAllPhotoPreview = document.querySelector('.gallery');

const gelImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
    </a>`,
  )
  .join('');

galleryAllPhotoPreview.innerHTML = gelImg;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
