import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }

  @media screen and (min-width: 1024px) {
    gap: 100px;
  }

  form {
    margin-top: 15px;
    display: flex;

    @media screen and (min-width: 700px) {
      display: none;
    }
  }
  .form {
    @media screen and (min-width: 700px) {
      width: 380px;
      display: flex;
    }

    @media screen and (min-width: 1366px) {
      width: 550px;
    }
  }
  div {
    display: flex;
    gap: 5px;
  }

  input {
    width: 100%;
    height: 30px;
    border: 2px solid transparent;
    outline: none;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #3f3f3f;
    background-color: #212121;
    border-radius: 5px;
    padding: 5px;
    transition: 0.5s linear;
    color: var(--color-gray-0);
    font-family: monospace;
    letter-spacing: 1px;
  }

  input:focus {
    border: 2px solid var(--color-blue);
    caret-color: var(--color-blue);
    color: var(--color-blue);
    box-shadow: 4px 4px 10px #070707;
  }

  input:focus::placeholder {
    color: var(--color-blue);
  }

  span {
    color: var(--color-red);
    font-weight: 700;
  }

  button {
    max-width: 179px;
  }
`;

export const StyledCharmImg = styled.img`
  display: none;
`;

export const StyledDiv = styled.div`
  background-color: var(--color-red);
  margin: 0;
  margin-top: 15px;
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  max-height: 400px;

  @media screen and (min-width: 425px) {
    width: 300px;
  }

  span {
    color: var(--color-yellow);
  }

  figure {
    margin-top: 15px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;

    li {
      color: var(--color-gray-4);
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media screen and (min-width: 700px) {
    width: 40%;
    height: 320px;

    figure img {
      width: 100px;
    }
  }
  @media screen and (min-width: 1366px) {
    width: 200px;
  }
`;

export const StyledList = styled.ul`
  margin-top: 15px;
  width: 260px;
  max-width: 1000px;
  display: flex;
  overflow-x: auto;
  overflow-y: scroll;
  background-color: var(--color-red);
  gap: 10px;
  border-radius: 8px;
  padding: 10px;

  h2 {
    padding: 15px;
    font-size: 15px;
    color: var(--color-gray-3);
  }

  .form {
    display: none;
  }

  @media screen and (min-width: 425px) {
    width: 300px;
  }

  @media screen and (min-width: 700px) {
    max-width: 1000px;
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    height: 80vh;

    .form {
      display: flex;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 650px;
    height: 80vh;
  }

  @media screen and (min-width: 1024px) {
    width: 700px;
    height: 80vh;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 110px;

    margin-top: 15px;
    background-color: var(--color-gray-3);
    border-radius: 10px;
    max-height: 300px;

    padding: 10px;

    h3 {
      font-size: 14px;
    }

    button {
      height: 30px;
      border: none;
      margin-bottom: 10px;
      color: var(--color-blue);
      background-color: var(--color-yellow);
      padding: 2.5px;
      font-weight: 900;
      font-size: 18px;
      border: 1px solid var(--color-blue);
      border-radius: 8px;
      box-shadow: 1.6px 1.6px;
    }

    img {
      padding: 10px;
      width: 90px;
      max-width: 90px;
      height: 90px;
    }

    @media screen and (min-width: 700px) {
      width: 110px;

      button {
        width: 80px;
      }
      img {
        padding: 10px;
        width: 70px;
      }

      h3 {
        font-size: 15px;
      }

      p {
        font-size: 13px;
      }
    }

    @media screen and (min-width: 1024px) {
      padding: 10px;
      width: 140px;
      height: 210px;

      img {
        padding: 5px;
        width: 80px;
      }
    }

    @media screen and (min-width: 1366px) {
      gap: 2px;
      width: 160px;

      img {
        padding: 1px;
        width: 90px;
      }
    }
  }
`;
