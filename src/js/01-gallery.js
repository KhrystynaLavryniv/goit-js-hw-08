// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        </div>`;
    })
    .join(' ');
}
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250 ms' });
