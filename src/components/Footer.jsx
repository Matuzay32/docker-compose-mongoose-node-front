import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer({ links }) {
  console.log(links);
  return (
    <footer className="footer">
      <ul className="ul">
        {links?.map((item, index) => {
          const { link } = item;
          if (index === 0) {
            return (
              <li key={`${item} ${index}`}>
                <a href={link}>
                  <BsInstagram></BsInstagram>
                </a>
              </li>
            );
          } else if (index === 1) {
            return (
              <li key={`${item} ${index}`}>
                <a href={link}>
                  <BsFacebook></BsFacebook>
                </a>
              </li>
            );
          } else if (index === 2) {
            return (
              <li key={`${item} ${index}`}>
                <a href={link}>
                  <BsTwitter></BsTwitter>
                </a>
              </li>
            );
          }
        })}
      </ul>
    </footer>
  );
}
