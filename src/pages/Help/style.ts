import styled from "styled-components";

export const StyledContainerWelcome = styled.div`
  background: transparent;
  width: 90%;
  height: 100vh;

  margin: 0 auto;
  padding: 11vh 0vh 4vh 0vh;
`;

export const StyledWelcome = styled.div`
  background: var(--color-gray-3-background);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 300px;
    height: 250px;
  }

  p {
    color: var(--color-gray-0);
    font-size: 25px;
  }
`;
