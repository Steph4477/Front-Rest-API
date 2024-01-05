import { displayPokemon } from './displayPokemon';
import { Pagination } from '../components/Pagination';

const pageSize = 30; // Number of Pokemon per page
let currentPage = 1; // Current page

export function displayListPokemons(pokemons: any[]) {
  const cardsContainer = document.createElement('div');

  // Create pagination
  const pagination = Pagination(() => {
    if (currentPage > 1) {
      currentPage--;
      displayPage(pokemons, currentPage, cardsContainer);
    }
  }, () => {
    currentPage++;
    displayPage(pokemons, currentPage, cardsContainer);
  });

  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '';
    app.appendChild(pagination);
    app.appendChild(cardsContainer);
  }

  // Display the first page
  displayPage(pokemons, currentPage, cardsContainer);
}

function displayPage(pokemons: any[], page: number, container: HTMLElement) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pokemonsOnPage = pokemons.slice(startIndex, endIndex);

  container.innerHTML = '';
  for (const pokemon of pokemonsOnPage) {
    displayPokemon(pokemon, container);
  }
}