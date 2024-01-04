import { getPokemonByColor, getPokemonById } from './api/getPokemonByColor';

const appElement = document.getElementById('app');

if (appElement) {
  const ulElement = document.createElement('ul');
  appElement.appendChild(ulElement);

  async function displayPokemon(color: string) {
    const pokemonList = await getPokemonByColor(color);

    pokemonList.forEach(pokemon => {
      const liElement = document.createElement('li');
      liElement.textContent = `Nom: ${pokemon.name}, Type: ${pokemon.type}, Attaque: ${pokemon.attack}, Défense: ${pokemon.defense}, Description: ${pokemon.description}`;

      const imgElement = document.createElement('img');
      imgElement.src = pokemon.image;
      liElement.appendChild(imgElement);

      ulElement.appendChild(liElement);
    });
  }

  displayPokemon('black');
}
