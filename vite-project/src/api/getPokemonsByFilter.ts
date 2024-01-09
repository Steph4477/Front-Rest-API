import { fetchData } from './utils.ts';
import { getPokemonById } from './getPokemonById.ts';
import { Pokemon } from './getPokemonById.ts';

export async function getPokemonsByFilter(filter: string, filterElement: string): Promise<Pokemon[]> {

    const url = `https://pokeapi.co/api/v2/pokemon-${filter}/${filterElement}`;
    const data = await fetchData(url);

    const pokemonList: Pokemon[] = [];

    for (const pokemon of data.pokemon_species) {
      const pokemonData = await getPokemonById(pokemon.url.split('/').slice(-2, -1)[0]);
      pokemonList.push(pokemonData);
    }

    return pokemonList;
}