import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
    --color-red: #C80B0B;
    --color-red-focus: #FD1515;
    --color-gray-4: #121214;
    --color-gray-3: #212529;
    --color-gray-3-background: rgba(33, 37, 41, 0.85);
    --color-gray-2: #343B41;
    --color-gray-1: #868E96;
    --color-yellow: #FFD700;
    --color-yellow-focus: #FFDB4D;
    --color-blue: #4169E1;
    --color-success: #168821;
    --color-error: #E60000;
    font-size: 60%; 
    --toastify-icon-color-success: var(--color-success);
    --toastify-icon-color-error: var(--color-error);
    --toastify-color-progress-success: var(--color-success);
    --toastify-color-progress-error: var(--color-error);
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  body {
    background: var(--color-gray-4);
    color: var(--color-gray-1);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Jura', sans-serif;
    font-size: 1.6rem;
  }
  h1, h2, h3 {
    font-weight: bold;
    color: var(--color-gray-0)
  }
  h4,h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  h1{
    color: var(--color-primary)
  }
  h4{
    color: var(--color-error);
  }
  a {
    text-decoration: none;
    color: var(--color-gray-4);
  }
  ul {
    list-style: none;
  }
  span {
    color: var(--color-yellow)
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-focus);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-negative);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;
