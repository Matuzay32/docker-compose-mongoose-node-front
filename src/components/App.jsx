import { React, useState } from "react";
import Header from "./Header";
import { intialLinksHeader, intialLinksFooter } from "../helpers/constantes";
import Cards from "./Cards";
import Footer from "./Footer";

export default function App() {
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);
  const [linksFooter, setlinksFooter] = useState(intialLinksHeader);
  return (
    <>
      <Header links={linksHeader}></Header>
      <Cards>Cards</Cards>
      <Footer links={intialLinksFooter}>Footer</Footer>
    </>
  );
}
