export async function getPokemonsByColors(element: HTMLButtonElement) {
    try {
        const apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon-color/");
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}