import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 20px 0px 20px 0px;

  width: 95%;
  max-width: 875px;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 75%;
  }
`;
