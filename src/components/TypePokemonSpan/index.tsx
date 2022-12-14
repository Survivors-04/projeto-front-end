import { ReactNode } from "react";
import { StyledSpan } from "./styles";

interface ISpan {
  children: ReactNode;
  backgroundColor?: string;
}

const Span = ({ children, backgroundColor }: ISpan) => {
  <StyledSpan backgroundColor={backgroundColor}>{children}</StyledSpan>;
};

export default Span;
