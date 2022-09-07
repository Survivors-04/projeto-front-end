import styled from "styled-components";

interface IStyledParagraph {
  backgroundColor?: string;
}

export const StyledParagraph = styled.p<IStyledParagraph>`
  display: flex;
  gap: 2px;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  font-size: 12px;
  color: var(--color-gray-4);
  border-radius: 5px;
  font-weight: 700;
  padding: 2px;
`;
