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
  max_width?: number;
}

const Button = ({
  children,
  width,
  onClick,
  textColor,
  backgroundColor,
  hover,
  transform,
  max_width,
}: iButton) => {
  return (
    <StyledButton
      width={width}
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      hover={hover}
      transform={transform}
      max_width={max_width}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
