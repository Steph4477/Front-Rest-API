/*
import { getColors, getPokemonsByColor } from '../api/getPokemonsByColor';

import {displayPage} from './displayPage'

export async function displayColorsFilter(element: HTMLElement) {
    try {
        const colors = await getColors();
        const formElement = document.createElement('form');
        const filterColorTitle = document.createElement('h2');
        filterColorTitle.innerHTML = "Couleur";
        element.appendChild(filterColorTitle);

        colors.forEach((color: string) => {
            const container = document.createElement('div');
            container.style.display = 'flex';

            const checkboxContainer = document.createElement('div');
            checkboxContainer.style.marginRight = '10px';
            const label = document.createElement('label');
            const checkbox = document.createElement('input');

            checkbox.type = 'checkbox';
            checkbox.name = 'colors';
            checkbox.value = color;

            label.appendChild(checkbox);
            checkboxContainer.appendChild(label);

            const colorInfo = document.createElement('div');
            colorInfo.textContent = color;

            container.appendChild(checkboxContainer);
            container.appendChild(colorInfo);
            formElement.appendChild(container);

            checkbox.addEventListener('change', async (e) => {
                e.stopPropagation();
                console.log(color, "a été cliqué");

                const pokemonList = await getPokemonsByColor(color);

                const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');
                const cartDomColor = document.querySelector<HTMLDivElement>('.pokemonBlocFilterColor')          ;
                
                if (cartDom && cartDomColor){
                    cartDom.style.display = 'none';
                    cartDomColor.style.display = 'flex';
                    displayPage(1, cartDomColor, pokemonList);
                }

                if (!checkbox.checked) {
                    
                }

            });
        });
        element.appendChild(formElement);
    } catch (error) {
        console.error(error);
    }
}*/
