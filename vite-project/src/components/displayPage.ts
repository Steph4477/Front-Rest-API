
// components/displayPage.ts 

import { Pokemon } from '../api/getPokemonById.ts';
import { createPokemonCard } from './PokemonCard';

// Nombre de Pokémon affichés par page
const pageSize = 30;

/**
 * Affiche une page spécifiée de cartes Pokémon dans le conteneur fourni.
 * @param {number} page - Le numéro de la page à afficher.
 * @param {HTMLElement} container - L'élément HTML dans lequel afficher les cartes Pokémon.
 * @param {any[]} pokemons - La liste complète des Pokémon à paginer.
 */
export async function displayPage(page: number, container: HTMLElement, pokemons: Pokemon[]) {
    // Calcule l'indice de départ et l'indice de fin pour la pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Sélectionne les Pokémon pour la page actuelle
    const pokemonsOnPage = pokemons.slice(startIndex, endIndex);

    // Nettoie le contenu existant du conteneur
    container.innerHTML = '';


    const cards = pokemonsOnPage.map((pokemon) => createPokemonCard(pokemon));
    console.log(cards);

    // Boucle à travers les Pokémon de la page et crée une carte pour chacun
    for (const pokemon of pokemonsOnPage) {
        try {
            // // Crée une carte Pokémon en attendant la résolution de la promesse
            // const card = await createPokemonCard(pokemon);

            // // Vérifie si la carte a été créée avec succès et l'ajoute au conteneur
            // if (card) {
            //     container.appendChild(card);
            // }
            createPokemonCard(pokemon).then((card) => {
                // Vérifie si la carte a été créée avec succès et l'ajoute au conteneur
                if (card) {
                    container.appendChild(card);
                }
            });
        } catch (error) {
            // Gère les erreurs lors de la création de la carte pour un Pokémon spécifique
            console.error(`Failed to create card for pokemon: ${pokemon.name}`, error);
        }
    }
}
