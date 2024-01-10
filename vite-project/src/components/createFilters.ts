import { getFilterElements } from '../api/getFilterElements.ts';
import { createFilterContent } from './createFilterContent.ts';

export async function createFilter(filter: string, element: HTMLElement) {
    let selectedFilters: string[] = [];
    
    try {
        const filterElements: string[] = await getFilterElements(filter);

        const formElement = document.createElement('form');

        const filterTitle = document.createElement('h2');
        filterTitle.innerHTML = filter;
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

                createFilterContent(selectedFilters, filter, filterElement, clickCount);
            });
        });

        element.appendChild(formElement);

    } catch (error) {
        console.error(error);
    }
}