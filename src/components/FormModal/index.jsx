import React, { useEffect, useRef, useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert, Collapse, InputGroup } from "react-bootstrap";
import { Field, Formik } from "formik";
import * as yup from "yup";

import { AiOutlineClose } from "react-icons/ai";

const schema = yup.object().shape({
  nombre: yup
    .string("No se permiten números en el nombre")
    .strict()
    .required("Nombre obligatorio"),
  email: yup
    .string()
    .email("Formato de correo no valido")
    .required("Correo electrónico obligatorio"),
  phone: yup
    .number("Debe introducir solo números")
    .min(9, "Número de teléfono no válido")
    .required("Teléfono móvil obligatorio"),
});

const FormModal = ({ setData, setIsAlertOpen, ...props }) => {
  const addLead = (values) => {
    return {
      nombre: values.nombre,
      email: values.email,
      telefono: values.phone,
    };
  };

  const handleSubmit = (values) => {
    setData(addLead(values));
    setIsAlertOpen(true);
    props.onHide();
  };

  return (
    <section className="form-modal">
      <Modal {...props} centered>
        <section className="form-modal__header">
          <div className="form-modal__title">
            <h3>
              Descubre el método RYT para captar más de{" "}
              <span className="text-accent-primary underline">30 clientes</span>{" "}
              al mes
            </h3>
            <p>Consigue acceso al video, completa con tus datos.</p>
          </div>
          <button onClick={props.onHide} className="form-modal__close-button">
            <AiOutlineClose />
          </button>
        </section>
        <Modal.Body>
          <section className="col-md-8 col-12 mx-auto border p-4 rounded form-modal__form">
            <Formik
              validationSchema={schema}
              onSubmit={(values) => handleSubmit(values)}
              initialValues={{
                nombre: "",
                email: "",
                phone: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="nombre"
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.nombre && !errors.nombre}
                      isInvalid={!!errors.nombre}
                    />
                    <Form.Control.Feedback>Pinta bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.nombre}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Tu mejor correo electrónico</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Pinta bien</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Número de teléfono</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        +34
                      </InputGroup.Text>
                      <Form.Control
                        type="number"
                        placeholder="phone"
                        aria-describedby="Prefijo español"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <div className="form-modal__button-container">
                    <button className="btn-cta w-100" type="submit">
                      <span>Empezemos a generar ventas</span>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <p className="responsability">
            Al pulsar el boton aceptas que tratemos tus datos de acuerdo a
            nuestros <a href="/terms">términos y condiciones</a>
          </p>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default FormModal;
