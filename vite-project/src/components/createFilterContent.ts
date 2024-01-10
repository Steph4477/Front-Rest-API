/*import { getPokemonsByFilter} from '../api/getPokemonsByFilter.ts';
import { displayPage } from './displayPage.ts';
import { createPagination } from '../components/Pagination';

export async function createFilterContent(filter: string, filterElement: string, clickCount: number) {
    
    try {

        const pokemonList = await getPokemonsByFilter(filter, filterElement);

        const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
        const cartDomFilter = document.querySelector<HTMLDivElement>('.pokemonBlocFilter');
        const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');

        if (cartDom && cartDomFilter && paginationDom) {
/*
            if (clickCount % 2 !== 0) {

                cartDom.style.display = 'none';
                cartDomFilter.style.display = 'flex';

                displayPage(1, cartDomFilter, pokemonList);

                const paginationContainer = createPagination(pokemonList, 1, cartDomFilter);
                paginationDom.appendChild(paginationContainer);

            } else {

                cartDom.style.display = 'flex';
                cartDomFilter.style.display = 'none';
            }
        }
    } catch (error){
        console.log(error);
    }
}*/