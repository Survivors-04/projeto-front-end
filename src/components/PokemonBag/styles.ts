import styled from "styled-components";

const StyledSinglePokemon = styled.div`
    background-color: #212529;
    height: 40%;
    width: 40%;
    min-width: 280px;
    max-width: 280px;
    min-height: 387px;
    max-height: 387px;
    border-radius: 20px;
    border: 2px solid #868E96;
    margin-left: 2%;
    margin-top: 2%;

    img {
    width: 57%;
    border-radius: 10px;
    text-align: center;
    display: block;
    margin: auto;
    margin-top: 5%;
  }
  h2{
    font-weight: 700;
    font-size: 22px;
    line-height: 43px;
    color: #868E96;
    margin-left: 10%;
    margin-top: 5%;
  }
  
  h4{
    font-weight: 700;
    font-size: 15px;
    line-height: 26px;
    color: #868E96;
    margin-left: 10%;
    
  }

  div{
    font-weight: 700;
    font-size: 20px;
    line-height: 35px;
    color: #868E96;
    display: flex;
    margin-left: 10%;
    margin-top: 5%;
    
    
  }
  span{
    color: #868E96; 
  }
  p{
    color: yellow;

  }
  button{
    margin-left: 10%;
    
  }

`

export default StyledSinglePokemon

export const StyledButtonBag = styled.button`

    background: #B0AEA1;
    border-radius: 12px;
    width: auto;
    height: auto;
    margin-left: 10%;    
    font-weight: 700;
    font-size: 15px;
    line-height: 31px;
    margin-top: 5%;
  
`