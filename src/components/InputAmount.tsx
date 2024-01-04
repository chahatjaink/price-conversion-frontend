import { CurrencyContext } from "@/context/CurrencyContext";
import { Grid, InputAdornment, TextField } from "@mui/material";
import React, { useContext } from "react";

export const InputAmount = () => {
  const { firstAmount, firstAmountChange } = useContext(CurrencyContext);

  return (
    <Grid item xs={12} md>
      <TextField
        label="Amount"
        value={firstAmount}
        onChange={(e) => firstAmountChange(e.target.value)}
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};
