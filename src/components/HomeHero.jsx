import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function HomeHero({ linksFooter, linksHome }) {
  return (
    <>
      <div className="homeContainer">
        <h1 className="titleHome">
          Bienvenido Yumi tu mejor opcion para hacer pedidos, Desde la comodidad
          de tu hogar
        </h1>

        <div className="heroHome">
          <div className="contenedorFormTitle">
            <h1 className="titleHomeForm">Register and Upload product</h1>
          </div>
          <ul>
            {linksHome?.map((item, index) => {
              const { href, link } = item;
              return (
                <li key={`${index}${link}`}>
                  <NavLink className="a" to={href}>
                    {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer links={linksFooter}></Footer>
    </>
  );
}
