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
    background-color: var(--color-gray-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid;

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
      color: var(--color-gray-1);
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
    background-color: var(--color-gray-3);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid;

    p {
      word-break: normal;
      font-size: 18px;
      font-weight: 700;
      color: var(--color-gray-1);
      padding: 10px;
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
