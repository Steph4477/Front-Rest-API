// components/PokemonCard.ts
import { fetchData } from '../api/utils';
import { getPokemonColorById } from '../api/getPokemonsByColor';
import { Pokemon } from '../api/getPokemonById.ts'

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function createPokemonCard(pokemon: Pokemon) {
    
    if (!pokemon) {
        console.error('Pokemon data is missing');
        return;
    }

    const pokemonDetail = await fetchData(pokemon.url);

    if (!pokemonDetail) {
        console.error(`Pokemon data is missing for ${pokemon.name}`);
        return;
    }

    // Obtenir la couleur du Pokémon
    const pokemonBorderColor = await getPokemonColorById(pokemonDetail.id);


    // Créer une constante pour le filtre de luminosité
    const brightnessFilter = 'brightness(150%)';

    const card = document.createElement('article');
    card.className = 'pokemon-card';

    // Utiliser un filtre pour rendre la couleur de fond plus claire
    card.style.background = `${pokemonBorderColor} ${brightnessFilter}`;

    // Définir la couleur de la bordure de la carte en fonction du Pokémon
    card.style.border = `5px solid ${pokemonBorderColor}`;

    // lien du pokemon
    const link = document.createElement('a');
    link.href = `http://localhost:5173/pokemon/${pokemonDetail.id}`;
    card.appendChild(link);

    const name = document.createElement('h2');
    name.textContent = capitalizeFirstLetter(pokemonDetail.name);
    link.appendChild(name);

    const image = document.createElement('img');
    image.src = pokemonDetail.sprites.front_default;
    image.alt = 'Image du Pokémon ' + capitalizeFirstLetter(pokemonDetail.name);
    
    link.appendChild(image);

    const imageGiff = document.createElement('img');
    imageGiff.src = pokemonDetail.sprites.other.showdown.front_default;
    imageGiff.style.display = 'none'; // Cacher l'image Gif par défaut
    imageGiff.style.marginLeft = '20px'; // Fix the property name and syntax
    link.appendChild(imageGiff);

    card.addEventListener('mouseover', () => {
        image.style.display = 'none'; // Cacher l'image normale
        imageGiff.style.display = 'block'; // Afficher l'image Gif
    });

    card.addEventListener('mouseout', () => {
        image.style.display = 'block'; // Afficher l'image normale
        imageGiff.style.display = 'none'; // Cacher l'image Gif
    });


    return card;
}
