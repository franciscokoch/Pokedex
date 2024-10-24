export type BadgeType =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

export const getBadgeUrl = (type: BadgeType): string | undefined => {
  const badges = {
    normal:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/1.png",
    fighting:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/2.png",
    flying:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/3.png",
    poison:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/4.png",
    ground:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/5.png",
    rock: "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/6.png",
    bug: "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/7.png",
    ghost:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/8.png",
    steel:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/9.png",
    fire: "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/10.png",
    water:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/11.png",
    grass:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/12.png",
    electric:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/13.png",
    psychic:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/14.png",
    ice: "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/15.png",
    dragon:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/16.png",
    dark: "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/17.png",
    fairy:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/18.png",
    unknown:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/19.png",
    shadow:
      "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/types/generation-viii/sword-shield/20.png",
  };

  return badges[type];
};
