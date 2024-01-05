import { fetchData } from './utils.ts';
import { getPokemonById } from './getPokemonById.ts';
import { Pokemon } from './getPokemonById.ts';

export async function getColors(): Promise<[]> {

    const url = "https://pokeapi.co/api/v2/pokemon-color/";
    const apiData = await fetchData(url);

    const colors = apiData.results.map((color: { name: string }) => color.name);

    let colorsArray: string[] = [];

    colors.forEach((color: string) => {
        colorsArray.push(color);
    })
    
    console.log(apiData);
    console.log(colorsArray);

    return colors;
}


export async function getPokemonsByColor(color: string): Promise<Pokemon[]> {
    const url = `https://pokeapi.co/api/v2/pokemon-color/${color}`;
    const data = await fetchData(url);

    const pokemonList: Pokemon[] = [];

    for (const pokemon of data.pokemon_species) {
      const pokemonData = await getPokemonById(pokemon.url.split('/').slice(-2, -1)[0]);
      console.log(pokemonData);
      pokemonList.push(pokemonData);
    }

    return pokemonList;
}

/*
export async function getPokemonsBySpecificColor(id: number): Promise<string[]> {
    const url = `https://pokeapi.co/api/v2/pokemon-color/${id}`;
    const apiData = await fetchData(url);

    const pokemonsColor= apiData.results.map((pokemonColor: { name: string }) => pokemonColor.name);

    let pokemonsColorArray: string[] = [];

    pokemonsColor.forEach((pokemonColor: string) => {
        pokemonsColorArray.push(pokemonColor);
    })

    return pokemonsColorArray;
}*/