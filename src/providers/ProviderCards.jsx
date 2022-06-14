import React, { useRef, useState } from "react";
import ContextCards from "./../context/ContextCards";
import {
  initailsProducts,
  fetchProductsDelete,
  fetchProductsUpdate,
  fetchProducts,
} from "../helpers/constantes";

export default function ProviderCards({ children }) {
  const [product, setProduct] = useState([{}]);
  const [search, setSearch] = useState("");

  //Esta funcion la uso en el header para obtener el value del input
  const handdleSearch = ({ target }) => {
    setSearch(target.value);
  };

  //Esta funcion la uso para setear el value del input en el estado Search
  const handdleSearchClick = async ({ target }) => {
    console.log("Busqueda...", search);
  };

  //Delete Product for id
  const deleteProductForId = (id) => {
    fetchProductsDelete(id).then((res) => console.log(res));
    fetchProducts().then((res) => setProduct(res));
  };

  return (
    <ContextCards.Provider
      value={{
        fetchProductsUpdate,
        handdleSearch,
        handdleSearchClick,
        search,
        product,
        setProduct,
        deleteProductForId,
      }}
    >
      {children}
    </ContextCards.Provider>
  );
}
