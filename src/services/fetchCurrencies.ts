import axios from "axios";

export default async function fetchCurrencies() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/token/currencies"
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching book data");
  }
}
