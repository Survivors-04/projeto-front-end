import styled from "styled-components";

export const StyledContainerWelcome = styled.div`
  background: transparent;
  width: 100%;

  height: auto;

  margin: 0 auto;
  padding: 11vh 0vh 4vh 0vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledWelcome = styled.div`
  background: var(--color-gray-3-background);
  width: 90%;
  max-width: 900px;
  height: 400px;

  margin-top: 20px;

  border-radius: 10px 10px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 200px;
    height: 180px;
  }

  p {
    color: var(--color-gray-0);

    width: 90%;
    font-size: 22px;
    text-align: center;
  }
`;

export const StyledContentInfoHeader = styled.div`
  background-color: var(--color-gray-3-background);
  width: 90%;
  max-width: 900px;

  padding-bottom: 20px;
  border-radius: 0px 0px 10px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled.div`
  width: 90%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;

    button {
      background: var(--color-red);
      color: var(--color-yellow);

      width: 100%;

      height: 60px;

      font-size: 24px;

      border: none;
      border-radius: 10px;

      transition: 0.5s;
    }

    button:hover {
      background: var(--color-red-focus);
      color: var(--color-yellow-focus);
    }

    ul {
      width: 100%;

      text-align: center;
      font-size: 18px;

      li {
        color: var(--color-gray-0);

        list-style: inside;

        text-align: start;

        padding-left: 10px;
      }
    }
  }
`;
