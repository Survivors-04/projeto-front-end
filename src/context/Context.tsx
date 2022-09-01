import React, { ReactNode } from "react";
import ModalProvider from "./ModalContext";
import UserProvider from "./UserContext";

interface iContext {
  children: ReactNode;
}

const Context = ({ children }: iContext) => {
  return <UserProvider><ModalProvider>{children}</ModalProvider></UserProvider>;
};

export default Context;
