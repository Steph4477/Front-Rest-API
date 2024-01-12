import { createFilter } from './createFilters.ts';

export async function displayFilters() {
    try {
        const filterDomShape = document.querySelector<HTMLButtonElement>('#filter-shape');
        const filterDomColor = document.querySelector<HTMLButtonElement>('#filter-color');
        const filterDomHabitat = document.querySelector<HTMLButtonElement>('#filter-habitat');
        const filterOne: string = "shape";
        const filterTwo: string = "color";
        const filterThree: string = "habitat";
        
        if (filterDomShape && filterDomColor && filterDomHabitat) {
            createFilter(filterOne, filterDomShape, "Forme");
            createFilter(filterTwo, filterDomColor, "Couleur");
            createFilter(filterThree, filterDomHabitat, "Habitat");
        } else {
            console.error("Aucun élément correspondant trouvé dans le DOM.");
        }
    } catch (error) {
        console.log(error);
    }
}