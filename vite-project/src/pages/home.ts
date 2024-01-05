import './home.css';
import { getAllPokemons } from '../api/getAllPokemons';
import { displayPage } from '../components/displayPage';
import { displayColorsFilter } from '../components/displayColorsFilter.ts';
import { displayShapesFilter } from '../components/displayShapesFilter.ts';
import { createPagination } from '../components/Pagination';

export function home() {
  const content = `
    <div id="app">
    <h1>POKEDEX</h1>
      <div id="body-bloc">
        <div id="filters">
          <div id="filters-bloc">
            <button id="color">Filtrer par couleur</button>
          </div>
          <div id="filters-bloc">
            <button id="shape">Filtrer par couleur</button>
          </div>
        </div>
        <div id="poke-bloc">
          <div id="pagination-bloc"></div>
          <div class="pokemonBloc"></div>
        </div>
      </div>
    </div>
  `;

  document.addEventListener('DOMContentLoaded', async () => {
    const colorElement = document.querySelector<HTMLButtonElement>('#color');
    const shapeElement = document.querySelector<HTMLButtonElement>('#shape');
    const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
    const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');

    if (colorElement) {
      displayColorsFilter(colorElement);
    }

    if (shapeElement) {
      displayShapesFilter(shapeElement);
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