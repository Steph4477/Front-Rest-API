///components/displayPokemon.ts
import '../pages/home.css';
import { getPokemonById, Pokemon } from '../api/getPokemonById.ts';

export async function displayPokemon(id: number, containerElement: HTMLElement) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemon: Pokemon = await getPokemonById(id);

    // Création de l'élément div pour la carte Pokémon
    const divElement = document.createElement('div');
    divElement.className = 'pokemon-card';

    // Création de l'élément d'image et ajout à divElement
    const imgElement = document.createElement('img');
    imgElement.src = pokemon.imageArtwork;
    imgElement.alt = pokemon.name; // Ajout d'un attribut alt à l'image
    divElement.appendChild(imgElement);

    // Création de la liste (ulElement) pour les détails du Pokémon
    const ulElement = document.createElement('ul');

    // Assigner data.flavor_text à pokemon.description sans traduction
    const originalDescription = data.flavor_text_entries[0].flavor_text;
    pokemon.description = originalDescription;

    console.log(pokemon.description);

    // Création de l'élément li pour le nom et ajout à ulElement
    const nameElement = document.createElement('li');
    nameElement.textContent = `Nom: ${pokemon.name}`;
    ulElement.appendChild(nameElement);

    // Création d'autres éléments li (type, attaque, défense, description) et ajout à ulElement
    const typeElement = document.createElement('li');
    typeElement.textContent = `Type: ${pokemon.type}`;
    ulElement.appendChild(typeElement);

    const attackElement = document.createElement('li');
    attackElement.textContent = `Attaque: ${pokemon.attack}`;

    // création de la jauge de progression pour l'attaque
    const attackProgress = document.createElement('progress');
    attackProgress.className = 'progressAttack';
    attackProgress.value = Number(pokemon.attack);
    attackProgress.max = 255;
    attackElement.appendChild(attackProgress);
    ulElement.appendChild(attackElement);

    const defenseElement = document.createElement('li');
    defenseElement.textContent = `Défense: ${pokemon.defense}`;

    //creation de la jauge de progression pour la défense
    const defenseProgress = document.createElement('progress');
    defenseProgress.className = 'progressDefense';
    defenseProgress.value = Number(pokemon.defense);
    defenseProgress.max = 255;
    defenseElement.appendChild(defenseProgress);

    ulElement.appendChild(defenseElement);

    const descriptionElement = document.createElement('li');
    descriptionElement.textContent = `Description: ${pokemon.description}`;
    ulElement.appendChild(descriptionElement);

    // Ajout de ulElement à divElement
    divElement.appendChild(ulElement);

    // Ajout de divElement à containerElement (#fiche-poke)
    containerElement.appendChild(divElement);
  } catch (error) {
    console.error(error);
    // Gérer l'erreur d'affichage du Pokémon
  }
}
