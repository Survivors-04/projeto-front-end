import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  top: 0px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;

  > .menu {
    background: #ffc;
    border: 1px solid #ccc;
    border-radius: 0.3em;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
    position: absolute;
    margin-top: 80px;
    right: 10px;
    transition: opacity 0.3s ease;

    > li {
      padding: 0.2em 0.4em;
    }
  }
`;
