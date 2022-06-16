import { React, useState, useContext } from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";
import ContextCards from "../context/ContextCards";
import { intialLinksFooter, intialLinksHeader } from "../helpers/constantes.js";
import Upload from "../components/Upload";

export default function UploadProducts() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);

  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <Upload></Upload>
      </Container>
    </>
  );
}
