import React, { ReactNode } from "react";
import ModalProvider from "./ModalContext";

interface iContext {
  children: ReactNode;
}

const Context = ({ children }: iContext) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Context;
