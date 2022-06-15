import { React, useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  intialLinksHeader,
  intialLinksFooter,
  fetchProducts,
  // initailsProducts,
} from "../helpers/constantes";
import ContextCards from "../context/ContextCards";
import Products from "../pages/Products";
import UploadProducts from "../pages/UploadProducts";
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
        <Route path="/" element={<Home></Home>} />
        <Route path="/upload" element={<UploadProducts></UploadProducts>} />
        <Route path="/products" element={<Products></Products>} />
      </Routes>
    </BrowserRouter>
  );
}
