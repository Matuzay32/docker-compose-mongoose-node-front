import { React, useState, useContext } from "react";
import Container from "../components/Container";
import ContextCards from "../context/ContextCards";
import { intialLinksFooter, intialLinksHeader } from "../helpers/constantes.js";
import Login from "../components/Login";

export default function LoginPage() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);

  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <Login></Login>
      </Container>
    </>
  );
}
