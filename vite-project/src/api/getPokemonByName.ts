import { getAllPokemons } from '../api/getAllPokemons';

// Utilisez une interface pour définir la structure des objets Pokémon
interface Pokemon {
  name: string;
  // Ajoutez d'autres propriétés si nécessaire
}

let pokemons: Pokemon[] = []; // Nous allons remplir cette liste avec la fonction getAllPokemons

export async function searchBar(searchText: string): Promise<Pokemon[]> {
  try {
    // Récupérez tous les Pokémon
    const allPokemons = await getAllPokemons();
    pokemons = allPokemons;

    // Filtrer les Pokémon en fonction du texte de recherche
    const searchedPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Retourner les résultats de la recherche
    return searchedPokemons;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la recherche', error);
    // En cas d'erreur, retournez un tableau vide ou lancez une exception selon le cas.
    return [];
  }
}
