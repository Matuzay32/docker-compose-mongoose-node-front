import { React, useState, useContext } from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";
import ContextCards from "../context/ContextCards";
import { intialLinksFooter, intialLinksHeader } from "../helpers/constantes.js";
import ProductNotFound from "../components/ProductNotFound.jsx";

export default function Products() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);

  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        {product.length > 0 ? (
          <Cards setProduct={setProduct} product={product}></Cards>
        ) : (
          <ProductNotFound></ProductNotFound>
        )}
      </Container>
    </>
  );
}
