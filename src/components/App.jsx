import { React, useState } from "react";
import Header from "./Header";
import {
  intialLinksHeader,
  intialLinksFooter,
  initailsProducts,
} from "../helpers/constantes";
import Cards from "./Cards";
import Footer from "./Footer";
import Container from "./Container";

export default function App() {
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [product, setProduct] = useState(initailsProducts);
  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <Cards product={product}></Cards>
      </Container>
    </>
  );
}
