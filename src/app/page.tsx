"use client";

import { FormComponent } from "@/components/FormComponent";
import { CurrencyContext } from "@/context/CurrencyContext";
import fetchConversion from "@/services/fetchConversion";
import { Box, Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { fromCurrency, toCurrency, firstAmount } = useContext(CurrencyContext);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    const conversion = async () => {
      const data = await fetchConversion(
        fromCurrency,
        parseInt(firstAmount),
        toCurrency
      );
      setResult(data.convertedAmount);
    };
    conversion();
  }, [firstAmount, fromCurrency, toCurrency]);

  return (
    <Container maxWidth="md" sx={styles.container}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
        Stay Ahead with Accurate Conversions
      </Typography>
      <FormComponent />
      {firstAmount ? (
        <Box sx={styles.resultBox}>
          <Typography>
            {firstAmount} {fromCurrency} =
          </Typography>
          <Typography variant="h5" sx={styles.resultTypo}>
            {parseInt(result) * parseInt(firstAmount)} {toCurrency}
          </Typography>
        </Box>
      ) : null}
    </Container>
  );
}

const styles = {
  container: {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative",
  },
  resultBox: { textAlign: "left", margin: "1rem" },
  resultTypo: { marginTop: "5px", fontWeight: "bold" },
};
