import React, { useRef, useState } from "react";
import ContextCards from "./../context/ContextCards";
import {
  initailsProducts,
  fetchProductsDelete,
  fetchProductsUpdate,
  fetchProducts,
  fetchProductsPost,
} from "../helpers/constantes";

export default function ProviderCards({ children }) {
  //ESTADO DE TODOS LOS PRODUCTOS
  const [product, setProduct] = useState([{}]);

  //BUSQUEDA POR AHORA DE PRODUCTOS
  const [search, setSearch] = useState("");

  //MUESTRA EL FORM DE LA CARD O LO OCULTA
  const [mostrarForm, setMostrarForm] = useState("");
  //DATOS FORM DE PRODUCTS TANTO EL FORMULARIO DE LA CARTA COMO EL FORMLARIO
  const [datosForm, setDatosForm] = useState({});
  const [formData, setFormData] = useState({});

  //Obtengo los datos del formulario
  const formDataUploadPageFunction = ({ value, name }) => {
    setFormData({ ...formData, [name]: value });
  };

  //Envio los datos del formulario a la DB con el metodo upload
  const sendFormData = (e) => {
    // e.preventDefault();
    fetchProductsPost(formData);
    fetchProducts().then((res) => setProduct(res));
  };

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
    fetchProductsDelete(id);
    fetchProducts().then((res) => setProduct(res));
  };
  //Esto oculta el formulario de la card de productos
  const pressCrossForm = (e) => {
    e.preventDefault();
    //vacio el estado para que la condicion funcione
    setMostrarForm("");
  };

  //Obtengo los datos del Formulario para editar el  Producto
  const datosOnChangeForm = ({ value, name }) => {
    setDatosForm({ ...datosForm, [name]: value });
  };

  //Al tocar el boton en save del form de productos se actualiza
  const saveDatosForm = (e, _id) => {
    e.preventDefault();
    fetchProductsUpdate(_id, datosForm);
    fetchProducts().then((res) => setProduct(res));
  };

  return (
    <ContextCards.Provider
      value={{
        formData,
        setFormData,
        formDataUploadPageFunction,
        sendFormData,
        mostrarForm,
        datosForm,
        setDatosForm,
        setMostrarForm,
        pressCrossForm,
        datosOnChangeForm,
        fetchProductsUpdate,
        saveDatosForm,
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
