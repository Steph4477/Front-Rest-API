// home.ts
import './home.css';
import { getAllPokemons } from '../api/getAllPokemons';
import { displayPage } from '../components/displayPage';
import { displayColorsFilter } from '../components/displayColorsFilter.ts';
import { displayShapesFilter } from '../components/displayShapesFilter.ts';
import { searchBar } from '../api/getPokemonByName';
import { createPokemonCard } from '../components/PokemonCard';
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
            <button id="color">Filtrer par couleur</button>
          </div>
          <div id="filters-bloc">
            <button id="shape">Filtrer par forme</button>
          </div>
        </div>
        <div id="poke-bloc">
          <div id="pagination-bloc"></div>
          <div class="pokemonBloc"></div>
        </div>
      </div>
    </div>
  `;

  document.addEventListener('DOMContentLoaded', async () => {
    // Sélection des éléments du DOM
    const colorElement = document.querySelector<HTMLButtonElement>('#color');
    const shapeElement = document.querySelector<HTMLButtonElement>('#shape');
    const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
    const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');
    const searchInput = document.querySelector<HTMLInputElement>('#search-input');

    // Affichage des filtres de couleur et de forme
    if (colorElement) {
      displayColorsFilter(colorElement);
    }

    if (shapeElement) {
      displayShapesFilter(shapeElement);
    }

    // Vérification des éléments du DOM
    if (cartDom && paginationDom) {
      // Récupération des Pokémon
      const pokemons = await getAllPokemons();

      // Affichage de la première page
      displayPage(1, cartDom, pokemons);

      // Création de la pagination
      const paginationContainer = createPagination(pokemons, 1, cartDom);
      paginationDom.appendChild(paginationContainer);

      // Gestion de la recherche
      if (searchInput) {
        searchInput.addEventListener('input', async (event) => {
          // Obtient le texte de recherche
          const searchText = (event.target as HTMLInputElement).value;

          if (searchText.length > 0) {
            // Recherche des Pokémon correspondants au texte de recherche
            const searchedPokemons = await searchBar(searchText);

            if (searchedPokemons) {
              // Vide le contenu du conteneur des Pokémon actuellement affichés
              cartDom.innerHTML = '';

              // Parcours les Pokémon trouvés et affiche leurs cartes
              searchedPokemons.forEach(async (pokemon: any) => {
                const card = await createPokemonCard(pokemon);
                if (card) {
                  // Ajoute la carte au conteneur des Pokémon
                  cartDom.appendChild(card);
                }
              });

              // Mise à jour de la pagination pour les résultats de la recherche
              const searchPaginationContainer = createPagination(searchedPokemons, 1, cartDom);
              paginationDom.innerHTML = ''; // Efface les boutons de pagination existants
              paginationDom.appendChild(searchPaginationContainer);
            }
          } else {
            // Si le champ de recherche est vide, affiche la première page des Pokémon
            displayPage(1, cartDom, pokemons);

            // Mise à jour de la pagination pour tous les Pokémon
            const allPaginationContainer = createPagination(pokemons, 1, cartDom);
            paginationDom.innerHTML = ''; // Efface les boutons de pagination existants
            paginationDom.appendChild(allPaginationContainer);
          }
        });
      }
    }
  });

  // Retourne le contenu HTML de la page
  return content;
}
