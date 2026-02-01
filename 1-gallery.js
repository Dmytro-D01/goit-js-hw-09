import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as l}from"./assets/vendor-CgTBfC_f.js";const a=[{preview:"./img/gallery/1-1.jpg",original:"./img/gallery/1-1large.jpg",description:"Design Research"},{preview:"./img/gallery/1-2.jpg",original:"./img/gallery/1-2large.jpg",description:"Hand with Lightbulb"},{preview:"./img/gallery/1-3.jpg",original:"./img/gallery/1-3large.jpg",description:"Mobile Development"},{preview:"./img/gallery/2-1.jpg",original:"./img/gallery/2-1large.jpg",description:"Modern Office"},{preview:"./img/gallery/2-2.jpg",original:"./img/gallery/2-2large.jpg",description:"Meeting Room"},{preview:"./img/gallery/2-3.jpg",original:"./img/gallery/2-3large.jpg",description:"Coworking Space"},{preview:"./img/gallery/3-1.jpg",original:"./img/gallery/3-1large.jpg",description:"Workspace with Coffee"},{preview:"./img/gallery/3-2.jpg",original:"./img/gallery/3-2large.jpg",description:"Working Process"},{preview:"./img/gallery/3-3.jpg",original:"./img/gallery/3-3large.jpg",description:"Business Presentation"}];function p(e){return e.map(({preview:i,original:g,description:r})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${g}">
            <img class="gallery-image" src="${i}" alt="${r}" />
          </a>
        </li>
      `).join("")}const n=document.querySelector(".gallery");n.innerHTML=p(a);new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
