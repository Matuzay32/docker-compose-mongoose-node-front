import { React, useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { fetchProductsPost } from "../helpers/constantes.js";
import ContextCards from "../context/ContextCards";

export default function Upload() {
  const {
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
  } = useContext(ContextCards);
  return (
    <section className="UploadPageSection">
      <div className="contenedorForm">
        <form className="formStyle" action="">
          <label>Product Name</label>
          <input
            onChange={(e) => formDataUploadPageFunction(e.target)}
            type="text"
            required
            placeholder="Product Name"
            name="name"
          ></input>
          <label>Description</label>
          <textarea
            type="text"
            onChange={(e) => formDataUploadPageFunction(e.target)}
            required
            placeholder="Product description"
            name="description"
          ></textarea>
          <label>Product price</label>
          <input
            type="number"
            onChange={(e) => formDataUploadPageFunction(e.target)}
            required
            placeholder="Product price"
            name="price"
          ></input>

          <button onClick={(e) => sendFormData(e)} className="btn">
            Save
          </button>
        </form>
      </div>
    </section>
  );
}
