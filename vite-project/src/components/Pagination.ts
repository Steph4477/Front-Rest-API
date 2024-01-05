import { createButton } from './Button';
import { displayPage } from './displayPage';

export function createPagination(pokemons: any[], currentPage: number, cardsContainer: HTMLElement) {
  // Create pagination buttons
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

  return [prevButton, nextButton];
}