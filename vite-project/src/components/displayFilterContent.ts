/*import { getPokemonsByFilter } from '../api/getPokemonsByFilter.ts';
import { displayPage } from './displayPage.ts';

export async function displayFilterContent(arg: string, index: number) {

    try {
        console.log(arg, 'Le bouton a été cliqué !');

        const pokemonList = await getPokemonsByFilter(arg, index);

        const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
        const cartDomShape = document.querySelector<HTMLDivElement>('.pokemonBlocFilterShape');

        if (cartDom && cartDomShape) {
            cartDom.style.display = 'none';
            cartDomShape.style.display = 'flex';

            displayPage(1, cartDomShape, pokemonList);
        }
    } catch (error){
        console.log(error);
    }
    
}*/