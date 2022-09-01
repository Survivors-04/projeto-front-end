import styled from "styled-components";

const StyledHome = styled.div`
  background-color: var(--color-red);
  height: 40px;
`;

export default StyledHome;

export const StyledBoosterList = styled.ul`
  margin-top: 40px;

  display: flex;
  justify-content: space-between;

  li {
    width: 20%;
    
  }

  img {
    width: 100%;
  }

  div {
    height: 12%;
    display: flex;
    flex-direction: column;
  }

  h3 {
    justify-self: center;
    align-self: center;
    
  }
`;
