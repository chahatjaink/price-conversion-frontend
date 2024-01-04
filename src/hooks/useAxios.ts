import axios from "axios";
import React, { useEffect, useState } from "react";

export const useAxios = (url: string) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);
        const response = await axios(url);
        setData(response.data);
      } catch (error) {
        setError(error as null);
      } finally {
        setLoaded(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, loaded, error};
};
