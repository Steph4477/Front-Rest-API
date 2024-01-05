import { displayPokemon } from '../components/displayPokemon.ts'

export async function articlePokemon(pokemonId: string) {

  const content = `
    <h1>À propos d'un pokemon</h1>
    <div id="fiche-poke">
      <p>Fiche pokemon</p>
    </div>
  `;

  document.addEventListener('DOMContentLoaded', () => {
    const containerElement = document.querySelector<HTMLElement>('#fiche-poke');
  
    if (containerElement) {
      displayPokemon(parseInt(pokemonId), containerElement);
    } else {
      console.error("L'élément n'a pas été trouvé.");
    }
});

   return content;
}