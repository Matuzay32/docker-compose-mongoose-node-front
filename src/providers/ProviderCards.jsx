import React, { useRef, useState } from "react";
import ContextCards from "./../context/ContextCards";

export default function ProviderCards({ children }) {
  const [search, setSearch] = useState("");
  const handdleSearch = ({ target }) => {
    setSearch(target.value);
  };
  const handdleSearchClick = ({ target }) => {
    console.log(search);
  };
  return (
    <ContextCards.Provider
      value={{ handdleSearch, handdleSearchClick, search }}
    >
      {children}
    </ContextCards.Provider>
  );
}
