import { homeContent } from './pages/home.ts';
import { articlePokemon } from './pages/articlePokemon.ts';

export async function router() {
  const path = window.location.pathname;
  const appDiv = document.querySelector<HTMLDivElement>('#app');

  if (appDiv) {
    if (path === '/home') {
      appDiv.innerHTML = homeContent();
    } else if (path.startsWith('/pokemon/')) {
      const pokemonId = path.split('/').pop();
      if (pokemonId) {
        try {
          // Appel de la fonction articlePokemon pour obtenir le contenu HTML
          const pokemonContent = await articlePokemon(pokemonId);

          // Remplacement du contenu de l'élément '#app' avec les détails du Pokémon
          appDiv.innerHTML = pokemonContent;
        } catch (error) {
          appDiv.innerHTML = `<h1>Une erreur s'est produite lors du chargement du contenu du Pokémon.</h1>`;
          console.error(error); // Gérer l'erreur si la promesse est rejetée
        }
      } else {
        appDiv.innerHTML = `<h1>Page non trouvée</h1>`;
      }
    } else {
      appDiv.innerHTML = `
        <h1>Page non trouvée</h1>
        <!-- Élément pour la page d'erreur 404 -->
      `;
    }
  } else {
    console.error("L'élément avec l'ID 'app' n'a pas été trouvé.");
  }
}