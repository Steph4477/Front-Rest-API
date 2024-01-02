export async function getAllPokemons(element: HTMLButtonElement) {
    try {
        const apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
        const data = await apiResponse.json();
        console.log(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}