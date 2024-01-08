import { getAllPokemons } from '../api/getAllPokemons';

// Utilise une interface pour définir la structure des objets Pokémon
interface Pokemon {
  name: string;

}

let pokemons: Pokemon[] = []; // liste à remplir avec la fonction getAllPokemons pour filtrer les résultats de la recherche

export async function searchBar(searchText: string): Promise<Pokemon[]> {
  try {
    // Récupére tous les Pokémons
    const allPokemons = await getAllPokemons();
    pokemons = allPokemons;

    // Filtre les Pokémons en fonction du texte de recherche
    const searchedPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Retourne les résultats de la recherche
    return searchedPokemons;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la recherche', error);
    // En cas d'erreur, retourne un tableau vide ou un message.
    return [];
  }
}
