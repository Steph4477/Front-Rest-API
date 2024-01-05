import { getShapes } from '../api/getPokemonsByShape.ts';

export async function displayShapesFilters(element: HTMLElement) {
    try {
        const shapes = getShapes();
        console.log(shapes);
    } catch (error) {

    }
}