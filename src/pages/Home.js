import { React, useState, useContext } from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";
import ContextCards from "../context/ContextCards";
import Footer from "../components/Footer.jsx";
import {
  intialLinksFooter,
  intialLinksHeader,
  intialLinksHome,
} from "../helpers/constantes.js";
import { NavLink } from "react-router-dom";

export default function Home() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);
  const [linksHome, setlinksHome] = useState(intialLinksHome);

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
    </>
  );
}
