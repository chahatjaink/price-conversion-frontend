import axios from "axios";

export default async function fetchTop100Tokens() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/token/top100"
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching top100 tokens:", error);
    throw new Error("Error fetching top100 tokens");
  }
}
