import React, { useContext } from "react";
import ContextCards from "../context/ContextCards";

export default function Login() {
  const { formDataRegisterPageFunction, sendFormDataLoginPage } =
    useContext(ContextCards);
  return (
    <section className="UploadPageSection">
      <div className="contenedorForm">
        <form className="formStyle" action="">
          <label>Username</label>
          <input
            onChange={(e) => formDataRegisterPageFunction(e.target)}
            type="text"
            required
            placeholder="Username"
            name="username"
          ></input>
          <label>Password</label>
          <input
            onChange={(e) => formDataRegisterPageFunction(e.target)}
            type="password"
            required
            placeholder="Password"
            name="password"
          ></input>
          <label>Email</label>
          <input
            onChange={(e) => formDataRegisterPageFunction(e.target)}
            type="email"
            required
            placeholder="email"
            name="email"
          ></input>

          <button onClick={(e) => sendFormDataLoginPage(e)} className="btn">
            Save
          </button>
        </form>
      </div>
    </section>
  );
}
