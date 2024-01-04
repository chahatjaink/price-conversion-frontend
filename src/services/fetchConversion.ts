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
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching conversion:", error);
    throw new Error("Error fetching conversion");
  }
}
