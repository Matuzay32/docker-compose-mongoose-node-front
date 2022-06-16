import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Upload() {
  return (
    <section className="UploadPageSection">
      <div className="contenedorForm">
        <form className="formStyle" action="">
          <label>Product Name</label>
          <input
            type="text"
            required
            placeholder="Product Name"
            name="name"
          ></input>
          <label>Description</label>
          <textarea
            type="text"
            required
            placeholder="Product description"
            name="description"
          ></textarea>
          <label>Product price</label>
          <input
            type="number"
            required
            placeholder="Product price"
            name="price"
          ></input>

          <button className="btn">Save</button>
        </form>
      </div>
    </section>
  );
}
