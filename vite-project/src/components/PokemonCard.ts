// components/PokemonCard.ts
import { fetchData } from '../api/utils';
import { getPokemonsColorById } from '../api/getPokemonsColorById';
import '../pages/home.css';

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

    // Obtenir la couleur du Pokémon
    const pokemonBorderColor = await getPokemonsColorById(pokemonDetail.id);
    const card = document.createElement('article');
    card.className = 'pokemon-card';


    // Définir la couleur de la bordure de la carte en fonction du Pokémon
    card.style.border = `5px solid ${pokemonBorderColor}`;
    
    const link = document.createElement('a');
    link.href = `http://localhost:5173/pokemon/${pokemonDetail.id}`;
    card.appendChild(link);

    const name = document.createElement('h2');
    name.textContent = capitalizeFirstLetter(pokemonDetail.name);
    link.appendChild(name);
   
    // Création du gif dans le dom
    const imageGiff = document.createElement('img');
    imageGiff.className = 'pokemon-gif';
    imageGiff.alt = 'Image animée du Pokémon ' + capitalizeFirstLetter(pokemonDetail.name);
    imageGiff.style.display = 'none';

    // Création du canvas du giff pour l'image statique du dom
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.className = 'pokemon-image';

    // Dessin de l'image statique sur le canvas une fois que le gif est chargé
    imageGiff.onload = () => {
        ctx?.drawImage(imageGiff, 0, 0);
        link.appendChild(canvas);
    };

    // Définition de la source du gif
    imageGiff.src = pokemonDetail.sprites.other.showdown.front_default;
    link.appendChild(imageGiff);

    // Affichage du gif lors du survol de la souris
    card.addEventListener('mouseover', () => {
        canvas.style.display = 'none';
        imageGiff.style.display = 'block';
    });

    // Affichage de l'image statique lorsque la souris ne survole pas
    card.addEventListener('mouseout', () => {
        canvas.style.display = 'block';
        imageGiff.style.display = 'none';
    });

    return card;
}
