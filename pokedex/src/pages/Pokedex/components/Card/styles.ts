import styled, { css, keyframes } from "styled-components";
import { Sparkle } from "@phosphor-icons/react";

const liftAndRotate = keyframes`
  0% {
    transform: translateY(0) rotateY(0deg); 
    opacity: 1;
  }
  50% {
    transform: translateY(-100px) rotateY(180deg); 
    opacity: 0.5; 
  }
  100% {
    transform: translateY(0) rotateY(360deg);
    opacity: 1;
  }
`;

const shakeAndRotate = keyframes`
  0% {
    transform: translateY(0) rotateY(0deg); 
    opacity: 1;
  }
  50% {
    transform: translateY(-100px) rotateY(180deg); 
    opacity: 0.5; 
  }
  100% {
    transform: translateY(0) rotateY(360deg);
    opacity: 1;
  }`;

interface CardContainerProps {
  color: string;
  $isShiny: boolean;
}

export const SparkleStyled = styled(Sparkle)`
  color: ${(props) => props.theme["gray-900"]};
  cursor: pointer;
`;


export const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  height: 200px;
  background: ${(props) => props.theme[props.color]};
  position: relative;
  border: 5px solid ${(props) => props.theme["electric"]};

  & img {
    width: 8rem;
    margin-top: 50px;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.3);
    }
  }

  ${(props) =>
    props.$isShiny &&
    css`
      animation: ${liftAndRotate} 0.5s ease-in-out;
    `}

  ${(props) =>
    !props.$isShiny &&
    css`
      animation: ${shakeAndRotate} 0.5s ease-in-out;
    `}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  position: absolute;
  left: 10px;
`;

export const CardName = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme["gray-900"]};
  font-weight: bold;
  padding: 8.5px;
`;

export const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 0.5em;
`;

export const CardBody = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px;

  & span {
    color: ${(props) => props.theme["gray-900"]};
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const CardTypes = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
