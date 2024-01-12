// getAllPokemons.ts
import { fetchData } from './utils.ts';
import { LRUCacheOnMap } from './cache';

const cache = new LRUCacheOnMap(100); // Capacité de 100 éléments

export async function getAllPokemons() {
  let pokemons = cache.get('pokemons');

  if (!pokemons) {
    let nextUrl: string = 'https://pokeapi.co/api/v2/pokemon/?limit=20000';
    pokemons = [];

    while (nextUrl) {
      const pokemonsResponse: any = await fetchData(nextUrl);
      pokemons.push(...pokemonsResponse.results);
      nextUrl = pokemonsResponse.next;
    }

    cache.set('pokemons', pokemons);
  }

  return pokemons;
}