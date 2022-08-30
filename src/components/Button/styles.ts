import styled from "styled-components";

interface iStyledButton {
  width: number;
}

const StyledButton = styled.button<iStyledButton>`
  width: ${({ width }) => width}%;
  background: var(--color-red);
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;

  :hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  :active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }
`;

export default StyledButton;
