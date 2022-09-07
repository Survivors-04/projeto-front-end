import React from "react";
import StyledButton from "./styles";

interface iButton {
  children: React.ReactNode;
  onClick?: () => void;
  width?: number;
  textColor?: string;
  backgroundColor?: string;
  hover?: string;
  transform?: string;
}

const Button = ({
  children,
  width,
  onClick,
  textColor,
  backgroundColor,
  hover,
  transform,
}: iButton) => {
  return (
    <StyledButton
      width={width}
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      hover={hover}
      transform={transform}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
