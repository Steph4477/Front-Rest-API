import { fetchData } from './utils';

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

export async function getPokemonsBySpecificColor(id: number): Promise<string[]> {
    const url = `https://pokeapi.co/api/v2/pokemon-color/${id}`;
    const apiData = await fetchData(url);

    const pokemonsColor= apiData.results.map((pokemonColor: { name: string }) => pokemonColor.name);

    let pokemonsColorArray: string[] = [];

    pokemonsColor.forEach((pokemonColor: string) => {
        pokemonsColorArray.push(pokemonColor);
    })

    return pokemonsColorArray;
}