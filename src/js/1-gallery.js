
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './images';

const gallery = document.querySelector(".gallery");

const newImages = images
.map(image => `<li class="gallery-item">
<a class="gallery-link" href="${image.original}">
<img
class="gallery-image"
src="${image.preview}"
data-source="${image.original}"
alt="${image.description}"
/>
</a></li>`)
.join("");

gallery.innerHTML = newImages;

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    enableKeyboard: true,
    captionDelay: 250,
    overlayOpacity: 0.8,
 });


