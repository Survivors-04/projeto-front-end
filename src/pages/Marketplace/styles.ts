
import styled from "styled-components";
const StyledDivsMarket = styled.div`
display: flex;
flex-direction: row;
margin-left: 10%;

@media only screen and (max-width: 779px) {
    
    margin: 0 auto;
    width: 95%;
    max-width: 875px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;   

}
`

export default StyledDivsMarket

export const StyledDivPokemonsMarket = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
width: 60vw;
@media only screen and (max-width: 779px) {
    
    display: flex;
    flex-flow: row;
    overflow: auto;
    width: 80vw;
    margin-left: 0;   

}`

export const StyledDivSearchCard = styled.div`
display: flex;
flex-direction: column;

@media only screen and (max-width: 779px) {
    
    display: flex;
    flex-direction: column;   

}
`


export const StyledFullCart = styled.div`
    width: 280px;
    height: 525px;
    background: #212529;
    border: 2px solid #868E96;
    border-radius: 20px;
    margin-top: 7%;
    margin-left: 7%;
    @media only screen and (max-width: 779px) {
    
    margin-top: 2%;
    margin-left: 2%;
}
       
        h2{
            background: #C80B0B;
            height: 18%;
            width: 100%;
            border-radius: 20px 20px 0 0 ;
            color: black;
            display: flex;
            align-items: center; 
            justify-content: center;
        }
        p{  
            height: 60%;
            width: 100%;
            display: flex;
            align-items: center; 
            justify-content: center;
            font-size: 20px;
            font-weight: 800;
        }   

       
`

export const StyledDivOverflow = styled.div`
 
        height: 56%;
        overflow: auto;
    
`

export const StyledDivTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #C80B0B;    
    width: 100%;   
    height: 22%;        
    border-radius:  0 0 20px 20px;
    position: relative;
    bottom: -21px;
    

        h4 {
        font-weight: 700;
        font-size: 23px;
        line-height: 27px;
        color: #121214;
        margin-top: 2%;
        }

        h4 + h4 {        
        color: #FFD700;
        }

        button{
            background-color: yellow;            
            position: absolute;
            bottom: 14px;
        }
        
`

export const StyledDivTipo = styled.div`
display: flex;
flex-direction: row;
width: 150px;
height: 30px;

        p{
            font-size: 12px;
            width: 51px;
            height: 16px;
            padding: 2px;
            line-height: 1;
            color: black;
   
        }
`

export const StyledSinglePokemon = styled.div`
    background-color: #212529;
    height: 40%;
    width: 40%;
    min-width: 150px;
    max-width: 150px;
    min-height: 300px;
    max-height: 300px;
    border-radius: 20px;
    border: 2px solid #868E96;
    margin-left: 2%;
    margin-top: 2%;

    img {
    width: 80px;
    padding: 5%;
    max-height: 65px;
    border-radius: 10px;
    text-align: center;
    display: block;
    margin: auto;
    margin-top: 5%;
  }
  h2{
    font-weight: 700;
    font-size: 18px;
    line-height: 43px;
    color: #f8f9fa;
    text-align: center;
    margin-top: 5%;
  }
  
  h4{
    font-weight: 700;
    font-size: 13px;
    line-height: 26px;
    color: #868E96;
    text-align: center;
    
  }

  div{
    font-weight: 700;
    font-size: 15px;
    line-height: 35px;
    color: #868E96;
    display: flex;
    justify-content: space-around;      
    
    
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


export const StyledButtonBag = styled.button`

    background: #B0AEA1;
    border-radius: 12px;
    width: 65px;
    max-width: 65px;
    height: auto;  
    font-weight: 700;
    font-size: 15px;
    line-height: 31px;
    margin-top: 5%;
  
`

export const StyledMiniCard = styled.div`
display: flex;
background-color:  #212529;
overflow: auto;
margin-right: 3%;
width: 95%;
max-width: 253px;


img{

    border-radius: 20px;    
    max-width: 70px;
    height: 60%;
    display: block;
    margin: auto;
}
div{
    display: flex;
    flex-direction: column;
    width: 52%;
    height: 100%;
    background-color:  #212529;
    
}
p{
    margin-left: -15%;
    margin-top: 5%;
    font-size: 15px;
    
}
p + p{
    
    margin-top: 0%;
    
}
p + p + p{
     color: #FFD700
}
button{
  height: 20px;
  margin-top: 25px
}
button:hover{
  background: transparent;
  color: white;
}

`



export const StyledSearchFilter = styled.form`
width: 280px;
height: 50px;
background: #C80B0B;
border-radius: 12px;
font-weight: 400;
font-size: 35px;
line-height: 35px;
color: #121214;
margin-top: 5%;
margin-left: 7%;
:hover{
    background: #FFD700;
}
input{
    width: 95%;
    margin-left: 2%;
    border: 2px solid transparent;
    outline: none;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #3f3f3f;
    background-color: #212121;
    border-radius: 5px;
    padding: 5px;
    transition: 0.5s linear;
    font-family: monospace;
    letter-spacing: 1px;
    color: white;
}
input:focus {
    border: 2px solid #FFD700;
    caret-color:  #FFD700;
    color: white;
    box-shadow: 4px 4px 10px #070707;
  }

  input:focus::placeholder {
    color:  #3f3f3f;
  }

@media only screen and (max-width: 779px) {
    
    margin-top: 2%;
    margin-left: 0%;
}
`

