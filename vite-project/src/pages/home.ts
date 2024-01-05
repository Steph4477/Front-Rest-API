import './home.css';

import { getAPIContent } from '../api/getAPIcontent.ts';

//import { getAllPokemons } from '../api/getAllPokemons.ts';
//import { getPokemonsByColor } from '../api/getPokemonsByFilters';
import { displayColorsFilters } from '../components/displayColorsFilter.ts'

export function homeContent(): string {
  const content = `
    <div>
      <h1>Test filtres couleurs</h1>
      <div id="body-bloc">
        <div id="filters-bloc">
          <div class="filter">
            <p id="color"></p>
          </div>
          <div class="filter">
            <p>filter 2</p>
          </div>
          <div class="filter">
            <p>filter 3</p>
          </div>
        </div>
        <div id="poke-bloc">
          <p class="pokemonBloc"></p>
        </div>
      </div>
    </div>
  `;
  return content;
}

  
document.addEventListener('DOMContentLoaded', () => {
  const colorElement = document.querySelector<HTMLButtonElement>('#color');
  //const cartDom = document.getElementById('poke-bloc');

  if (colorElement) {
    // Une fois que l'élément est présent dans le DOM, appelez getPokemonsByColor
    displayColorsFilters(colorElement);
  } else {
    console.error("L'élément avec l'ID 'color' n'a pas été trouvé.");
  }
/*
  if (cartDom) {
    async function fetchDataAndRender() {
      try {
        await getAllPokemons();
        // Exécutez getAPIContent() ici si nécessaire
        // getAPIContent();
      } catch (error) {
        console.error('Error fetching Pokemons list', error);
      }
    }
    fetchDataAndRender();
  } else {
    console.error("L'élément avec l'ID 'poke-bloc' n'a pas été trouvé.");
  }*/
});
  
  getAPIContent();
  //getAllPokemons();
