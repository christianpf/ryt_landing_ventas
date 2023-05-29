import React, { useEffect, useRef, useState } from "react";
import VideoFull from "../../components/VideoFull";

import { Container, Stack } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
import Countdown from "react-countdown";
import useMediaQuery from "../../hooks/useMediaQuery";

const VIDEO_WATCH_TIME = 5;

const Second = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isVideoActive, setIsVideoActive] = useState(false);
  const countdownRef = useRef(null);

  useEffect(() => {
    countdownRef.current.start();
  }, [isVideoActive]);

  const renderCountdown = (props) => {
    if (props.completed) {
      return (
        <button className="btn-cta">
          <span>Haga Click y empezemos a generar ventas</span>{" "}
        </button>
      );
    } else {
      return (
        <section className="countdown">
          <h4 className="countdown__title">¿Quieres ser el siguiente?</h4>
          <p className="countdown__subtitle">El sigiente paso se desbloqueará en:</p>
          <span className="countdown__timer">
            {props.formatted.hours}:{props.formatted.minutes}:{props.formatted.seconds}
          </span>
        </section>
      );
    }
  };

  return (
    <>
      <Container fluid className="hero">
        <Stack gap={1} className="col-lg-10 col-xxl-6 text-center mx-auto ">
          <h2 className="second__title">
            Estás a sólo un paso de convertirte a ti y a tu empresa en un exito
          </h2>
          <p className="subtitle">
            Descubre el método con el que conseguirás más de 30 clientes al mes
            en piloto automático
          </p>
          <div className="video__container">
            <VideoFull width={900} height={isMobile ? 300 : 400} activate={setIsVideoActive}/>
          </div>
          <Countdown ref={countdownRef} controlled={false} date={Date.now() + VIDEO_WATCH_TIME*1000} autoStart={false} renderer={renderCountdown} />

          <h2 className="text-accent-primary">En serio 100% automático</h2>
        </Stack>
      </Container>
    </>
  );
};

export default Second;
