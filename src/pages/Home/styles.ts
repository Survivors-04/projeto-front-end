import styled from "styled-components";
import StyledContainer from "../../components/Container/styles";

const StyledHome = styled.div`
  background-color: var(--color-red);
  height: 40px;
`;

export default StyledHome;

export const StyledBoosterList = styled.ul`
  display: flex;
  justify-content: space-between;

  margin-top: 50px;

  height: 85%;
  max-width: 93%;
  flex-wrap: wrap;

  li {
    width: 20%;
    min-width: 130px;
  }

  img {
    width: 100%;
  }

  div {
    font-size: 22px;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 24px;
    justify-self: center;
    align-self: center;
  }
`;

export const StyledInfoContainer = styled(StyledContainer)`
  padding-top: 10px;
`;

export const StyledInfo = styled.div`
  background-color: var(--color-gray-2);
  border-radius: 8px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;

  color: var(--color-gray-0);

  h3 {
    text-align: center;
  }

  ul {
    list-style: inside;
  }

  li {
    padding: 5px;
    font-size: 18px;
  }
`;
