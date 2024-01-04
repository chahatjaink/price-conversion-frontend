"use client";

import { ReactNode, createContext, useState } from "react";

interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyContext = createContext<{
  fromCurrency: string;
  toCurrency: string;
  fromValueChange: (value: string) => void;
  toValueChange: (value: string) => void;
  firstAmount: string;
  firstAmountChange: (value: string) => void;
}>({
  fromCurrency: "",
  toCurrency: "",
  fromValueChange: () => {},
  toValueChange: () => {},
  firstAmount: "1",
  firstAmountChange: () => {},
});

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({
  children,
}) => {
  const [fromCurrency, setFromCurrency] = useState("bitcoin");
  const [toCurrency, setToCurrency] = useState("usd");
  const [firstAmount, setFirstAmount] = useState("1");

  const fromValueChange = (value: string) => {
    setFromCurrency(value);
  };

  const toValueChange = (value: string) => {
    setToCurrency(value);
  };

  const firstAmountChange = (value: string) => {
    setFirstAmount(value);
  };

  const value = {
    fromCurrency,
    toCurrency,
    fromValueChange,
    toValueChange,
    firstAmount,
    firstAmountChange,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
