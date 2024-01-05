import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

export const useAxios = (url: string) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);

        const config = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };

        const response = await axios.get(url, config);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setLoaded(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loaded, error };
};
