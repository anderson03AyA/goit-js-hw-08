
import { galleryItems } from './gallery-items.js';
// estilos adicional 
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGallery(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.preview}">
            <img class="gallery__image" src="${item.original}" alt="${item.description}" />
        </a>
     </li>`
    )
    .join('');
}
const addGallery = createGallery(galleryItems);

gallery.innerHTML = addGallery;

function action(imageAction) {
  imageAction.preventDefault();
}

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});


console.log(lightbox);


//opcional 
//quitar el estilo de las listas 
const listItemStyle = document.querySelectorAll('li');
listItemStyle.forEach(item => {
  item.style.listStyle = 'none';
});