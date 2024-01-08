//components/Pagination.ts
import { createButton } from './Button';
import { displayPage } from './displayPage';

export function createPagination(pokemons: any[], currentPage: number, cardsContainer: HTMLElement): HTMLElement {
  // Crée les boutons de pagination
  const prevButton = createButton('prev-page', 'Précédent', () => {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage, cardsContainer, pokemons);
    }
  });

  const nextButton = createButton('next-page', 'Suivant', () => {
    currentPage++;
    displayPage(currentPage, cardsContainer, pokemons);
  });

  // Crée le conteneur de pagination
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination-container');

  // Ajoute les boutons au conteneur
  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(nextButton);

  return paginationContainer;
}
