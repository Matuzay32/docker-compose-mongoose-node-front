import { React, useContext, useState, useEffect } from "react";
import Header from "./Header";
import {
  intialLinksHeader,
  intialLinksFooter,
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
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/products/allproducts");
      const data = await res.json();
      return data;
    };
    fetchProducts();
    fetchProducts().then((x) => console.log(x));

    return () => {};
  }, [product]);

  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <Cards product={product}></Cards>
      </Container>
    </>
  );
}
