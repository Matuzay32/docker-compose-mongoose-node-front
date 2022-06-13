import React from "react";
import Header from "./Header";
import { intialLinksHeader } from "../helpers/constantes";

export default function App() {
  return <Header links={intialLinksHeader}></Header>;
}
