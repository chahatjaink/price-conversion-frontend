import { Button, Grid } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import React, { useContext } from "react";
import { CurrencyContext } from "@/context/CurrencyContext";

export const SwitchCurrency = () => {
  const { fromCurrency, toCurrency, fromValueChange, toValueChange } =
    useContext(CurrencyContext);

  const handleSwitch = () => {
    fromValueChange(toCurrency);
    toValueChange(fromCurrency);
  };

  return (
    <Grid item xs={12} md="auto">
      <Button onClick={handleSwitch} sx={{ borderRadius: 1, height: "100%" }}>
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};
