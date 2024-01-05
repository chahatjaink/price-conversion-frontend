import { CurrencyContext } from "@/context/CurrencyContext";
import fetchConversion from "@/services/fetchConversion";
import { AxiosError } from "axios";
import { useState, useEffect, useContext } from "react";

const useCurrencyConversion = () => {
  const { fromCurrency, toCurrency, firstAmount } = useContext(CurrencyContext);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const convertCurrency = async () => {
      try {
        const data = await fetchConversion(
          fromCurrency,
          parseInt(firstAmount),
          toCurrency
        );
        setResult(data);
        setError(null);
      } catch (error) {
        console.error("Error during currency conversion:", error);
        setError(error as AxiosError);
      }
    };

    convertCurrency();
  }, [fromCurrency, toCurrency, firstAmount]);

  const calculatedResult = parseFloat(result);

  return { calculatedResult, fromCurrency, toCurrency, firstAmount, error };
};

export default useCurrencyConversion;
