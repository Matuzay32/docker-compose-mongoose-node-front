import React from "react";
import Container from "./Container";
import { intialLinksHeader, intialLinksFooter } from "../helpers/constantes";

export default function PageNotFound() {
  return (
    <Container linksHeader={intialLinksHeader} linksFooter={intialLinksFooter}>
      <div style={{ height: "100vh" }} className="homeContainer">
        <h1
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="titleHome"
        >
          ERROR 404 PAGE NOT FOUND
        </h1>
      </div>
    </Container>
  );
}
