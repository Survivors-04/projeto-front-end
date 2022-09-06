import React, { ReactNode } from "react";
import MarketProvider from "./marketContext";
import ModalProvider from "./ModalContext";
import UserProvider from "./UserContext";

interface iContext {
  children: ReactNode;
}

const Context = ({ children }: iContext) => {
  return (
    <UserProvider>
      <MarketProvider>
      <ModalProvider>{children}</ModalProvider>
      </MarketProvider>
    </UserProvider>
  );
};

export default Context;
