// api/controller/getAllPokemons.ts
import { fetchData } from './utils';
import { createPokemonCard } from '../components/PokemonCard';
import { createButton } from '../components/Button';

const pageSize = 21; // Number of Pokemon per page
let currentPage = 1; // Current page

export async function getAllPokemons() {
  const pokemons: any[] = [];

  let nextUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  while (nextUrl) {
    const pokemonsResponse: any = await fetchData(nextUrl);
    pokemons.push(...pokemonsResponse.results);
    nextUrl = pokemonsResponse.next;
  }

  // Create pagination buttons
  const prevButton = createButton('prev-page', 'Précédent', () => {
    if (currentPage > 1) {
      currentPage--;
      displayPage(pokemons, currentPage, cardsContainer);
    }
  });
  const nextButton = createButton('next-page', 'Suivant', () => {
    currentPage++;
    displayPage(pokemons, currentPage, cardsContainer);
  });


  // Add buttons to the page
  const app = document.getElementById('app');
  const cardsContainer = document.createElement('div');
  if (app) {
    app.innerHTML = '';
    app.appendChild(prevButton);
    app.appendChild(nextButton);
    app.appendChild(cardsContainer);
  }

  // Display the first page
  displayPage(pokemons, currentPage, cardsContainer);
}

async function displayPage(pokemons: any[], page: number, container: HTMLElement) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pokemonsOnPage = pokemons.slice(startIndex, endIndex);

  container.innerHTML = '';
  for (const pokemon of pokemonsOnPage) {
    const pokemonDetail = await fetchData(pokemon.url);
    const card = createPokemonCard(pokemonDetail);
    if (card) {
      container.appendChild(card);
    }
  }
}