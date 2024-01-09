import { fetchData } from './utils.ts';

export async function getPokemonsColorById(id: number): Promise<string> {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    const data = await fetchData(url);

    return data.color.name;
}
