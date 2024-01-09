import { getPokemonsByFilter} from '../api/getPokemonsByFilter.ts';
import { displayPage } from './displayPage.ts';

export async function createFilterContent(filter: string, filterElement: string, index: number) {
    
    try {
        console.log(filter, 'Le bouton a été cliqué !', index);

        const pokemonList = await getPokemonsByFilter(filter, filterElement);

        console.log("test 1");
        console.log(pokemonList);

        const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
        const cartDomFilter = document.querySelector<HTMLDivElement>('.pokemonBlocFilter');

        if (cartDom && cartDomFilter) {
            cartDom.style.display = 'none';
            cartDomFilter.style.display = 'flex';

            displayPage(1, cartDomFilter, pokemonList);
        }
    } catch (error){
        console.log(error);
    }
    
}