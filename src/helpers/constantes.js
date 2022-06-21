import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const intialLinksHeader = [
  { link: "Home", href: "/" },
  { link: "Products", href: "/products" },
  { link: "Upload Products", href: "/upload" },
  { link: "Users", href: "/users" },
  { link: "Register", href: "/registers" },
];
export const intialLinksHome = [
  { link: "Upload", href: "/upload" },
  { link: "Register", href: "/registers" },
  { link: "Login", href: "/login" },
];
export const intialLinksFooter = [
  { link: "https://www.instagram.com/" },
  { link: "https://www.facebook.com/" },
  { link: "https://twitter.com/" },
];
export const initailsProducts = [
  { _id: 1, price: 1500, name: "coca", description: "cocacola" },
  { _id: 2, price: 2000, name: "pepsi", description: "pepsi" },
  { _id: 3, price: 2000, name: "sprite", description: "sprite" },
  { _id: 4, price: 2000, name: "fanta", description: "fanta" },
  { _id: 5, price: 2000, name: "soda", description: "soda" },
];
//FETCH_ALL_PRODUCTS
export const fetchProducts = async () => {
  const res = await fetch("http://localhost:5000/products/allproducts");
  const data = await res.json();
  return data;
};
//FETCH DELETE ONE PRODUCT
export const fetchProductsDelete = async (id) => {
  const res = await fetch(`http://localhost:5000/products/id/${id}`, {
    method: "DELETE",
  });
  const data = res.json();
  return data;
};
//FETCH Update ONE PRODUCT
export const fetchProductsUpdate = async (id, datos) => {
  const res = await fetch(`http://localhost:5000/products/id/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  const data = res.json();
  console.log(res);

  return data;
};

//FETCH post PRODUCT
export const fetchProductsPost = async (datos) => {
  const res = await fetch(`http://localhost:5000/products/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  const data = res.json();
  console.log(res);

  return data;
};

//FETCH post RegisterPage
export const fetchRegisterPagePost = async (datos) => {
  const res = await fetch(`http://localhost:5000/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  const data = res.json();
  console.log(res);

  return data;
};
