import { ReactNode } from "react";
import { StyledParagraph } from "./styles";

interface IParagraph {
  children: ReactNode;
  backgroundColor?: string;
}

const Paragraph = ({ children, backgroundColor }: IParagraph) => {
  <StyledParagraph backgroundColor={backgroundColor}>
    {children}
  </StyledParagraph>;
};

export default Paragraph;
