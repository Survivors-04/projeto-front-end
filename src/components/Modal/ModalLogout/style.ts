import styled from "styled-components";

export const StyledContainer = styled.div`
  background: var(--color-red-focus);

  position: absolute;
  right: 8%;
  bottom: -60%;

  width: 130px;
  height: 60px;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;

  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

  a {
    background: transparent;
    color: #000;

    width: 60%;
    height: 40%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7%;

    padding-left: 10%;

    transition: 0.5s;
  }

  a:hover {
    color: var(--color-yellow-focus);
  }

  button {
    background: transparent;
    border: none;
    width: 60%;
    height: 40%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4%;

    padding-left: 12%;

    transition: 0.5s;
  }

  button:hover {
    color: var(--color-yellow-focus);
  }
`;
