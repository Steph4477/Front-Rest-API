import { fetchData } from './utils.ts';
import { getPokemonById } from './getPokemonById.ts';
import { Pokemon } from './getPokemonById.ts';

export async function getShapes(): Promise<string[]> {
    const url = "https://pokeapi.co/api/v2/pokemon-shape/";
    const apiData = await fetchData(url);

    const shapes = apiData.results.map((shape: { name: string }) => shape.name);

    let shapesArray: string[] = [];

    shapes.forEach((shape: string) => {
        shapesArray.push(shape);
    })

    return shapesArray;
}

export async function getPokemonsByShape(shape: string): Promise<Pokemon[]> {
    const url = `https://pokeapi.co/api/v2/pokemon-shape/${shape}`;
    const data = await fetchData(url);

    const pokemonList: Pokemon[] = [];

    for (const pokemon of data.pokemon_species) {
      const pokemonData = await getPokemonById(pokemon.url.split('/').slice(-2, -1)[0]);
      pokemonList.push(pokemonData);
    }

    return pokemonList;
}