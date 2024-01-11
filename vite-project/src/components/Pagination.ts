//components/Pagination.ts
import { createButton } from './Button';
import { displayPage } from './displayPage';

export function createPagination(pokemons: any[], currentPage: number, cardsContainer: HTMLElement): HTMLElement {
  const totalPages = Math.ceil(pokemons.length / 30);
  const page = { value: currentPage }; // Enveloppez currentPage dans un objet

  // Crée les boutons de pagination
  const prevButton = createButton('prev-page', 'Précédent', () => {
    if (page.value > 1) {
      page.value--;
      displayPage(page.value, cardsContainer, pokemons);
      updateActiveButtonStyle(page.value);
    }
  });

  const nextButton = createButton('next-page', 'Suivant', () => {
    if (page.value < totalPages) {
      page.value++;
      displayPage(page.value, cardsContainer, pokemons);
      updateActiveButtonStyle(page.value);
    }
  });

  // Crée le conteneur de pagination
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination-container');

  // Ajoute les boutons au conteneur
  paginationContainer.appendChild(prevButton);

  // Crée un bouton pour chaque page
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = createButton(`page-${i}`, `${i}`, createPageButtonClickHandler(i));
    pageButton.classList.add('pagination-button'); // Ajoute la classe .pagination-button
    paginationContainer.appendChild(pageButton);
  }

  paginationContainer.appendChild(nextButton);

  // Set the initial active button style
  updateActiveButtonStyle(page.value);

  return paginationContainer;

  function createPageButtonClickHandler(pageNumber: number) {
    return () => {
      page.value = pageNumber;
      displayPage(page.value, cardsContainer, pokemons);
      updateActiveButtonStyle(page.value);
    };
  }

  function updateActiveButtonStyle(currentPage: number) {
    console.log("Current Page:", currentPage);
  
    // Sélectionnez tous les boutons de pagination
    const paginationButtons = document.querySelectorAll('.pagination-button');
  
    // Parcourez tous les boutons de pagination
    paginationButtons.forEach((button, index) => {
      const pageNumber = parseInt(button.textContent || '0');
      console.log(`Button ${index + 1} Page Number: ${pageNumber}`);
  
      // Vérifiez si le numéro de page correspond à la page actuelle
      if (pageNumber === currentPage) {
        // Ajoutez la classe "active" si c'est le cas
        button.classList.add('active');
      } else {
        // Sinon, enlevez la classe "active"
        button.classList.remove('active');
      }
    });
  }
}
