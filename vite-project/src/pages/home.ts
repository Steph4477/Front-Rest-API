// home.ts
import { getAllPokemons } from '../api/getAllPokemons';
import { displayPage } from '../components/displayPage';
import { displayColorsFilters } from '../components/displayColorsFilter';
import { createPagination } from '../components/Pagination';

export function home() {
  const content = `
    <div id="app">
      <div id="body-bloc">
        <div id="filters-bloc">
          <button id="color">Filtrer par couleur</button>
        </div>
        <div id="poke-bloc">
          <div id="pagination-bloc"></div>
          <div class="pokemonBloc"></div>
        </div>
      </div>
    </div>
  `;

  // Wait for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', async () => {
    const colorElement = document.querySelector<HTMLButtonElement>('#color');
    const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
    const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');

    if (colorElement) {
      displayColorsFilters(colorElement);
    }

    if (cartDom && paginationDom) {
      try {
        const pokemons = await getAllPokemons();
        let currentPage = 1;

        const [prevButton, nextButton] = createPagination(pokemons, currentPage, cartDom);
        paginationDom.appendChild(prevButton);
        paginationDom.appendChild(nextButton);

        displayPage(currentPage, cartDom, pokemons);
      } catch (error) {
        console.error('Error fetching or displaying Pokemon data:', error);
      }
    }
  });

  return content;
}