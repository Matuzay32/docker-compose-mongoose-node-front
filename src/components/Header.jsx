import React from "react";

export default function Header({ links }) {
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

      <input className="inputSearch" type="search" placeholder="Search..." />
      <button className="buttonSearch">Search</button>
    </header>
  );
}
