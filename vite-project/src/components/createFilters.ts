import { getFilterElements } from '../api/getFilterElements.ts';
import { createFilterContent } from './createFilterContent.ts';

export async function createFilter(filter: string, element: HTMLElement) {
    try {
        const filterElements: string[] = await getFilterElements(filter);

        const formElement = document.createElement('form');

        const filterTitle = document.createElement('h2');
        filterTitle.innerHTML = filter;
        element.appendChild(filterTitle);

        filterElements.forEach((filterElement: string, index: number) => {
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

            checkbox.addEventListener("click", async (e) => {
                e.stopPropagation();
                createFilterContent(filter, filterElement, index);
            });
        });

        element.appendChild(formElement);

    } catch (error) {
        console.error(error);
    }
}