import styled from "styled-components";

export const StyledMain = styled.main`
  margin-top: 50px;
  max-height: 100%;
`;

export const StyledList = styled.ul`
  display: flex;
  overflow-x: scroll;
  max-width: 320px;
  gap: 15px;

  @media screen and (min-width: 700px) {
    max-width: 700px;
    padding: 10px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }

  li {
    background-color: var(--color-red);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    border-radius: 5px;
    padding: 10px;

    img {
      width: 150px;
      border-radius: 246px;
    }

    img:hover {
      border: 2px solid var(--color-blue);
    }

    h3,
    p,
    a {
      color: var(--color-gray-4);
    }

    a:hover {
      color: var(--color-blue);
    }
  }
`;

export const StyledListParagraph = styled.ul`
  width: 320px;
  display: flex;
  margin: auto;

  li {
    background-color: var(--color-red);
    padding: 10px;
    border-radius: 5px;

    p {
      font-size: 18px;
      color: var(--color-gray-4);
      font-weight: bold;
    }
  }
  @media screen and (min-width: 700px) {
    width: 700px;
    padding: 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 930px;
  }
`;
