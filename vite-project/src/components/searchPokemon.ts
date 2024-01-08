import { searchBar } from '../api/getPokemonByName';
import { getAllPokemons } from '../api/getAllPokemons';
import { createPokemonCard } from './PokemonCard';
import { createPagination } from './Pagination';

export async function searchPokemon(element: HTMLElement) {

  try {
      const inputText = document.createElement('p');
      inputText.innerHTML = "Rechercher un pokémon";
      element.appendChild(inputText);

      const searchInput = document.querySelector<HTMLInputElement>('#search-input');
      const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
      const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');

      if (searchInput && cartDom && paginationDom) {
        searchInput.addEventListener('input', async (event) => {
          const searchText = (event.target as HTMLInputElement).value.trim();

          let searchedPokemons;

          if (searchText.length > 0) {
            searchedPokemons = await searchBar(searchText);
          } else {
            searchedPokemons = await getAllPokemons();
          }

          if (searchedPokemons) {
            cartDom.innerHTML = '';

            for (const pokemon of searchedPokemons) {
              const card = await createPokemonCard(pokemon);
              if (card) {
                cartDom.appendChild(card);
              }
            }

            const searchPaginationContainer = createPagination(searchedPokemons, 1, cartDom);
            paginationDom.innerHTML = '';
            paginationDom.appendChild(searchPaginationContainer);
          }
        });
      }
  } catch (error) {
    console.error(error);
  }
}