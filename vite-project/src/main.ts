import { getAPIContent } from './api/getAPIcontent.ts'
//import { getPokemonsByColor } from './api/getPokemonsByFilters'
import { router } from './routes.ts'

getAPIContent();
router();

// pages/main.ts
/*import { getAllPokemons } from './api/getAllPokemons';

const cartDom = document.getElementById('app');

if (cartDom) {
  async function fetchDataAndRender() {
    try {
      await getAllPokemons();
    } catch (error) {
      console.error('Error fetching Pokemons list', error);
    }
  }

  fetchDataAndRender();
}*/