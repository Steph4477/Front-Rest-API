import './home.css';
import { getAllPokemons } from '../api/getAllPokemons';
import { displayPage } from '../components/displayPage';
import { displayFilters } from '../components/displayFilters.ts';
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
            <button id="filter"></button>
          </div>
        </div>
        <div>
          
          <div class="pokemonBloc"></div>
          <div class = "pokemonBlocFilter"></div>
          <div class = "pokemonBlocFilterColor"></div>
          <div id="pagination-bloc"></div>
        </div>
      </div>
    </div>
  `;

  document.addEventListener('DOMContentLoaded', async () => {
    // Sélection des éléments du DOM
    const filters = document.querySelector<HTMLButtonElement>('#filter');
    
    const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
    const cartDomFilter = document.querySelector<HTMLDivElement>('.pokemonBlocFilter');
    
    const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');
    const searchInput = document.querySelector<HTMLElement>('#search-input');

    if (filters) {
      displayFilters();
    } 

    if (searchInput) {
      searchPokemon(searchInput);
    }

    // Vérification des éléments du DOM
    if (cartDom && cartDomFilter && paginationDom) {

      cartDom.style.display = 'flex';
      cartDomFilter.style.display = 'none';

      // Récupération des Pokémon
      const pokemons = await getAllPokemons();
      // Affichage de la première page
      displayPage(1, cartDom, pokemons);

      // Création de la pagination
      const paginationContainer = createPagination(pokemons, 1, cartDom);
      paginationDom.appendChild(paginationContainer);
    }
  });

  // Retourne le contenu HTML de la page
  return content;
}
