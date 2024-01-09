// getAllPokemons.ts
import { fetchData } from './utils.ts';

export async function getAllPokemons() {
  let nextUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=20000';
  const pokemons: any[] = [];

  while (nextUrl) {
    console.log(`Fetching ${nextUrl}`);
    const pokemonsResponse: any = await fetchData(nextUrl);
    pokemons.push(...pokemonsResponse.results);
    nextUrl = pokemonsResponse.next;
  }

  return pokemons;
}