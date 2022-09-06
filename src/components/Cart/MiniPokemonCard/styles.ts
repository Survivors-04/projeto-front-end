import styled from "styled-components";

const StyledMiniCard = styled.div`
display: flex;
background-color:  #212529;
overflow: auto;


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

`

export default StyledMiniCard