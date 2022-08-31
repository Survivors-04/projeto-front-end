import "../../style/Global";
import styled from "styled-components";
import ImgSrc from "../../../assets/imgs/Login/image-removebg-preview.png";

export const ContainerLogin = styled.div`
  width: 85%;
  max-width: 521px;
  height: 458px;
  margin: 35px 0px;
  background: rgba(255, 215, 0, 0.9);

  border-radius: 12px;
  border: 7px solid rgba(65, 105, 225, 1);

  main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 0px;

    background-image: url(${ImgSrc});
    background-position: center;
    background-size: cover;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      color: var(--color-gray-4);
      margin-bottom: 35px;
    }

    .formLogin {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 10px;

      label {
        width: 235px;
        color: var(--color-gray-4);
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 7px;
      }
      input {
        width: 235px;
        height: 43px;
        border: none;
        border-radius: 5px;
        margin-bottom: 13px;
        padding: 5px 10px;
      }
    }

    button {
      border: none;
      width: 235px;
      height: 43px;
      background: #c80b0b;
      border-radius: 12px;

      font-family: "Jura";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: var(--color-gray-4);
    }

    .register {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin-top: 8px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: var(--color-gray-4);
      }
    }
  }
  @media screen and (min-width: 500px) {
    width: 80%;
    height: 650px;

    form {
      input {
        width: 500px;
      }
    }
  }
  @media screen and (min-width: 767px) {
    width: 80%;
    height: 780px;
  }
`;
