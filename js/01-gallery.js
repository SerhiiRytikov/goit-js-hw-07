import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulImages = document.querySelector(".gallery")

const createGallery = (galleryItems) => {
    return galleryItems.map(({preview, original, description}) => {
        return`
        
            <li class="gallery__item">
                <a class="gallery__link"
                 href="${original}">
                    <img class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}">
                </a>
            </li>
        
        `
        
    })
    .join("")
}

ulImages.insertAdjacentHTML("afterbegin", createGallery(galleryItems))