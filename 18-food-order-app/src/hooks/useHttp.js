import { useCallback, useEffect, useState } from "react";

async function makeHttpCall(url, options) {
  const defaultErrorMessage = `Error calling /${options.method} ${url}`;
  try {
    const response = await fetch(url, options);
    const respBody = await response.json();

    if (!response.ok) {
      throw new Error(respBody.message || defaultErrorMessage);
    }

    return respBody;
  } catch (error) {
    throw new Error(error.message || defaultErrorMessage);
  }
}

export default function useHttp(url, options = { method: "GET" }) {
  const [isFetching, setIsFetching] = useState(false);
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsFetching(true);
      try {
        const httpConfig = data ? {...options, body: data} : {...options};
        const responseData = await makeHttpCall(url, httpConfig );
        setResponse(responseData);
      } catch (error) {
        setError(error.message);
      }
      setIsFetching(false);
    },
    [url, options]
  );

  useEffect(() => {
    if (options.method === "GET" && !response) {
      sendRequest();
    }
  }, [sendRequest, options]);

  return {
    isFetching,
    response,
    error,
    sendRequest,
  };
}
