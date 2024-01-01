"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const ConversionForm = () => {
  const [coin, setCoin] = useState("");
  const [amount, setAmount] = useState("");

  const coins = ["btc", "eth", "sol"]; // Add more coins as needed

  const handleCoinChange = (event: any) => {
    setCoin(event.target.value);
  };

  const handleAmountChange = (event: any) => {
    const input = event.target.value.replace(/[^0-9]/g, ""); // Accepts only numbers
    setAmount(input);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Coin:", coin);
    console.log("Amount:", amount);
    // Perform further actions like API calls, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField
          label="Amount"
          type="text"
          value={amount}
          onChange={handleAmountChange}
          fullWidth
          required
        />
        <FormControl fullWidth>
          <InputLabel id="coin-label">Coin</InputLabel>
          <Select
            labelId="coin-label"
            value={coin}
            onChange={handleCoinChange}
            required
          >
            {coins.map((coinOption) => (
              <MenuItem key={coinOption} value={coinOption}>
                {coinOption.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Convert
        </Button>
      </Box>
    </form>
  );
};
