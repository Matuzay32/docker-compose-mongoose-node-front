import { React, useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  intialLinksHeader,
  intialLinksFooter,
  fetchProducts,
  fetchFindAllUsers,
  // initailsProducts,
} from "../helpers/constantes";
import ContextCards from "../context/ContextCards";
import Products from "../pages/Products";
import UploadProducts from "../pages/UploadProducts";
import Home from "../pages/Home";
import RegisterPage from "../pages/RegisterPage.js";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "./PageNotFound.jsx";
import UsersPage from "../pages/UsersPage";

export default function App() {
  const { product, setProduct, user, setUser } = useContext(ContextCards);
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);

  useEffect(() => {
    fetchProducts().then((x) => setProduct(x));
    fetchFindAllUsers().then((x) => setUser(x));

    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/upload" element={<UploadProducts></UploadProducts>} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/registers" element={<RegisterPage></RegisterPage>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/users" element={<UsersPage></UsersPage>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </BrowserRouter>
  );
}
