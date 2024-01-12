import { searchBar } from '../api/getPokemonByName';
import { getAllPokemons } from '../api/getAllPokemons';
import { createPokemonCard } from './PokemonCard';

/* Ce bloc de code gère la recherche de Pokemons par nom */

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

          paginationDom.style.display ='none';

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
          }
        });
      }
  } catch (error) {
    console.error(error);
  }
}