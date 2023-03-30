export interface iPokemon {
  name: string;
  rarity: string;
  pokedex: number;
  type_1: string;
  type_2: string;
  id: string | number;
}

export interface iPokemonUser extends iPokemon {
  user: string;
  price: number;
  on_marketplace: boolean;
}
