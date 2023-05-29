import { useEffect, useRef, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import { AiOutlineArrowDown } from "react-icons/ai";
import gif from "../../assets/giphy.gif";
import playButton from "../../assets/play_button.png";
import FormModal from "../FormModal";
import { useNavigate } from "react-router";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLead, setNewLead] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(newLead !== null) {
      setTimeout(() => {
        navigate("1_ver_video");
      }, 3000)
    }
  }, [newLead]);

  return (
    <Container fluid className="hero">
      <Stack gap={3} className="col-lg-10 col-xxl-6 text-center mx-auto ">
        <h1>
          DESCUBRE CÓMO HEMOS AYUDADO A CIENTOS DE NEGOCIOS CON NUESTRO{" "}
          <span className="text-accent-primary">METÓDO RYT</span>
        </h1>
        <p className="subtitle">
          Descubre el método con el que conseguirás más de 30 clientes al mes en
          piloto automático
        </p>
        {isAlertOpen && (
            <Alert variant="success" onClose={() => setIsAlertOpen(false)} style={{color: "black", letterSpacing: "0px"}} dismissible>
              <h3>Creado nuevo Lead: {JSON.stringify(newLead)}</h3>
              <h4>Datos correctos, estás siendo llevado a la siguiente página...</h4>
            </Alert>
          )}
        <div className="video__container">
          <h3>
            <AiOutlineArrowDown />
            Mira este video y sabrás como <AiOutlineArrowDown />
          </h3>
          <img src={gif} alt="video" />
          <button
            aria_label="iniciar video"
            className="play_button"
            onClick={() => setIsModalOpen(true)}
            disabled={isAlertOpen}
          >
            <img src={playButton} alt="Iniciar video" />
          </button>
        </div>

        <h2>¿A QUÉ ESPERAS? DA UN SALTO HACIA DELANTE</h2>
        <button className="btn-cta" onClick={() => setIsModalOpen(true)} disabled={isAlertOpen}>
          <span>Haga Click y empezemos a generar ventas</span>{" "}
        </button>
        <h2 className="text-accent-primary">En serio 100% automático</h2>
        {isModalOpen && (
          <FormModal
            size="lg"
            backdrop="static"
            show={isModalOpen}
            onHide={() => setIsModalOpen(false)}
            setData={setNewLead}
            setIsAlertOpen={setIsAlertOpen}
          />
        )}
      </Stack>
    </Container>
  );
};

export default Hero;
