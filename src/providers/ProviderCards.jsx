import React, { useRef, useState } from "react";
import ContextCards from "./../context/ContextCards";

export default function ProviderCards({ children }) {
  const [search, setSearch] = useState("");

  const searchRef = useRef("");

  return (
    <ContextCards.Provider value={{ searchRef }}>
      {children}
    </ContextCards.Provider>
  );
}
