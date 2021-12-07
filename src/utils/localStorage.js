import { useEffect, useState } from "react";

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key, defaultValue) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }
  return defaultValue;
};

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(getItem(key, defaultValue));
  useEffect(() => {
    setItem(key, state);
  }, [state]);
  return [state, setState];
};
