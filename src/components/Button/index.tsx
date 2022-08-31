import React from "react";
import StyledButton from "./styles";

interface iButton {
  children: React.ReactNode;
  width: number
}

const Button = ({ children, width }: iButton) => {
  return <StyledButton width={width}> {children} </StyledButton>;
};

export default Button;
