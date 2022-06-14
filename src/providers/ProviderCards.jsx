import React, { useRef, useState } from "react";
import ContextCards from "./../context/ContextCards";
import { initailsProducts } from "../helpers/constantes";

export default function ProviderCards({ children }) {
  const [product, setProduct] = useState(initailsProducts);
  const [search, setSearch] = useState("");

  //Esta funcion la uso en el header para obtener el value del input
  const handdleSearch = ({ target }) => {
    setSearch(target.value);
    setProduct(initailsProducts);
  };
  //Esta funcion la uso para setear el value del input en el estado Search
  const handdleSearchClick = async ({ target }) => {
    console.log(search);
    setProduct(
      product.filter(
        (item) => item.name === search || item.price === parseInt(search)
      )
    );
  };
  return (
    <ContextCards.Provider
      value={{ handdleSearch, handdleSearchClick, search, product, setProduct }}
    >
      {children}
    </ContextCards.Provider>
  );
}
