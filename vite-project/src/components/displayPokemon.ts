import { getPokemonById, Pokemon } from '../api/getPokemonById.ts';

export async function displayPokemon(id: number, containerElement: HTMLElement) {
  try {
    const pokemon: Pokemon = await getPokemonById(id);

    const ulElement = document.createElement('ul');

    const liElement = document.createElement('li');
    liElement.textContent = `Nom: ${pokemon.name}, Type: ${pokemon.type}, Attaque: ${pokemon.attack}, Défense: ${pokemon.defense}, Description: ${pokemon.description}`;

    const imgElement = document.createElement('img');
    imgElement.src = pokemon.image;
    liElement.appendChild(imgElement);

    ulElement.appendChild(liElement);

    // Ajout de ulElement (liste) à containerElement (#fiche-poke)
    containerElement.appendChild(ulElement);
  } catch (error) {
    console.error(error);
    // Gérer l'erreur d'affichage du Pokémon
  }
}