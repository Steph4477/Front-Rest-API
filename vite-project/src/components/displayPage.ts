// displayPage.ts
import { createPokemonCard } from './PokemonCard';

const pageSize = 16;

export async function displayPage(page: number, container: HTMLElement, pokemons: any[]) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pokemonsOnPage = pokemons.slice(startIndex, endIndex);

    container.innerHTML = '';
    for (const pokemon of pokemonsOnPage) {
        try {
            const card = await createPokemonCard(pokemon); // Await the promise
            if (card) {
                container.appendChild(card);
            }
        } catch (error) {
            console.error(`Failed to create card for pokemon: ${pokemon.name}`, error);
        }
    }
}