import styled from "styled-components";

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
  max-height: 560px;
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
