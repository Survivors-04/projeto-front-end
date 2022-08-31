import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  top: 0px;
  height: 100vh;
  position: fixed;

  @media screen and (min-width: 700px) {
    background: none;
  }
  .div-transition {
    ul {
      width: 100%;
      background-color: var(--color-red);
      border: 1px solid #ccc;
      border-radius: 0.3em;
      box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
      position: absolute;
      margin-top: 80px;
      transition: opacity 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 15px;
      height: 70%;

      > li {
        display: flex;
        gap: 10px;
        padding: 0.2em 0.4em;
        color: var(--color-gray-4);

        a {
          font-size: 16px;
        }
      }
    }

    @media screen and (min-width: 700px) {
      ul {
        display: none;
      }
    }
  }
`;
