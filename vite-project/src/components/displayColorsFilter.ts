//import { fetchData } from '../api/utils.ts';
import { getColors } from '../api/getPokemonsByColor.ts'
import { getPokemonsByColor } from '../api/getPokemonsByColor.ts';
import { getPokemonById, Pokemon } from '../api/getPokemonById.ts';
// { getColors } from '../api/getPokemonsByColor.ts';
//import { getPokemonsByColor } from '../api/getPokemonsByColor.ts';

export async function displayColorsFilter(element: HTMLElement) {
    try {
        const colors = await getColors();
        const formElement = document.createElement('form');
        const filterColorTitle = document.createElement('h2');
        filterColorTitle.innerHTML = "Couleur";
        element.appendChild(filterColorTitle);
        colors.forEach(async (color: string) => {
            const container = document.createElement('div');
            container.style.display = 'flex';
            const checkboxContainer = document.createElement('div');
            checkboxContainer.style.marginRight = '10px';
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = color;
            checkbox.value = color;
            checkbox.addEventListener('change', async () => {
                const pokemonList = await getPokemonsByColor(color);
                //console.log(pokemonList);
                console.log(color, "le boouton cliqué");
                const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');

                if (cartDom) {
                    cartDom.innerHTML = "";
                }

            });
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(color));
            checkboxContainer.appendChild(label);
            container.appendChild(checkboxContainer);
            formElement.appendChild(container);
        });
        element.appendChild(formElement);
    } catch (error) {
        console.error(error);
    }
}
