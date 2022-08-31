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

  display: flex;
  justify-content: center;
  align-items: center;
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