import styled from "styled-components";

interface iStyledButtonCancelar {
  width?: number;
}

export const StyledModaSell = styled.div`
  height: 200px;
  padding: 30px;

  background-color: var(--color-gray-3-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  width: 95%;
  max-width: 600px;

  font-weight: 800;

  form {
    height: 100%;
    width: 100%;
  }
`;

export const StyledContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;


`;
export const StyledButtonVender = styled.button<iStyledButtonCancelar>`
  width: ${({ width }) => (width ? width : 100)}%;
  height: 30px;
  border: none;

  color: var(--color-blue);
  background-color: var(--color-yellow);
  padding: 2.5px;
  font-weight: 900;
  font-size: 18px;
  border: 1px solid var(--color-blue);
  border-radius: 8px;
  box-shadow: 1.6px 1.6px;
`;
