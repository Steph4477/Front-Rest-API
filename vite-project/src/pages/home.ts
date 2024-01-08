import './home.css';
import { getAllPokemons } from '../api/getAllPokemons';
import { displayPage } from '../components/displayPage';
import { displayColorsFilter } from '../components/displayColorsFilter.ts';
import { displayShapesFilter } from '../components/displayShapesFilter.ts';
import { searchPokemon } from '../components/searchPokemon.ts';
import { createPagination } from '../components/Pagination';

export function home() {
  // Contenu HTML de la page
  const content = `
    <div id="app">
      <h1>POKEDEX</h1>
      <div id="search-bar">
        <input id="search-input" type="text" placeholder="Rechercher un Pokémon">
      </div>
      <div id="body-bloc">
        <div id="filters">
          <div id="filters-bloc">
            <button id="color">Filtrer par couleur</button>
          </div>
          <div id="filters-bloc">
            <button id="shape">Filtrer par forme</button>
          </div>
        </div>
        <div>
          <div id="pagination-bloc"></div>
          <div class="pokemonBloc"></div>
          <div class="pokemonBlocFilterShape"></div>
        </div>
      </div>
    </div>
  `;

  document.addEventListener('DOMContentLoaded', async () => {
    // Sélection des éléments du DOM
    const colorElement = document.querySelector<HTMLButtonElement>('#color');
    const shapeElement = document.querySelector<HTMLButtonElement>('#shape');

    const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
    const cartDomShape = document.querySelector<HTMLDivElement>('.pokemonBlocFilterShape');

    const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');
    const searchInput = document.querySelector<HTMLElement>('#search-input');

    // Affichage des filtres de couleur et de forme
    if (colorElement) {
      displayColorsFilter(colorElement);
    }

    if (shapeElement) {
      displayShapesFilter(shapeElement);
    }

    if (searchInput) {
      searchPokemon(searchInput);
    }

    // Vérification des éléments du DOM
    if (cartDom && cartDomShape && paginationDom) {

      cartDom.style.display = 'flex';
      cartDomShape.style.display = 'none';
      
      // Récupération des Pokémon
      const pokemons = await getAllPokemons();
      // Affichage de la première page
      displayPage(1, cartDom, pokemons);
      //displayPage(1, cartDomShape, pokemons);

      // Création de la pagination
      const paginationContainer = createPagination(pokemons, 1, cartDom);
      paginationDom.appendChild(paginationContainer);
    }
  });

  // Retourne le contenu HTML de la page
  return content;
}
