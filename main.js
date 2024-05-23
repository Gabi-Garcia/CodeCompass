import './style.css';
import { DOCUMENTATION } from './constants'; 

const toggleButton = document.querySelector('#menu-toggle')
const inputSearch = document.querySelector('#menu-search');
const menuContentElement = document.querySelector('#menu-content')
const  searchBlockElement = document.querySelector('#menu-content > .search');
const favoritesListElement = document.querySelector('#menu-content > .favorites'
);
const getFavoriteTemplate = (title, url) => {
return `
<li class="favorite-element">
  <a href="${url}" target="_blank">${title}</a>
</li>
`;
};  
const setUpFavoritesList = () => {
const favorites = DOCUMENTATION.filter((doc)=> doc.favorite);
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
    value = ""
}
const toggleOpenMenu = (click) => {
    menuContentElement.classList.toggle('menu-content--open')
  
}
toggleButton.addEventListener('click', toggleOpenMenu);
inputSearch.addEventListener('input', handleSearch);
setUpFavoritesList();
