import React from "react";
import StyledButton from "./styles";

interface iButton {
  children: React.ReactNode;
  width: number;
  onClick?: () => void;

}

const Button = ({ children, width, onClick }: iButton) => {
  return (
    <StyledButton width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
