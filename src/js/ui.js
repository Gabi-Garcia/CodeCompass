import { VIDEOS, DOCUMENTATION, favoritesListElement, searchBlockElement, menuContentElement } from '../../constants.js';
import { getFavoriteTemplate } from './utils.js';

export const getFavouritesVideos = () => {
    return `
    <h2>Tutoriales Recomendados</h2>
    <p>¡Estás a punto de sumergirte en un océano de conocimiento!
    Aquí tienes una selección cuidadosa de los tutoriales más útiles y educativos disponibles en la web. 
    Estos tutoriales abarcan una variedad de lenguajes de programación, tecnologías y temas relacionados, 
    para que puedas aprender y mejorar tus habilidades de programación de manera efectiva.
    </p>
    <ul id="videos-list" class="lista"></ul>
    `;
};

export const setUpFavoritesList = () => {
    const favorites = DOCUMENTATION.filter((doc) => doc.isFavorite); // Ajusta el filtro según tus necesidades
    const favoritesUl = document.createElement('ul');
    favorites.forEach((favorite) => {
        const favoriteTemplate = getFavoriteTemplate(favorite.title, favorite.url);
        favoritesUl.innerHTML += favoriteTemplate;
    });
    favoritesListElement.append(favoritesUl);
};

export const renderVideosList = () => {
    const videosList = document.getElementById('videos-list');
    VIDEOS.forEach((video) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = video.url;
        a.textContent = video.title;
        a.target = "_blank";
        li.appendChild(a);
        videosList.appendChild(li);
    });
};
