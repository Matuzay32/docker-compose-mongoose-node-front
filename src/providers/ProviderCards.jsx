import React, { useRef, useState } from "react";
import ContextCards from "./../context/ContextCards";
import { initailsProducts } from "../helpers/constantes";

export default function ProviderCards({ children }) {
  const [product, setProduct] = useState(initailsProducts);

  const [search, setSearch] = useState("");
  const handdleSearch = ({ target }) => {
    setSearch(target.value);
    setProduct(initailsProducts);
  };
  const handdleSearchClick = ({ target }) => {
    console.log(search);
    setProduct(
      product.filter(
        (item) => item.name === search || item.price === parseInt(search)
      )
    );
  };
  return (
    <ContextCards.Provider
      value={{ handdleSearch, handdleSearchClick, search, product }}
    >
      {children}
    </ContextCards.Provider>
  );
}
