import './style.css';
import { DOCUMENTATION, VIDEOS, toggleButton, inputSearch, menuContentElement, searchBlockElement, favoritesListElement,tutoriales } from './constants'; 

const getFavouritesVideos = () =>{
    return`
    <h2> Tutoriales Recomendados</h2>
    <p>¡Estás a punto de sumergirte en un océano de conocimiento!
    Aquí tienes una selección cuidadosa de los tutoriales más útiles y educativos disponibles en la web. 
    Estos tutoriales abarcan una variedad de lenguajes de programación, tecnologías y temas relacionados, 
    para que puedas aprender y mejorar tus habilidades de programación de manera efectiva.
    </p>
    <ul id="videos-list" class="lista"></ul>
    `
} 
tutoriales.innerHTML = getFavouritesVideos()

const videosList = document.getElementById('videos-list')
VIDEOS.forEach(video => {
    const li = document.createElement('li')

    const a = document.createElement('a')
    a.href = video.url;
    a.textContent = video.title
    a.target = "_blank"

    li.appendChild(a);
    videosList.appendChild(li)
})

const getFavoriteTemplate = (title, url) => {
return `
<li class="favorite-element">
  <a href="${url}" target="_blank">${title}</a>
</li>
`;
};  
const setUpFavoritesList = () => {
const favorites = DOCUMENTATION.filter((doc));
const favoritesUl = document.createElement('ul');
favorites.forEach((favorite)=>{
    const favoriteTemplate = getFavoriteTemplate(favorite.title, favorite.url)
    favoritesUl.innerHTML += favoriteTemplate;
})
favoritesListElement.append(favoritesUl)
};
const normalizeText = (text) => text.trim().toLowerCase();
const handleSearch = (e)=> {
    const { value } = e.target; 
    const normalizeValue = normalizeText(value);
    const filteredDocumentation = DOCUMENTATION.filter((doc) =>{
        const normalizeTitle = normalizeText(doc.title);
        return normalizeTitle.includes(normalizeValue);
     
    });
    const searchUl = document.createElement('ul');
    searchUl.id = 'search-ul';
    filteredDocumentation.forEach((doc) => {
        const searchTemplate = getFavoriteTemplate(doc.title, doc.url);
        searchUl.innerHTML += searchTemplate;
    });
    const previousUl = document.querySelector('#search-ul');
    const priviousUl= document.querySelector('#menu-search > .menu-search');
    if(previousUl){
        previousUl.remove();
    }
    if(value === ""){
        priviousUl.remove();
    }
    searchBlockElement.append(searchUl)
    // value = ""
}
const toggleOpenMenu = (click) => {
    menuContentElement.classList.toggle('menu-content--open')
  
}

//Eventos
toggleButton.addEventListener('click', toggleOpenMenu);
inputSearch.addEventListener('input', handleSearch);
//Lista de favoritos
setUpFavoritesList();


