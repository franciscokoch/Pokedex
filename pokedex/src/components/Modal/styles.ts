import { Eye, X } from "@phosphor-icons/react";
import styled from "styled-components";
import { ModalProps } from ".";

interface ModalContentProps {
  color: string;
}

export const EyeStyled = styled(Eye)`
  color: ${(props) => props.theme["gray-900"]};
`;

export const XStyled = styled(X)`
  color: ${(props) => props.theme["gray-900"]};
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["red-700"]};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: 999;

  & button {
    background-color: ${(props) => props.theme["gray-900"]};
  }
`;

export const ModalHeader = styled.div<ModalContentProps>`
  background-color: ${(props) => props.theme[props.color]};
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  min-width: 300px;
  max-width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  color: ${(props) => props.theme["gray-900"]};

  & h2 {
    display: flex;
    justify-content: center;
  }
`;

export const ModalContent = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 15px;
  width: 100%;
  max-width: 800px;

  & img {
    width: 10rem;
    height: auto;
    object-fit: cover;
  }

  & span {
    color: ${(props) => props.theme["gray-900"]};
    font-size: 1.2rem;
    line-height: 1.6;
  }

  & p {
    color: ${(props) => props.theme["gray-600"]};
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`