import { getColors } from '../api/getPokemonsByColor.ts';
import { getPokemonsByColor } from '../api/getPokemonsByColor.ts';

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
                const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');

                if (cartDom) {
                    cartDom.innerHTML = "";
                    pokemonList.forEach((pokemon) => {
                        const pokemonElement = document.createElement('div');
                        pokemonElement.innerHTML = pokemon.name;
                        const pokemonImage = document.createElement('img');
                        pokemonImage.src = pokemon.image;
                        pokemonElement.appendChild(pokemonImage);
                        cartDom.appendChild(pokemonElement);
                    });
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