import React from "react";

import logo from "../../assets/logo.webp"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <article className="footer__container">
      <p className="footer__links">
      <Link to="https://www.rytagency.es" aria-label="Link a rytagency"><img src={logo} alt="Logo RYT" className='logo' /></Link>
      </p>
        <p className="footer__links">

          <Link to="privacidad">Política de Privacidad</Link> |{" "}
          <Link to="cookies"> Política de Cookies</Link> |{" "}
          <Link to="legal">Aviso Legal</Link>
        </p>
        <p>
        Copyright rytagency.es &#174;
        </p>
        Todos los derechos reservados. RYT agency es una marca registrada
        Este sitio no forma parte de Facebook Inc. Adicionalmente, este sitio no
        está avalado por Facebook o Instagram de ninguna manera. Facebook es un
        trademark de facebook, Inc.
      </article>
    </Container>
  );
};

export default Footer;
