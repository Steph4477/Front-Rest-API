// PokemonCard.ts
import { fetchData } from '../api/utils';

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function createPokemonCard(pokemon: any) {
    if (!pokemon) {
        console.error('Pokemon data is missing');
        return;
    }

    const pokemonDetail = await fetchData(pokemon.url);
    if (!pokemonDetail) {
        console.error(`Pokemon data is missing for ${pokemon.name}`);
        return;
    }

    const card = document.createElement('article');
    card.className = 'pokemon-card';

    const link = document.createElement('a');
    link.href = `http://localhost:5173/pokemon/${pokemonDetail.id}`;
    card.appendChild(link);

    const name = document.createElement('h2');
    name.textContent = capitalizeFirstLetter(pokemonDetail.name);
    link.appendChild(name);

    /*const id = document.createElement('span');
    id.textContent = `ID: ${pokemonDetail.id}`;
    link.appendChild(id);*/

    const image = document.createElement('img');
    image.src = pokemonDetail.sprites.front_default;
    image.alt = 'Image du Pokémon ' + capitalizeFirstLetter(pokemonDetail.name);
    link.appendChild(image);

    // ... Reste du code ...

    return card;
}