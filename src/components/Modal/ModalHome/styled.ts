import styled from "styled-components";

export const StyledModalHome = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;
  width: 58%;
  padding: 5px;

  li {
    padding: 5px;
    margin: 8px;

    height: 180px;
    width: 30%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    border: var(--color-gray-1) 1px solid;
    border-radius: 8px;
  }

  h2 {
    width: 100%;
    text-align: center;
  }
`;
