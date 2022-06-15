import { React, useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Products from "../pages/Products";
import Home from "../pages/Home";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
