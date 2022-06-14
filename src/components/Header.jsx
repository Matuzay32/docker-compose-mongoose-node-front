import { React, useContext, useRef } from "react";
import ContextCards from "../context/ContextCards";

export default function Header({ links }) {
  const contexto = useContext(ContextCards);
  console.log(contexto, "desde el header");
  const { searchRef } = contexto;

  const handdleClickSearch = ({ target }) => {
    const { current: busquedaInput } = searchRef;
    console.log("Buqueda...", busquedaInput.value);
  };
  return (
    <header className="header">
      <ul className="ul">
        {links?.map((item, index) => {
          const { link } = item;
          return (
            <li key={`${index} ${link}`} className="li">
              <a className="a" href="#">
                {link}
              </a>
            </li>
          );
        })}
      </ul>

      <input
        ref={searchRef}
        className="inputSearch"
        type="search"
        placeholder="Search..."
      />

      <button onClick={(ev) => handdleClickSearch(ev)} className="buttonSearch">
        Search
      </button>
    </header>
  );
}
