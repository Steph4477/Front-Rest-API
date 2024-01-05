import { fetchData } from './utils';

export async function getAPIContent() {
    try {
        const apiData = await fetchData("https://pokeapi.co/api/v2/");
        console.log(apiData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}