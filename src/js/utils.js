export const normalizeText = (text) => text.trim().toLowerCase();

export const getFavoriteTemplate = (title, url) => {
    return `
    <li class="favorite-element">
      <a href="${url}" target="_blank">${title}</a>
    </li>
    `;
};
