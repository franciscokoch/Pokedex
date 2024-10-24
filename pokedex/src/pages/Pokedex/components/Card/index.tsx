import { useState } from "react";
import {
  CardAction,
  CardBody,
  CardContainer,
  CardInfo,
  CardTypes,
  CardHeader,
  CardName,
  SparkleStyled,
} from "./styles";
import { BadgeType, getBadgeUrl } from "../../../../enum/badgeEnum";
import { Modal } from "../../../../components/Modal";

interface CardProps {
  sprite: string;
  name: string;
  type1: BadgeType;
  type2: BadgeType;
  spriteShiny: string;
  abilityHidden: string;
  abilityNormal: string;
}

export function Card({ sprite, name, type1, type2, spriteShiny, abilityHidden, abilityNormal }: CardProps) {
  const [isShiny, setIsShiny] = useState(false);
  console.log(isShiny);

  return (
    <div>
      <CardContainer color={type1} $isShiny={isShiny}>
        <CardHeader>
          <CardName>
            <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
          </CardName>
          <CardAction>
            <Modal color={type1} pokemon={{ id: 0, name, sprite, spriteShiny, type1, type2, abilityHidden, abilityNormal }} />
            <SparkleStyled size={24} onClick={() => setIsShiny(!isShiny)} />
          </CardAction>
        </CardHeader>
        <CardBody>
        <img src={isShiny ? spriteShiny : sprite} />
          <CardInfo>
            <CardTypes>
              <img src={getBadgeUrl(type1)} />
              {type2 && <img src={getBadgeUrl(type2)} />}
            </CardTypes>
          </CardInfo>
        </CardBody>
      </CardContainer>
    </div>
  );
}
