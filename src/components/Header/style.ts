import styled from "styled-components";

export const StyledContainer = styled.header`
  background-color: var(--color-red);
  width: 100%;
  height: 80px;

  /* position: fixed; */

  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const StyledHeaderContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    div > button {
      display: none;
    }
  }
`;

export const StyledNavButton = styled.button`
  color: var(--color-gray-4);
  background-color: transparent;

  border: none;

  font-weight: 700;
  font-size: 20px;
`;

export const StyledHeaderMobile = styled.div`
  button {
    background-color: transparent;
    border: none;
  }
`;

export const Nav = styled.nav`
  display: none;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    li > a {
      color: var(--color-gray-4);
      font-weight: 700;
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
