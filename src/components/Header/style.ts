import styled from "styled-components";

export const StyledContainer = styled.header`
  background-color: var(--color-red);
  width: 100%;
  height: 80px;
  align-items: center;

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: space-around;
    gap: 120px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    width: 130px;
    margin-top: 15px;
  }

  button {
    border: none;
    background-color: var(--color-red);

    img {
      width: 50px;
    }
  }

  @media screen and (min-width: 700px) {
    button {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: 700px) {
    display: flex;

    ul {
      display: flex;
      gap: 15px;

      li {
        a {
          color: var(--color-gray-4);
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
`;
