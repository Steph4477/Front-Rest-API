import { getFilterElements } from '../api/getFilterElements.ts';
import { getPokemonsByFilter} from '../api/getPokemonsByFilter.ts';
import { displayPage } from './displayPage.ts';
import { createPagination } from '../components/Pagination';

/* Cette fonction gère la création de filtres de façon dynamique
et affiche le contenu sélectionné dans le Dom. */

export async function createFilter(filter: string, element: HTMLElement, filterTitleInFrench: string) {
    // variable qui mémorise les éléments cliqués
    let selectedFilters: string[] = [];  
    
    try {
        // appel à la fonction getFilterElements afin d'afficher le contenu des filtres
        const filterElements: string[] = await getFilterElements(filter);

        const formElement = document.createElement('form');

        const filterTitle = document.createElement('h2');
        filterTitle.innerHTML = filterTitleInFrench;
        element.appendChild(filterTitle);

        // boucle sur les éléments de filtres avec création de checkbox qui permettront de filtrer le contenu
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

            // variable sui compte les clicks sur chaque élément de filtres pour gérer le cochage et le décochage
            let clickCount: number = 0;
            
            checkbox.addEventListener("click", async (e) => {

                e.stopPropagation();
                clickCount++;

                const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
                const cartDomFilter = document.querySelector<HTMLDivElement>('.pokemonBlocFilter');
                const paginationDom = document.querySelector<HTMLDivElement>('#pagination-bloc');
                const paginationFilterDom = document.querySelector<HTMLDivElement>('#pagination-bloc-filter');

                // si le nombre de click est impair : j'ajoute l'élément cliqué au tableau selectedFilters
                // si le nombre de click est pair : je retire l'élément cliqué du tableau selectedFilters
                if (clickCount % 2 !== 0) {
                    selectedFilters.push(filterElement);
                } else {
                    selectedFilters = selectedFilters.filter(item => item !== filterElement);
                }

                const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
                
                // pour chaque checkbox cliqué
                checkboxes.forEach((checkbox) => {
                    // si l'élément cliqué est différent du filterElement cliqué : passer en
                    // passer le checkbox en coché sinon en décoché + vider le tableau
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

                // afficher le contenu filtré
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