import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: './img/gallery/1-1.jpg',
    original: './img/gallery/1-1large.jpg',
    description: 'Design Research',
  },
  {
    preview: './img/gallery/1-2.jpg',
    original: './img/gallery/1-2large.jpg',
    description: 'Hand with Lightbulb',
  },
  {
    preview: './img/gallery/1-3.jpg',
    original: './img/gallery/1-3large.jpg',
    description: 'Mobile Development',
  },
  {
    preview: './img/gallery/2-1.jpg',
    original: './img/gallery/2-1large.jpg',
    description: 'Modern Office',
  },
  {
    preview: './img/gallery/2-2.jpg',
    original: './img/gallery/2-2large.jpg',
    description: 'Meeting Room',
  },
  {
    preview: './img/gallery/2-3.jpg',
    original: './img/gallery/2-3large.jpg',
    description: 'Coworking Space',
  },
  {
    preview: './img/gallery/3-1.jpg',
    original: './img/gallery/3-1large.jpg',
    description: 'Workspace with Coffee',
  },
  {
    preview: './img/gallery/3-2.jpg',
    original: './img/gallery/3-2large.jpg',
    description: 'Working Process',
  },
  {
    preview: './img/gallery/3-3.jpg',
    original: './img/gallery/3-3large.jpg',
    description: 'Business Presentation',
  },
];

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join("");
}

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(images);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});