import { React, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import ContextCards from "../context/ContextCards";

export default function Header({ links }) {
  const { handdleSearch, handdleSearchClick } = useContext(ContextCards);

  return (
    <header className="header">
      <ul className="ul">
        {links?.map((item, index) => {
          const { link } = item;
          return (
            <li key={`${index} ${link}`} className="li">
              <NavLink to={`/${link}`} className="a">
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <input
        onChange={(e) => handdleSearch(e)}
        className="inputSearch"
        type="search"
        placeholder="Search..."
      />

      <button onClick={(e) => handdleSearchClick(e)} className="buttonSearch">
        Search
      </button>
    </header>
  );
}
