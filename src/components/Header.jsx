import { React, useRef } from "react";

export default function Header({ links }) {
  const searchRef = useRef("");

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
