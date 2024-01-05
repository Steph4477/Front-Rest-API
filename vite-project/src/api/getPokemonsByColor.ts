import { fetchData } from './utils.ts';
import { getPokemonById } from './getPokemonById.ts';
import { Pokemon } from './getPokemonById.ts';

export async function getColors(): Promise<string[]> {
    const url = "https://pokeapi.co/api/v2/pokemon-color/";
    const apiData = await fetchData(url);
    const colors = apiData.results.map((color: { name: string }) => color.name);
    return colors;
}

export async function getPokemonsByColor(color: string): Promise<Pokemon[]> {
    const url = `https://pokeapi.co/api/v2/pokemon-color/${color}`;
    const data = await fetchData(url);
    const pokemonList: Pokemon[] = [];
    for (const pokemon of data.pokemon_species) {
      const pokemonData = await getPokemonById(pokemon.url.split('/').slice(-2, -1)[0]);
      pokemonList.push(pokemonData);
    }
    return pokemonList;
}
