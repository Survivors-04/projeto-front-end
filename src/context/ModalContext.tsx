import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface iModalContext {
  isModalHome: boolean;
  setisModalHome: Dispatch<SetStateAction<boolean>>;
  isModalDice: boolean;
  setIsModalDice: Dispatch<SetStateAction<boolean>>;
  isModalHeader: boolean;
  setIsModalHeader: Dispatch<SetStateAction<boolean>>;
  isModalSearch: boolean;
  setIsModalSearch: Dispatch<SetStateAction<boolean>>;
  isModalConfirm: boolean;
  setIsModalConfirm: Dispatch<SetStateAction<boolean>>;
  isModalConfirmMarket: boolean;
  setIsModalConfirmMarket: Dispatch<SetStateAction<boolean>>;
  isModalLogout: boolean;
  setIsModalLogout: Dispatch<SetStateAction<boolean>>;
}

interface iModalProvider {
  children: ReactNode;
}

export const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalProvider) => {
  const [isModalHome, setisModalHome] = useState(false);
  const [isModalDice, setIsModalDice] = useState(false);
  const [isModalHeader, setIsModalHeader] = useState(false);
  const [isModalSearch, setIsModalSearch] = useState(false);
  const [isModalConfirm, setIsModalConfirm] = useState(false);
  const [isModalConfirmMarket, setIsModalConfirmMarket] = useState(false);
  const [isModalLogout, setIsModalLogout] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isModalHome,
        setisModalHome,
        isModalDice,
        setIsModalDice,
        isModalHeader,
        setIsModalHeader,
        isModalSearch,
        setIsModalSearch,
        isModalConfirm,
        setIsModalConfirm,
        isModalConfirmMarket,
        setIsModalConfirmMarket,
        isModalLogout,
        setIsModalLogout,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
