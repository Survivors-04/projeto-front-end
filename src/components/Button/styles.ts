import styled from "styled-components";

interface iStyledButton {
  width?: number;
  hover?: string;
  textColor?: string;
  backgroundColor?: string;
  transform?: string;
  max_width?: number;
}

const StyledButton = styled.button<iStyledButton>`
  width: ${({ width }) => (width ? width : 100)}%;

  color: ${({ textColor }) => (textColor ? textColor : "var(--color-gray-4)")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "var(--color-red)"};

  margin: 5px 0;
  padding: 10px 5px;

  font-weight: 900;
  font-size: 18px;

  border: 3px solid ${({ textColor }) => (textColor ? textColor : "black")};
  border-radius: 8px;
  box-shadow: 1.6px 1.6px;

  ${({ max_width }) => max_width && ` max-width: ${max_width}px;`}

  :hover {
    background-color: ${({ hover }) =>
      hover ? hover : "var(--color-red-focus)"};
    transform: ${({ transform }) =>
      transform ? transform : "translate(-1px, -1px)"};
    box-shadow: 2.4px 2.4px;
  }

  :active {
    transform: ${({ transform }) =>
      transform ? transform : "translate(1px, 1px)"};
    box-shadow: 1px 1px;
  }
`;

export default StyledButton;
