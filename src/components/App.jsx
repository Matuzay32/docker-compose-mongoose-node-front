import { React, useContext, useState, useEffect } from "react";
import Header from "./Header";
import {
  intialLinksHeader,
  intialLinksFooter,
  fetchProducts,
  // initailsProducts,
} from "../helpers/constantes";
import Cards from "./Cards";
import Footer from "./Footer";
import Container from "./Container";
import ContextCards from "../context/ContextCards";

export default function App() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);

  useEffect(() => {
    fetchProducts().then((x) => setProduct(x));

    return () => {};
  }, []);

  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <Cards product={product}></Cards>
      </Container>
    </>
  );
}
