import { React, useState, useContext } from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";
import ContextCards from "../context/ContextCards";
import { intialLinksFooter, intialLinksHeader } from "../helpers/constantes.js";

export default function UploadProducts() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);

  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <h1>Upload Products</h1>
      </Container>
    </>
  );
}
