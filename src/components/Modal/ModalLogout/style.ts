import styled from "styled-components";

interface iStyledLogoutButton {
  padding?: number;
}

export const StyledContainer = styled.div`
  background: var(--color-red-focus);

  position: absolute;
  right: 8%;
  bottom: -60%;

  width: 130px;
  height: 60px;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;

  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`;

export const StyledLogoutButton = styled.button<iStyledLogoutButton>`
  background: transparent;
  border: none;
  width: 60%;
  height: 40%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4%;

  padding-left: ${({ padding }) => (padding ? padding : 12)}%;

  transition: 0.5s;

  :hover {
    color: var(--color-yellow-focus);
  }
`;
