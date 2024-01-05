export interface Pokemon {
  name: string;
  type: string;
  attack: number;
  defense: number;
  description: string;
  image: string;
  color: string;
}

export async function getPokemonById(id: number): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  const pokemon: Pokemon = {
    name: data.name,
    type: data.types[0].type.name,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    description: data.species.name,
    image: data.sprites.front_default,
  };

  return pokemon;

}