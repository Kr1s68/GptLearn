import React, {
  useContext,
  useState,
  useEffect,
  useReducer,
  useRef,
} from "react";

const SnippetContext = React.createContext();

export function useSnippet() {
  return useContext(SnippetContext);
}

export function SnippetProvider({ children }) {
  const currentSnippet = useRef();

  const setCurrentSnippet = (snippet) => {
    currentSnippet.current = snippet;
  };

  const value = {
    currentSnippet,
    setCurrentSnippet,
  };

  return (
    <SnippetContext.Provider value={value}>{children}</SnippetContext.Provider>
  );
}
