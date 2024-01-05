import { getShapes } from '../api/getPokemonsByShape.ts';
import { getPokemonsByShape } from '../api/getPokemonsByShape.ts';

export async function displayShapesFilter(element: HTMLElement) {
    try {
        const shapes = await getShapes();

        const formElement = document.createElement('form');

        const filterShapeTitle = document.createElement('h2');
        filterShapeTitle.innerHTML = "Shape";
        element.appendChild(filterShapeTitle);

        shapes.forEach((shape: string) => {
            const container = document.createElement('div');
            container.style.display = 'flex';

            const checkboxContainer = document.createElement('div');
            checkboxContainer.style.marginRight = '10px';

            const label = document.createElement('label');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'shapes';
            checkbox.value = shape;

            label.appendChild(checkbox);
            checkboxContainer.appendChild(label);

            const shapeInfo = document.createElement('div');
            shapeInfo.textContent = shape;

            container.appendChild(checkboxContainer);
            container.appendChild(shapeInfo);

            formElement.appendChild(container);

            checkbox.addEventListener("click", (e) => {
                e.stopPropagation();
                console.log(shape, 'Le bouton a été cliqué !');

                // mettre
                const pokemonList = getPokemonsByShape(shape);
                console.log(pokemonList);
                const cartDom = document.querySelector<HTMLDivElement>('.pokemonBloc');

                if (cartDom) {
                    cartDom.innerHTML = "";
                }

            });
        });

        element.appendChild(formElement);


    } catch (error) {

    }
}