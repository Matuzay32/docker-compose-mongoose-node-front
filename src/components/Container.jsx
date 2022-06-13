import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Container({ children, linksHeader, linksFooter }) {
  return (
    <Fragment>
      <Header links={linksHeader}></Header>
      <section className="cardSection">{children}</section>

      <Footer links={linksFooter}></Footer>
    </Fragment>
  );
}
