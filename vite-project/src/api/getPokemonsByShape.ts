import { fetchData } from './utils.ts';
//import { getPokemonById } from './getPokemonById.ts';
//import { Pokemon } from './getPokemonById.ts';

export async function getShapes(): Promise<string[]> {
    const url = "https://pokeapi.co/api/v2/pokemon-shape/";
    const apiData = await fetchData(url);

    const shapes = apiData.results.map((shape: { name: string }) => shape.name);

    let shapesArray: string[] = [];

    shapes.forEach((shape: string) => {
        shapesArray.push(shape);
    })
    
    //console.log(apiData);
    //console.log(shapesArray);

    return shapesArray;
}