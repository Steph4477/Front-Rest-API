//components/Pagination.ts
import { createButton } from './Button';
import { displayPage } from './displayPage';

export function createPagination(pokemons: any[], currentPage: number, cardsContainer: HTMLElement): HTMLElement {
  const totalPages = Math.ceil(pokemons.length / 30);
  // Crée les boutons de pagination
  const prevButton = createButton('prev-page', 'Précédent', () => {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage, cardsContainer, pokemons);
    }
  });

  const nextButton = createButton('next-page', 'Suivant', () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage, cardsContainer, pokemons);
    }
  });


  // Crée le conteneur de pagination
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination-container');

  // Ajoute les boutons au conteneur
  paginationContainer.appendChild(prevButton);

  // Crée un bouton pour chaque page
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = createButton(`page-${i}`, `${i}`, () => {
      currentPage = i;
      displayPage(currentPage, cardsContainer, pokemons);
      // Supprime la classe 'active' de tous les boutons
      document.querySelectorAll('.pagination-button').forEach(button => {
        button.classList.remove('active');
      });

      // Ajoute la classe 'active' au bouton cliqué
      pageButton.classList.add('active');

    });
    paginationContainer.appendChild(pageButton);
  }

  paginationContainer.appendChild(nextButton);

  return paginationContainer;
}