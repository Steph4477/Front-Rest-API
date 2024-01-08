import { getAPIContent } from './api/getAPIcontent.ts'
import { getPokemonsByShape} from './api/getPokemonsByShape.ts'
import { getAllPokemons} from './api/getAllPokemons.ts'
import { router } from './routes.ts'

getAPIContent();
router();
console.log("getAllPokemons", getAllPokemons());

const shape: string = "ball";

console.log("getPokemonsByShape", getPokemonsByShape(shape));

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