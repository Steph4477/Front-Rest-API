import { fetchData } from './utils';

export interface Pokemon {
  name: string;
  type: string;
  attack: number;
  defense: number;
  description: string;
  image: string;
  imageArtwork: string;
  url: string;
}

export interface Pokemon {
  name: string;
  type: string;
  attack: number;
  defense: number;
  description: string;
  image: string;
  imageArtwork: string; // Add the imageArtwork property
  url: string;
}

export async function getPokemonById(id: number): Promise<Pokemon> {
  const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const pokemon: Pokemon = {
    name: data.name,
    type: data.types[0].type.name,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    description: data.species.name,
    image: data.sprites.front_default,
    imageArtwork: data.sprites.other['official-artwork'].front_default, // Fix the property name
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  };
  return pokemon;
}