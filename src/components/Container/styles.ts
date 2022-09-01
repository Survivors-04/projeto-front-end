import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;

  width: 95%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 75%;
  }
`;

export default StyledContainer;
