
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
