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
  inset: 0;
`;

export const StyledModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;
