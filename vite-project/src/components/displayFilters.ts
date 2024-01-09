import { createFilter } from './createFilters.ts';

export async function displayFilters() {
    try {
        const filterDom = document.querySelector<HTMLButtonElement>('#filter');
        const filterOne: string = "shape";
        const filterTwo: string = "color";
        const filterThree: string = "habitat";
        
        if (filterDom) {
            createFilter(filterOne, filterDom);
            createFilter(filterTwo, filterDom);
            createFilter(filterThree, filterDom);
        } else {
            console.error("Aucun élément correspondant à '.pokemonBlocFilterShape' trouvé dans le DOM.");
        }
    } catch (error) {
        console.log(error);
    }
}