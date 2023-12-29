import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialData) {
  const [isFetching, setIsFetching] = useState();
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const fetchedData = await fetchFn();
        setData(fetchedData);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    data,
    setData,
    error,
  };
}
