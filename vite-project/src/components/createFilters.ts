import { getFilterElements } from '../api/getFilterElements.ts';
import { getPokemonsByFilter} from '../api/getPokemonsByFilter.ts';
import { displayPage } from './displayPage.ts';
import { createPagination } from '../components/Pagination';


export async function createFilter(filter: string, element: HTMLElement, filterTitleInFrench: string) {
    let selectedFilters: string[] = [];  
    
    try {
        const filterElements: string[] = await getFilterElements(filter);

        const formElement = document.createElement('form');

        const filterTitle = document.createElement('h2');
        filterTitle.innerHTML = filterTitleInFrench;
        element.appendChild(filterTitle);

        filterElements.forEach((filterElement: string) => {

            const container = document.createElement('div');
            container.style.display = 'flex';

            const checkboxContainer = document.createElement('div');
            checkboxContainer.style.marginRight = '10px';

            const label = document.createElement('label');

            const checkbox = document.createElement('input');
            
            checkbox.type = 'checkbox';
            checkbox.name = 'filterElement';
            checkbox.value = filterElement;

            checkbox.setAttribute('data-category', 'filter');

            label.appendChild(checkbox);
            checkboxContainer.appendChild(label);

            const filterInfo = document.createElement('div');
            filterInfo.textContent = filterElement;

            container.appendChild(checkboxContainer);
            container.appendChild(filterInfo);

            formElement.appendChild(container);

            let clickCount: number = 0;
            
            
            checkbox.addEventListener("click", async (e) => {

                e.stopPropagation();
                clickCount++;

                const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
                const cartDomFilter = document.querySelector<HTMLDivElement>('.pokemonBlocFilter');
                const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');
                const paginationFilterDom = document.querySelector<HTMLDivElement>('#pagination-bloc-filter');

                if (clickCount % 2 !== 0) {
                    selectedFilters.push(filterElement);
                } else {
                    selectedFilters = selectedFilters.filter(item => item !== filterElement);
                }

                const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
                
                checkboxes.forEach((checkbox) => {
                    if (checkbox.getAttribute('data-category') !== filter) {
                        if (checkbox.value === filterElement) {
                            checkbox.checked = true;

                            selectedFilters = [];
                            selectedFilters.push(filterElement);
                        } else {
                            checkbox.checked = false;

                            selectedFilters = [];
                            selectedFilters.push(filterElement);
                        }
                    }
                });

                const pokemonList = await getPokemonsByFilter(filter, selectedFilters);

                if (selectedFilters.length > 0 && cartDom && cartDomFilter && paginationDom && paginationFilterDom) {
                    cartDom.style.display = 'none';
                    cartDomFilter.style.display = 'flex';
                    paginationDom.style.display ='none';
                    paginationFilterDom.style.display ='flex';
    
                    displayPage(1, cartDomFilter, pokemonList);

                    const paginationContainer = createPagination(pokemonList, 1, cartDomFilter);
                    paginationFilterDom.innerHTML = '';
                    paginationFilterDom.appendChild(paginationContainer);

                } else if (selectedFilters.length === 0 && cartDom && cartDomFilter && paginationDom && paginationFilterDom){
                    cartDom.style.display = 'flex';
                    cartDomFilter.style.display = 'none';
                    paginationDom.style.display ='flex';
                    paginationFilterDom.style.display ='none';
                }
            });
        });

        element.appendChild(formElement);

    } catch (error) {
        console.error(error);
    }
}