
// components/displayPage.ts 

import { Pokemon } from '../api/getPokemonById.ts';
import { createPokemonCard } from './PokemonCard';

// Nombre de Pokémon affichés par page
const pageSize = 30;

export async function displayPage(page: number, container: HTMLElement, pokemons: Pokemon[]) {
    // Calcule l'indice de départ et l'indice de fin pour la pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Sélectionne les Pokémon pour la page actuelle
    const pokemonsOnPage = pokemons.slice(startIndex, endIndex);

    // Nettoie le contenu existant du conteneur
    container.innerHTML = '';

    // Boucle à travers les Pokémon de la page et crée une carte pour chacun
    
        try {
            const cards = await Promise.all(pokemonsOnPage.map((pokemon) => createPokemonCard(pokemon)));
            cards.forEach((card) => {
                if (card) {
                    container.appendChild(card);
                }
            });
        } catch (error) {
            // Gère les erreurs lors de la création de la carte pour un Pokémon spécifique
            console.error(`Failed to create card for pokemon: ${pokemons}`, error);
        }
    }

        
    

