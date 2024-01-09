import { fetchData } from './utils.ts';

export async function getFilterElements(arg: string): Promise<string[]> {
    
    const url = `https://pokeapi.co/api/v2/pokemon-${arg}`;
    const apiData = await fetchData(url);

    const filterElements = apiData.results.map((filterElement: { name: string }) => filterElement.name);

    let filterElementsArray: string[] = [];

    filterElements.forEach((filterElement: string) => {
        filterElementsArray.push(filterElement);
    })

    return filterElementsArray;
}