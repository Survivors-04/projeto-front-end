import styled from "styled-components";

export const StyledContainer = styled.header`
  background-color: var(--color-red);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  div {
    display: flex;

    .logoGroup {
      width: 130px;
    }

    .button-menu {
      border: none;
      background-color: var(--color-red);
      position: fixed;
      right: 0;
    }
  }
`;
