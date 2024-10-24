import { BannerContainer, BannerTextContainer } from "./styles";
import banner from "../../assets/banner.png";

export function Home() {
  return (
    <>
      <BannerContainer>
        <BannerTextContainer>
          <h2>Acesse sua pokedex e registre seus pokemons favoritos</h2>
        </BannerTextContainer>
        <img src={banner} />
      </BannerContainer>
    </>
  );
}
