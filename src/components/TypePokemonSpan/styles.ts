import styled from "styled-components";

interface IStyledSpan {
  backgroundColor?: string;
}

export const StyledSpan = styled.p<IStyledSpan>`
  display: flex;
  gap: 2px;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: var(--color-gray-4);
  width: 50%;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px;
`;
