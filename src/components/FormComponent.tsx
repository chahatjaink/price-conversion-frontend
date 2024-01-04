import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { InputAmount } from "./InputAmount";
import { SelectCountry } from "./SelectCountry";
import { SwitchCurrency } from "./SwitchCurrency";
import { useAxios } from "@/hooks/useAxios";
import { CurrencyContext } from "@/context/CurrencyContext";

export const FormComponent = () => {
  const { fromCurrency, toCurrency, fromValueChange, toValueChange } =
    useContext(CurrencyContext);

  const {
    data: currenciesData,
    loaded: currenciesLoaded,
    error: currenciesError,
  } = useAxios(`${process.env.NEXT_PUBLIC_API_URL}/token/currencies`);

  const {
    data: top100Data,
    loaded: top100Loaded,
    error: top100Error,
  } = useAxios(`${process.env.NEXT_PUBLIC_API_URL}/token/top100`);

  const coins = top100Data.map((coin) => {
    return coin.id;
  });

  if (currenciesError || top100Error) {
    return "Something went wrong";
  }

  return (
    <Grid container spacing={2}>
      <InputAmount />
      <SelectCountry
        selectLabel="from"
        options={coins}
        value={fromCurrency}
        setValue={fromValueChange}
        loaded={top100Loaded}
      />
      {/* <SwitchCurrency /> */}
      <SelectCountry
        selectLabel="to"
        options={currenciesData}
        value={toCurrency}
        setValue={toValueChange}
        loaded={currenciesLoaded}
      />
    </Grid>
  );
};
