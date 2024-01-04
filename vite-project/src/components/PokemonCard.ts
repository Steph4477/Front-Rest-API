function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createPokemonCard(pokemonDetail: any) {
    const card = document.createElement('article');
    card.className = 'pokemon-card';

    const name = document.createElement('h2');
    name.textContent = capitalizeFirstLetter(pokemonDetail.name);
    card.appendChild(name);

    const image = document.createElement('img');
    image.src = pokemonDetail.sprites.front_default;
    image.alt = 'Image du Pokémon ' + capitalizeFirstLetter(pokemonDetail.name);
    card.appendChild(image);

    const description = document.createElement('p');
    description.textContent = pokemonDetail.description;
    card.appendChild(description);

    return card;
}