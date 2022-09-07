import "../../style/Global";
import styled from "styled-components";

interface IContainerProps {
  imgBackground: string;
}
export const ContainerUsers = styled.div<IContainerProps>`
  width: 400px;
  max-width: 300px;
  height: 458px;
  margin: 0px;
  background: rgba(255, 215, 0, 0.9);
  margin-top: 0px;

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

    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      url(${({ imgBackground }) => imgBackground});
    background-position: center;
    background-size: 300px;
    background-repeat: no-repeat;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      color: var(--color-gray-4);
      margin-bottom: 35px;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 10px;

      label {
        width: 193px;
        color: var(--color-gray-4);
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 7px;
      }
      input {
        max-width: 230px;
        height: 30px;
        border: 2px solid transparent;
        outline: none;
        border-bottom: 2px solid #3f3f3f;
        caret-color: #3f3f3f;
        background-color: #212121;
        padding: 5px;
        transition: 0.5s linear;
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
    }
  }
`;

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-gray-4);
  }
`;
export const HeaderUsers = styled.div`
  margin: 0;
  width: 400px;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  img {
    height: 50;
    width: 130px;
  }
  button {
    height: 35px;
    padding: 5px;
  }
`;
