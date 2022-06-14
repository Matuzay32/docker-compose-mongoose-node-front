import React, { useRef, useState } from "react";
import ContextCards from "./../context/ContextCards";
const a = "dsadsadd";
export default function ProviderCards({ children }) {
  return (
    <ContextCards.Provider value={{ a }}>{children}</ContextCards.Provider>
  );
}
