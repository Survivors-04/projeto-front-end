export interface iPokemon {
  name: string;
  rarity: "C" | "R" | "E" | "L";
  pokedex: number;
  type_1: string;
  type_2: string | null;
  id: string;
}

export interface iPokemonUser extends iPokemon {
  user: string;
  price: number;
  on_marketplace: boolean;
}

export interface iPokemonUserUpdate {
  rarity?: "C" | "R" | "E" | "L";
  pokedex?: number;
  type_1?: string;
  type_2?: string | null;
  price?: number;
  on_marketplace?: boolean;
}
