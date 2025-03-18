import { useEffect, useState } from "react";

const localCache = {
}

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    error: null,
  });

  useEffect(() => {
    setToLoading();
    setTimeout(async () =>
      getFetch()
    , 300);
  }, [url]);
  const setToLoading = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: null,
      error: null,
    });
  };

  const getFetch = async () => {
    // await Promise.all([]);
    if(localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return;
    }
    const res = await fetch(url);
    if (!res.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: res.statusText,
      });
      return;
    }
    const data = await res.json();
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    localCache[url] = data;
    // return data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
