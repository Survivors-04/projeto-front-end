import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface iMarketProvider {
  children: ReactNode;
}

export interface IMarket {
  Pokemon: string;
  Rarity: string;
  Number: number;
  Type01: string;
  Type02: string;
  id: string | number;
}

interface iMarketContext {
  total: number;
  setTotal: Dispatch<React.SetStateAction<number>>;
  currentCart: IMarket[];
  setCurrentCart: Dispatch<SetStateAction<IMarket[]>>;
}

export const MarketContext = createContext<iMarketContext>(
  {} as iMarketContext
);

const MarketProvider = ({ children }: iMarketProvider) => {
  const [currentCart, setCurrentCart] = useState<IMarket[]>([]);
  const [total, setTotal] = useState(0);

  return (
    <MarketContext.Provider
      value={{
        total,
        setTotal,
        currentCart,
        setCurrentCart,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export default MarketProvider;
