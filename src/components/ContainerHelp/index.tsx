import { ReactNode } from "react";
import { StyledContainer } from "./style";

interface IPropsContainerHelp {
  children: ReactNode;
}

const ContainerHelp = ({ children }: IPropsContainerHelp) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ContainerHelp;
