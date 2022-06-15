import React from "react";
import Cards from "../components/Cards";
import Container from "../components/Container";

export default function Products() {
  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <Cards product={product}></Cards>
      </Container>
    </>
  );
}
