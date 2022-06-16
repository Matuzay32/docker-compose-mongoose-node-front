import { React, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { fetchProductsPost } from "../helpers/constantes.js";

export default function Upload() {
  const [formData, setFormData] = useState({});

  //Obtengo los datos del formulario
  const datosForm = ({ value, name }) => {
    setFormData([{ ...formData, [name]: value }]);
  };

  //Envio los datos del formulario a la DB con el metodo upload
  const sendFormData = (e) => {
    fetchProductsPost(formData).then((x) => console.log(x));
  };

  return (
    <section className="UploadPageSection">
      <div className="contenedorForm">
        <form className="formStyle" action="">
          <label>Product Name</label>
          <input
            onChange={(e) => datosForm(e.target)}
            type="text"
            required
            placeholder="Product Name"
            name="name"
          ></input>
          <label>Description</label>
          <textarea
            type="text"
            onChange={(e) => datosForm(e.target)}
            required
            placeholder="Product description"
            name="description"
          ></textarea>
          <label>Product price</label>
          <input
            type="number"
            onChange={(e) => datosForm(e.target)}
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
