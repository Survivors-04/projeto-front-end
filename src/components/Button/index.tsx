import React from "react";
import { useLocation } from "react-router-dom";
import StyledButton from "./styles";

interface iButton {
  children: React.ReactNode;
  onClick?: () => void;
  width?: number;
  textColor?: string;
  backgroundColor?: string;
  hover?: string;
}

const Button = ({
  children,
  width,
  onClick,
  textColor,
  backgroundColor,
  hover,
}: iButton) => {
  return (

    <StyledButton
      width={width}
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      hover={hover}
     
      
    >
      {children}
    </StyledButton>
  );
};

export default Button;
