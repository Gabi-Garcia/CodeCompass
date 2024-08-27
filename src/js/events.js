import { normalizeText, getFavoriteTemplate } from './utils.js';
import { DOCUMENTATION, searchBlockElement, inputSearch, toggleButton, menuContentElement } from '../../constants.js';

export const handleSearch = (e) => {
    const { value } = e.target;
    const normalizeValue = normalizeText(value);
    const filteredDocumentation = DOCUMENTATION.filter((doc) => {
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
    if (previousUl) {
        previousUl.remove();
    }

    if (value === "") {
        return;
    }

    searchBlockElement.append(searchUl);
};

export const toggleOpenMenu = () => {
    menuContentElement.classList.toggle('menu-content--open');
};

// Añadir los eventos
export const setEventListeners = () => {
    toggleButton.addEventListener('click', toggleOpenMenu);
    inputSearch.addEventListener('input', handleSearch);
};
