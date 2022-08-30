import React from "react";

interface iButton {
  children: React.ReactNode;
}

const Button = ({ children }: iButton) => {
  return <> {children} </>;
};

export default Button;
