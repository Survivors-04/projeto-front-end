import styled from "styled-components";

const StyledEmptyCart = styled.div`
    width: 280px;
    height: 525px;
    background: #212529;
    border: 2px solid #868E96;
    border-radius: 20px;
    margin-top: 7%;
    margin-left: 7%;
    @media only screen and (max-width: 779px) {
    
    margin-top: 2%;
    margin-left: 0%;
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
        div{
            background: #C80B0B;
            height: 22%;
            width: 100%;            
            bottom: 0;
            border-radius:  0 0 20px 20px;
        }


        button{
            background-color: yellow;
            margin-left: 10%;
            margin-top: 8%;
        }
`

export default StyledEmptyCart

export const StyledDivTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

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

`