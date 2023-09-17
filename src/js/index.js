import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const rootRef = document.querySelector('.gallery');
console.log(rootRef);

function fetchPosts() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(data => {
            const markup = data.map(data => {
                return `
                  
                  <li class="gallery__item">
                  <a class="gallery__link" href="${data.url}">
                  <img class="gallery__image" src="${data.url}" alt="${data.id}}" width="386" height="240" />
                  </a>
                  </li>
                       `
            }).join("");

            rootRef.insertAdjacentHTML('beforeend', markup);
            const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionPosition: 'top',
            });
        });
}

fetchPosts();