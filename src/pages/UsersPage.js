import { React, useState, useContext } from "react";
import Container from "../components/Container";
import ContextCards from "../context/ContextCards";
import { intialLinksFooter, intialLinksHeader } from "../helpers/constantes.js";
import UsersTable from "../components/UsersTable";

export default function UsersPage() {
  const context = useContext(ContextCards);
  const { product, setProduct } = context;
  const [linksFooter, setlinksFooter] = useState(intialLinksFooter);
  const [linksHeader, setlinksHeader] = useState(intialLinksHeader);

  return (
    <>
      <Container linksHeader={linksHeader} linksFooter={linksFooter}>
        <UsersTable></UsersTable>
      </Container>
    </>
  );
}
