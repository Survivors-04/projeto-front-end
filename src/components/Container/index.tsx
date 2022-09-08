import React from "react";
import StyledContainer from "./styles";

interface iContainer {
  children: React.ReactNode;
}

const Container = ({ children }: iContainer) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
