import styled from "styled-components";

const StyledFullCart = styled.div`
    width: 344px;
    height: 525px;
    background: #212529;
    border: 2px solid #868E96;
    border-radius: 20px;
    margin-top: 7%;
    margin-left: 7%;
   
       
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

export default StyledFullCart

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
    bottom: -20px;

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
            bottom: 0;
        }
        
`