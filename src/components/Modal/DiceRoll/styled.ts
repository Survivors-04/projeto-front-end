import styled from "styled-components";

export const StyledConteinerModal = styled.div`
  background: var(--color-gray-3);

  width: 95%;
  height: 450px;
  max-width: 502px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledConfirmation = styled.div`
  background: var(--color-gray-3);

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 10px;

  img {
    width: 140px;
    height: 110px;
  }

  span {
    color: #ffe50d;
    font-size: 22px;
  }

  button {
    background-color: var(--color-red);
    width: 190px;
    height: 50px;
  }
`;

export const StyledRollDice = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    height: 55%;
  }
`;

export const StyledNumberRandom = styled.div`
  background-color: #ffe50d;
  width: 100%;
  height: 45%;

  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 180px;
    height: 50px;

    color: var(--color-gray-4);

    font-size: 40px;

    border-top: 1px var(--color-gray-4) solid;
    border-bottom: 1px var(--color-gray-4) solid;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  div span {
    color: var(--color-gray-4);
    width: 80px;
  }
`;

export const StyledResult = styled.div`
  background: var(--color-gray-3);

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 190px;
    height: 160px;
  }

  span {
    color: #ffe50d;
    font-size: 32px;
    text-align: center;
  }
`;
