import styled from "styled-components";

export const StyledModalHome = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--color-gray-3-background);
  border-radius: 8px;

  width: 95%;
  max-width: 670px;

  margin: 0 auto;
  padding: 5px;

  li {
    padding: 5px;
    margin: 8px;

    height: 180px;
    width: 40%;
    max-width: 150px;

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

export const StyledModalConfirm = styled(StyledModalHome)`
  font-size: 20px;
`;
