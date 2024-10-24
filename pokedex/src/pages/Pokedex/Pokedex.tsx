import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { PokedexGrid } from "./styles";
import { pokemonApi, PokemonType } from "../../api/routes/PokedexApi";

export function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await pokemonApi.getPokemon();
    setPokemons(response.data);
    console.log(response.data);
  };

  return (
    <PokedexGrid>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <Card
            spriteShiny={pokemon.spriteShiny}
            key={pokemon.id}
            sprite={pokemon.sprite}
            name={pokemon.name}
            type1={pokemon.type1}
            type2={pokemon.type2}
            abilityHidden={pokemon.abilityHidden}
            abilityNormal={pokemon.abilityNormal}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </PokedexGrid>
  );
}
