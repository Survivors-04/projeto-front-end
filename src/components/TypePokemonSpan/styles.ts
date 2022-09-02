import styled from "styled-components";

interface IStyledSpan {
  backgroundColor?: string;
}

export const StyledSpan = styled.p<IStyledSpan>`
  display: flex;
  gap: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: var(--color-gray-4);
  border-radius: 5px;
  font-weight: 800;
  padding: 3px;
`;
