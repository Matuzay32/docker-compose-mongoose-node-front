import React, { useRef, useState } from "react";
import ContextCards from "./../context/ContextCards";
import {
  initailsProducts,
  fetchProductsDelete,
  fetchProductsUpdate,
  fetchProducts,
  fetchProductsPost,
  fetchRegisterPagePost,
  fetchLoginPagePost,
  searchFetchProducts,
  fetchFindAllUsers,
  searchFetchUsers,
  fetchUsersDelete,
} from "../helpers/constantes";

export default function ProviderCards({ children }) {
  //ESTADO DE TODOS LOS PRODUCTOS
  const [product, setProduct] = useState([{}]);
  //ESTADO DE TODOS LOS USUARIOS
  const [user, setUser] = useState([{}]);

  //BUSQUEDA POR AHORA DE PRODUCTOS
  const [search, setSearch] = useState("");

  //MUESTRA EL FORM DE LA CARD O LO OCULTA
  const [mostrarForm, setMostrarForm] = useState("");
  //DATOS FORM DE PRODUCTS TANTO EL FORMULARIO DE LA CARTA COMO EL FORMLARIO
  const [datosForm, setDatosForm] = useState({});
  const [formData, setFormData] = useState({});
  //DATOS FORM DE RegisterPage
  const [datosFormPageRegister, setDatosFormFormPageRegister] = useState({});
  const [formDataPageRegister, setFormDataPageRegister] = useState({});

  //DELETE USER FOR ID
  const deleteUserForId = (id) => {
    console.log(id, "este es mi id");
    fetchUsersDelete(id).then((x) => console.log(x));
    fetchFindAllUsers().then((res) => setUser(res));
  };

  //LOGIN
  const sendFormDataLoginPage = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formDataPageRegister));

    fetchLoginPagePost(formDataPageRegister).then((x) =>
      sessionStorage.setItem("token", JSON.stringify(x))
    );
  };

  //REGISTER
  const formDataRegisterPageFunction = ({ value, name }) => {
    setFormDataPageRegister({ ...formDataPageRegister, [name]: value });
  };

  //REGISTER
  const sendFormDataRegisterPage = (e) => {
    // e.preventDefault();
    fetchRegisterPagePost(formDataPageRegister);
    // fetchProducts().then((res) => setProduct(res));
  };
  //REGISTER
  const datosOnChangeFormRegisterPage = ({ value, name }) => {
    setDatosForm({ ...datosFormPageRegister, [name]: value });
  };
  //Envio los datos del formulario a la DB con el metodo upload
  const sendFormData = (e) => {
    // e.preventDefault();
    fetchProductsPost(formData);
    fetchProducts().then((res) => setProduct(res));
  };

  //Esta funcion la uso en el header para obtener el value del input
  const handdleSearch = ({ target }) => {
    console.log(target.value);
    setSearch(target.value);
  };

  //Esta funcion la uso para setear el value del input en el estado Search
  const handdleSearchClick = async ({ target }) => {
    console.log("Busqueda...", search);
    searchFetchProducts(search).then((res) => setProduct(res));
    searchFetchUsers(search).then((res) => setUser(res));
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
  //PRODUCTOS
  const formDataUploadPageFunction = ({ value, name }) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <ContextCards.Provider
      value={{
        deleteUserForId,
        user,
        setUser,
        searchFetchProducts,
        sendFormDataLoginPage,
        formDataRegisterPageFunction,
        datosOnChangeFormRegisterPage,
        sendFormDataRegisterPage,
        datosFormPageRegister,
        setDatosFormFormPageRegister,
        formDataPageRegister,
        setFormDataPageRegister,
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
