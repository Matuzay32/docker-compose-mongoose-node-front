import { React, useContext, useState, useRef } from "react";
import ContextCards from "../context/ContextCards";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
//mejorando
export default function Cards({ product }) {
  const { deleteProductForId, fetchProductsUpdate, fetchProducts, setProduct } =
    useContext(ContextCards);
  const [mostrarForm, setMostrarForm] = useState("");
  const [datosForm, setDatosForm] = useState({});

  const pressCrossForm = (e) => {
    e.preventDefault();
    //vacio el estado para que la condicion funcione
    setMostrarForm("");
  };
  //Obtengo los datos del Formulario para editar el  Producto
  const datosOnChangeForm = ({ value, name }) => {
    setDatosForm({ ...datosForm, [name]: value });
  };
  //Al tocar el boton en save actualiza el producto en la base de datos
  const saveDatosForm = (e, _id) => {
    fetchProductsUpdate(_id, datosForm);
    fetchProducts().then((res) => setProduct(res));
  };
  //Creo todos los productos
  return product.map((item, index) => {
    const { _id, price, description, name } = item;

    return (
      <>
        <div key={`${_id}`} className="contenedorCard">
          <div className="card">
            <div>
              <img
                src="https://hiperlibertad.vteximg.com.br/arquivos/ids/158862-1000-1000/Gaseosa-Coca-Cola-500-Cc-COCA-COLA--------X500ML-1-3024.jpg?v=637236253684700000"
                alt=""
              />
            </div>
            <h2>{name}</h2>
            <h4>{description}</h4>

            <h4>{`Price: ${price}`}</h4>
            <button onClick={() => deleteProductForId(_id)}>
              <span>Delete</span>
              <BsTrashFill></BsTrashFill>
            </button>

            <button value={_id} onClick={() => setMostrarForm(_id)}>
              Edit
              <FiEdit></FiEdit>
            </button>
          </div>
        </div>

        {/* Formulario de edicion */}
        {mostrarForm === _id ? console.log(true) : console.log(false)}
        {mostrarForm === _id && (
          <div className="contenedorForm">
            <form className="formStyle" action="">
              <button
                className="crossButton"
                onClick={(e) => pressCrossForm(e)}
              >
                <AiOutlineClose></AiOutlineClose>
              </button>
              <label>Product Name</label>
              <input
                onChange={(e) => datosOnChangeForm(e.target)}
                type="text"
                required
                placeholder="Product Name"
                name="name"
                defaultValue={name}
              ></input>
              <label>Description</label>
              <textarea
                onChange={(e) => datosOnChangeForm(e.target)}
                defaultValue={description}
                type="text"
                required
                placeholder="Product description"
                name="description"
              ></textarea>
              <label>Product price</label>
              <input
                onChange={(e) => datosOnChangeForm(e.target)}
                defaultValue={price}
                type="number"
                required
                placeholder="Product price"
                name="price"
              ></input>

              <button onClick={(e) => saveDatosForm(e, _id)} className="btn">
                Save
              </button>
            </form>
          </div>
        )}
      </>
    );
  });
}
