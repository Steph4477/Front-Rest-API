import { getPokemonById } from './api/getPokemonById';

const appElement = document.getElementById('app');

if (appElement) {
  const ulElement = document.createElement('ul');
  appElement.appendChild(ulElement);

  async function displayPokemon(id: number) {
    const pokemon = await getPokemonById(id);

    const liElement = document.createElement('li');
    liElement.textContent = `Nom: ${pokemon.name}, Type: ${pokemon.type}, Attaque: ${pokemon.attack}, Défense: ${pokemon.defense}, Description: ${pokemon.description}`;

    const imgElement = document.createElement('img');
    imgElement.src = pokemon.image;
    liElement.appendChild(imgElement);

    ulElement.appendChild(liElement);
  }

  displayPokemon(2);
}