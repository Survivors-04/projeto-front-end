import styled from "styled-components";

interface IStyledParagraph {
  backgroundColor?: string;
}

export const StyledParagraph = styled.p<IStyledParagraph>`
  display: flex;
  gap: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: var(--color-gray-4);
  border-radius: 5px;
  font-weight: 800;
  padding: 3px;
`;
