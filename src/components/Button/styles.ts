import styled from "styled-components";

interface iStyledButton {
  width: number;
}

const StyledButton = styled.button<iStyledButton>`
  width: ${({width}) => width}%;
  
  border: none;
  border-radius: 8px;

  background-color: var(--color-red);

  :hover {
    background-color: var(--color-red-focus);
  }
`;

export default StyledButton;
