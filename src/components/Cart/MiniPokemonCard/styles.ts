import styled from "styled-components";

const StyledMiniCard = styled.div`
display: flex;
background-color:  #212529;
overflow: auto;


img{

    border-radius: 20px;
    width: 35%;
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
    margin-left: 10%;
    margin-top: 5%;
}
p + p{
    
}

`

export default StyledMiniCard