import "../../style/Global";
import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 85%;
  margin: 35px 0px;
  border: 1px solid white;

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0px;

    background: #ffd700;
    border: 5px solid #4169e1;
    border-radius: 12px;
    background: url();


    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        color: rgba(--color-gray-4,1);
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
      }
    }
  }
`;
