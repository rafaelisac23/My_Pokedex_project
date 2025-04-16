export type PokeInfo = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  location_area_encounters: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      order: number | null;
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  forms: {
    name: string;
    url: string;
  }[];
  cries: {
    latest: string;
    legacy: string;
  };
  past_abilities: {
    abilities: {
      ability: {
        name: string;
        url: string;
      } | null;
      is_hidden: boolean;
      slot: number;
    }[];
    generation: {
      name: string;
      url: string;
    };
  }[];
  past_types: {
    // Pode ser expandido se houver tipos passados no futuro
  }[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string | null;
        front_female: string | null;
      };
      home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string | null;
        front_shiny: string | null;
      };
      showdown: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    versions: {
      [generation: string]: {
        [game: string]:
          | {
              back_default?: string | null;
              back_female?: string | null;
              back_shiny?: string | null;
              back_shiny_female?: string | null;
              front_default?: string | null;
              front_female?: string | null;
              front_shiny?: string | null;
              front_shiny_female?: string | null;
              back_gray?: string | null;
              back_transparent?: string | null;
              front_gray?: string | null;
              front_transparent?: string | null;
              back_shiny_transparent?: string | null;
              front_shiny_transparent?: string | null;
            }
          | {
              animated?: {
                back_default?: string | null;
                back_female?: string | null;
                back_shiny?: string | null;
                back_shiny_female?: string | null;
                front_default?: string | null;
                front_female?: string | null;
                front_shiny?: string | null;
                front_shiny_female?: string | null;
              };
              back_default?: string | null;
              back_female?: string | null;
              back_shiny?: string | null;
              back_shiny_female?: string | null;
              front_default?: string | null;
              front_female?: string | null;
              front_shiny?: string | null;
              front_shiny_female?: string | null;
            }
          | {
              front_default?: string | null;
              front_shiny?: string | null;
            }
          | {
              front_default?: string | null;
              front_female?: string | null;
              front_shiny?: string | null;
              front_shiny_female?: string | null;
            }
          | {
              icons: {
                front_default?: string | null;
                front_female?: string | null;
              };
            };
      };
    };
  };
};
