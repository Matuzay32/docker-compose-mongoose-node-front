import { React, useState, useContext } from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";
import ContextCards from "../context/ContextCards";
import Footer from "../components/Footer.jsx";
import {
  intialLinksFooter,
  intialLinksHeader,
  intialLinksHome,
} from "../helpers/constantes.js";
import { NavLink } from "react-router-dom";
import HomeHero from "../components/HomeHero";

export default function Home() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [linksHome, setlinksHome] = useState(intialLinksHome);

  return (
    <>
      <HomeHero linksFooter={linksFooter} linksHome={linksHome}></HomeHero>
    </>
  );
}
