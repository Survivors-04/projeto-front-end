import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface iModalContext {
  isModalHome: boolean;
  setisModalHome: Dispatch<SetStateAction<boolean>>;
  isModalDice: boolean;
  setIsModalDice: Dispatch<SetStateAction<boolean>>;
  isModalHeader: boolean;
  setIsModalHeader: Dispatch<SetStateAction<boolean>>;
}

interface iModalProvider {
  children: ReactNode;
}

export const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalProvider) => {
  const [isModalHome, setisModalHome] = useState(false);
  const [isModalDice, setIsModalDice] = useState(false);
  const [isModalHeader, setIsModalHeader] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalHome,
        setisModalHome,
        isModalDice,
        setIsModalDice,
        isModalHeader,
        setIsModalHeader,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
