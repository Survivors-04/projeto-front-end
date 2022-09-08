import styled from "styled-components";

export const StyledSideHeader = styled.ul`
  height: 100%;
  width: 60%;
  max-width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: var(--color-red);
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  li {
    color: var(--color-gray-4);
    padding: 15px;

    text-decoration: none;
    font-size: 20px;
    font-weight: 700;

    display: block;

    transition: 0.3s;
  }

  li > svg {
    margin-right: 5px;
  }

  li > span {
    margin-left: 5px;
  }
`;
