import React from "react";
import Header from "./Header";
import { intialLinksHeader } from "../helpers/constantes";
import Cards from "./Cards";

export default function App() {
  return (
    <>
      <Header links={intialLinksHeader}></Header>
      <Cards>Cards</Cards>
    </>
  );
}
