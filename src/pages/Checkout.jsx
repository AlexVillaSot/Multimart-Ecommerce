import React from "react";
import "../styles/checkout.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout​">
      <CommonSection title=" ​💳​ Verificación de Compra ​💳​" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">🧾 ​Datos de facturación 🧾​</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Ingrese su nombre" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Número de teléfono" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Dirección de habitación" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Ciudad" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Código Postal" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="País" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Cantidad Total: <span>{totalQty} productos</span>
                </h6>
                <h6>
                  Sub-Total: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Envío: <br /> Envío Gratis!
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Precio Total: <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Continuar Pedido
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
