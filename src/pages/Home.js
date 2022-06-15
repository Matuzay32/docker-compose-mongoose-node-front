import { React, useState, useContext } from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";
import ContextCards from "../context/ContextCards";
import { intialLinksFooter, intialLinksHeader } from "../helpers/constantes.js";

export default function Home() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);

  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <div className="homeContainer">
          <h1 className="titleHome">
            Bienvenido Yumi tu mejor opcion para hacer pedidos, Desde la
            comodidad de tu hogar
          </h1>
          <div className="heroHome">
            <h1 className="titleHome">Hero Home</h1>
          </div>
        </div>
      </Container>
    </>
  );
}
