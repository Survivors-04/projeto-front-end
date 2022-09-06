import styled from "styled-components";

export const StyledDivSearch = styled.div`
background-color: blue;
min-width: 270px;
min-height: 248px;
width: 30vw;
height: 30vh;  
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
background: rgba(33, 37, 41, 0.85);
border: 2px solid #868E96;
border-radius: 12px;
font-size: 22px;
    


h2{
    font-size: 18px;
    color: #FFD700;
}
input{
    width:50%;
    color: black;
    font-weight: 700;
    height: 12%;
}
select{
    width: 50%;
    font-family: 'Jura', sans-serif;
    font-weight: 700;
    height: 12%;

}
button{
    margin-top: 2%;
    background: #C80B0B;
    border-radius: 12px;
    width: 50%;
    height: 20%;
    font-weight: 700;

}
button:hover{
    background: #FFD700;
}

`

