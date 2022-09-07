import styled from "styled-components";
const StyledDivsMarket = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  padding-top: 100px;

  @media only screen and (max-width: 779px) {
    margin: 0 auto;
    width: 95%;

    max-width: 875px;

    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;

export default StyledDivsMarket;

export const StyledDivPokemonsMarket = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 60vw;
  @media only screen and (max-width: 779px) {
    display: flex;
    flex-flow: row;
    overflow: auto;
    width: 80vw;
    margin-left: 0;
  }
`;

export const StyledDivSearchCard = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 779px) {
    display: flex;

    flex-direction: column;
  }
`;

export const StyledFullCart = styled.div`
  width: 280px;
  height: 525px;
  background: var(--color-gray-3);
  border: 2px solid var(--color-gray-1);
  border-radius: 20px;
  margin-top: 7%;
  margin-left: 7%;
  @media only screen and (max-width: 779px) {
    margin-top: 2%;
    margin-left: 2%;
  }

  h2 {
    background: var(--color-red);
    height: 18%;
    width: 100%;
    border-radius: 20px 20px 0 0;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    height: 60%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
  }
`;

export const StyledDivOverflow = styled.div`
  height: 56%;
  overflow: auto;
`;

export const StyledDivTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: var(--color-red);
  width: 100%;
  height: 22%;
  border-radius: 0 0 20px 20px;
  position: relative;
  bottom: -21px;

  h4 {
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
    color: #121214;
    margin-top: 2%;
  }

  h4 + h4 {
    color: var(--color-yellow);
  }

  button {
    background-color: yellow;
    position: absolute;
    bottom: 14px;
  }
`;

export const StyledDivTipo = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 30px;
  margin-top: 18%;

  p {
    font-size: 13px;
    width: 60px;
    height: 22px;
    padding: 4px;
    line-height: 1;
    color: black;
    text-align: center;
    align-items: center;
    margin-right: 4%;
  }
`;

export const StyledSinglePokemon = styled.div`
  background-color: #212529;
  height: 40%;
  width: 40%;
  min-width: 150px;
  max-width: 150px;
  min-height: 300px;
  max-height: 300px;
  border-radius: 20px;
  border: 2px solid #868e96;
  margin-left: 2%;
  margin-top: 2%;

  img {
    width: 80px;
    padding: 5%;
    height: 65px;
    max-height: 65px;
    border-radius: 10px;
    text-align: center;
    display: block;
    margin: auto;
    margin-top: 5%;
  }
  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 43px;
    color: #f8f9fa;
    text-align: center;
    margin-top: 5%;
  }

  h3 {
    text-align: center;
  }

  h4 {
    font-weight: 700;
    font-size: 13px;
    line-height: 26px;
    color: #868e96;
    text-align: center;
  }

  div {
    font-weight: 700;
    font-size: 15px;
    line-height: 35px;
    color: #868e96;
    display: flex;
    justify-content: space-around;
  }

  button {
    margin-left: 10%;

    margin-top: 15%;
  }
`;

export const StyledButtonBag = styled.button`
  background: #b0aea1;
  border-radius: 12px;
  width: 65px;
  max-width: 65px;
  height: auto;
  font-weight: 700;
  font-size: 15px;
  line-height: 31px;
  margin-top: 5%;
`;

export const StyledMiniCard = styled.div`
  display: flex;
  background-color: #212529;
  overflow: auto;
  margin-right: 3%;
  height: 56px;
  width: 253px;
  margin-top: 3%;

  img {
    border-radius: 20px;
    width: 55px;
    height: 55px;

    display: block;
    margin: auto;
  }
  div {
    display: flex;
    flex-direction: row;
    width: 52%;
    height: 100%;

    background-color: #212529;
    text-align: center;
    margin: auto;
    justify-content: center;
  }
  h3 {
    text-align: center;
    font-size: 12px;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  p {
    text-align: center;
    font-size: 12px;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  button {
    height: 20px;
    margin-top: 22px;
    background: transparent;
    border: none;
    color: white;
  }
`;

export const StyledSearchFilter = styled.form`
  width: 280px;
  height: 50px;
  background: #c80b0b;
  border-radius: 12px;
  font-weight: 400;
  font-size: 35px;
  line-height: 35px;
  color: #121214;
  margin-top: 5%;
  margin-left: 7%;
  :hover {
    background: #ffd700;
  }
  input {
    width: 95%;
    margin-left: 2%;
    border: 2px solid transparent;
    outline: none;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #3f3f3f;
    background-color: #212121;
    color: var(--color-gray-0);
    border-radius: 5px;
    padding: 5px;
    transition: 0.5s linear;
    font-family: monospace;
    letter-spacing: 1px;
  }
  input:focus {
    border: 2px solid #ffd700;
    caret-color: #ffd700;
    color: var(--color-gray-0);
    box-shadow: 4px 4px 10px #070707;
  }

  input:focus::placeholder {
    color: #3f3f3f;
  }

  @media only screen and (max-width: 779px) {
    margin-top: 2%;
    margin-left: 0%;
  }
`;


export const StyledCartPrice = styled.p`
  color: var(--color-yellow);
`