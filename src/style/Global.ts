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
    --color-gray-0: #F8F9FA;
    --color-yellow: #FFD700;
    --color-yellow-focus: #FFDB4D;
    --color-blue: #4169E1;
    --color-success: #168821;
    --color-error: #E60000;
    
    --color-type-normal: #B0AEA1;
    --color-type-poison: #A35994;
    --color-type-psychic: #EE59A0;
    --color-type-grass: #7BC45B;
    --color-type-ground: #D7B960;
    --color-type-ice: #80DEFA;
    --color-type-fire: #EB4D44;
    --color-type-rock: #BCAE70;
    --color-type-dragon: #8170E9;
    --color-type-water: #46A0F8;
    --color-type-bug: #AFBF45;
    --color-type-dark: #826152;
    --color-type-fighting: #B15747;
    --color-type-ghost: #6E6DBB;
    --color-type-steel: #B3B2C4;
    --color-type-flying: #6E97EF;
    --color-type-electric: #F8D151;
    --color-type-fairy: #E6A0E6;

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
    background: var(--color-red);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray-2);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-4);
  }
`;
