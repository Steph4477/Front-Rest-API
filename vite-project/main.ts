//import './style.css'

import { getAPIContent } from './api/getAPIcontent.ts'
import { getPokemonById } from './api/getPokemonById.ts'
import { getPokemonsBySpecificColor } from './api/getPokemonsByFilters.ts'
//import { getPokemonsByColor } from './api/getPokemonsByFilters'
import { router } from './routes.ts'
/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
`
*/
getAPIContent();
console.log(getPokemonById(1));
console.log(getPokemonsBySpecificColor(1));
//getAllPokemons()
//getPokemonsByColor(document.querySelector<HTMLButtonElement>('#color')!)
router();
/*
// Sélectionne l'élément avec la classe 'filter'
const filterElement = document.querySelector<HTMLButtonElement>('h1');

// Vérifie si l'élément existe avant de lui assigner du contenu
if (filterElement) {
  // Utilise innerHTML pour ajouter du contenu à cet élément
  filterElement.innerHTML = "Nouveau contenu pour le filtre";
} else {
  console.error("L'élément avec la classe 'filter' n'a pas été trouvé.");
}*/