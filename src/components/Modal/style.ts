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

  border-radius: 5px 5px 0 0;
  
  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }

`;
