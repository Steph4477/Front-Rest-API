// api/controller/getAllPokemons.ts
import { fetchData } from '../utils';
import { createPokemonCard } from '../../components/PokemonCard';

export async function getAllPokemons() {
  let nextUrl = 'https://pokeapi.co/api/v2/pokemon';
  const pokemons = [];

  while (nextUrl) {
    const pokemonsResponse = await fetchData(nextUrl);
    pokemons.push(...pokemonsResponse.results);
    nextUrl = pokemonsResponse.next;
  }

  const cartDom = document.getElementById('app');
  const divContainer = document.createElement('div');
  if (cartDom) {
    cartDom.appendChild(divContainer);
  }

  for (const pokemon of pokemons) {
    let pokemonDetail;
    let speciesData;
    try {
      pokemonDetail = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    } catch (error) {
      console.error(`Error fetching pokemon detail for ${pokemon.name}`, error);
      continue; // Skip this Pokemon and move to the next one
    }
    try {
      speciesData = await fetchData(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`);
    } catch (error) {
      console.error(`Error fetching species data for ${pokemon.name}`, error);
      continue; // Skip this Pokemon and move to the next one
    }

    pokemonDetail.description = speciesData.flavor_text_entries[0].flavor_text;

    const card = createPokemonCard(pokemonDetail);
    divContainer.appendChild(card);
    console.log(`Nombre total de Pokémon récupérés : ${pokemons.length}`);
  }
}