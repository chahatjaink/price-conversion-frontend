import axios from "axios";

export default async function fetchConversion(
  from: string,
  amount: number,
  to: string
) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/token/convert",
      {
        params: {
          sourceCrypto: from,
          amount,
          targetCurrency: to,
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = response.data;
    return data.convertedAmount;
  } catch (error) {
    throw new Error("Error fetching conversion");
  }
}
