import { getPokemonsByFilter} from '../api/getPokemonsByFilter.ts';
import { displayPage } from './displayPage.ts';
import { createPagination } from '../components/Pagination';

export async function createFilterContent(selectedFilters: string[], filter: string, filterElement: string, clickCount: number) {
    
    try {
        const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
        const cartDomFilter = document.querySelector<HTMLDivElement>('.pokemonBlocFilter');
        const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');

        if (clickCount % 2 !== 0) {
            selectedFilters.push(filterElement);
        } else {
            selectedFilters = selectedFilters.filter(item => item !== filterElement);
        }

        console.log(selectedFilters);
        const pokemonList = await getPokemonsByFilter(filter, selectedFilters);

        if (selectedFilters.length > 0 && cartDom && cartDomFilter && paginationDom) {
            cartDom.style.display = 'none';
            cartDomFilter.style.display = 'flex';

            displayPage(1, cartDomFilter, pokemonList);

            const paginationContainer = createPagination(pokemonList, 1, cartDomFilter);
            paginationDom.appendChild(paginationContainer);

        } else if (selectedFilters.length === 0 && cartDom && cartDomFilter && paginationDom){
            cartDom.style.display = 'flex';
            cartDomFilter.style.display = 'none';

            displayPage(1, cartDomFilter, pokemonList);
        }

    } catch (error){
        console.log(error);
    }
}