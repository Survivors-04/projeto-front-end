import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  /* inset: 0; */
`;

export const StyledModalBox = styled.div`
  width: 95%;
  background: var(--color-gray-2);

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;

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
