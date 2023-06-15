import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
    error,
    fetchData
  };
};