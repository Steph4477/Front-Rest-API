import { displayColorsFilters } from '../components/displayColorsFilter';
import { getAllPokemons } from '../api/getAllPokemons';
export function home() {
  const content = `
  <div>
      <div style="display: flex;">
        <div style="width: 30%;">
          <button id="color">Filtrer par couleur</button>
        </div>
        <div style="width: 70%; display: flex; flex-wrap: wrap; justify-content: space-between;">
          <div class="pokemonBloc">
          </div>
        </div>
      </div>
    </div>
  `;

  // Attente du chargement du DOM
  document.addEventListener('DOMContentLoaded', () => {
    const colorElement = document.querySelector<HTMLButtonElement>('#color');
    const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');

    if (colorElement) {
      displayColorsFilters(colorElement);
    }
    if (cartDom) {
      getAllPokemons(); // Pass an array of HTMLButtonElement
    }
    
  });

  return content;
}