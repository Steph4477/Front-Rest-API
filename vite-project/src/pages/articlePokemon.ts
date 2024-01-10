// pages/articlePokemon.ts
// Importe la fonction displayPokemon depuis le fichier spécifié
import { displayPokemon } from '../components/displayPokemon.ts';

// Définit une fonction asynchrone articlePokemon qui prend un argument pokemonId sous forme de chaîne de caractères
export async function articlePokemon(pokemonId: string) {

  // Contenu HTML de la page
  const content = `
    <h1>À propos d'un Pokémon</h1>
    <div id="fiche-poke">
      <p>Fiche Pokémon</p>
    </div>
  `;

  // Attend que le DOM soit complètement chargé avant d'exécuter le code suivant
  document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne l'élément du DOM avec l'ID 'fiche-poke' et spécifie son type comme HTMLElement
    const containerElement = document.querySelector<HTMLElement>('#fiche-poke');
    
    // Vérifie si containerElement est défini (non null et non undefined)
    if (containerElement) {
      // Appelle la fonction displayPokemon avec pokemonId converti en nombre et containerElement comme arguments
      displayPokemon(Number(pokemonId), containerElement);
    } else {
      // Si containerElement n'est pas défini, affiche un message d'erreur dans la console
      console.error("L'élément n'a pas été trouvé.");
    }
  });

  // Retourne le contenu HTML de la page
  return content;
}
