import { useState } from "react";
import { EyeStyled, ModalContainer, ModalHeader, ModalContent, XStyled } from "./styles";
import { BadgeType, getBadgeUrl } from "../../enum/badgeEnum";
import { GraficChart } from "../GraficChart";


export interface ModalProps {
  color: BadgeType;
  pokemon: {
    id: number;
    name: string;
    sprite: string;
    spriteShiny: string;
    type1: BadgeType;
    type2: BadgeType;
    abilityHidden: string;
    abilityNormal: string;
  };
}

export function Modal({ color, pokemon }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <ModalContainer>
          <ModalHeader color={color}>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <ModalContent>
              <img src={pokemon.sprite} alt={pokemon.name} />
              <img src={pokemon.spriteShiny} alt={pokemon.name} />
              <GraficChart />
              <div>
                <span>Habilidade:</span>
                <p>{pokemon.abilityNormal.charAt(0).toUpperCase() + pokemon.abilityNormal.slice(1)}</p>
                <span>Habilidade escondida:</span>
                <p>{pokemon.abilityHidden.charAt(0).toUpperCase() + pokemon.abilityHidden.slice(1)}</p>
              </div>
            </ModalContent>
          </ModalHeader>
        </ModalContainer>
      )}
    </>
  );
}
