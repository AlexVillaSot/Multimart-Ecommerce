import React from "react";
import "../Footer/footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="nav__wrapper">
              <div className="logo">
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              corrupti quas nostrum ad debitis repellat quae aut voluptate odit
              enim?
            </p>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Mejores Categorías</h4>
              <ListGroup>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Teléfonos Móviles</Link>
                  </ListGroupItem>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Sofás Modernos</Link>
                  </ListGroupItem>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Sillones de Lujo</Link>
                  </ListGroupItem>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Relojes Inteligentes</Link>
                  </ListGroupItem>
                </motion.div>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Enlaces</h4>
              <ListGroup>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/shop">Tienda</Link>
                  </ListGroupItem>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/cart">Carrito</Link>
                  </ListGroupItem>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/login">Inicio de Sesión</Link>
                  </ListGroupItem>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Políticas de Privacidad</Link>
                  </ListGroupItem>
                </motion.div>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contáctanos</h4>
              <ListGroup className="footer__contact">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    <p>2097 S Sheridan Blvd, Denver, Colorado </p>
                  </ListGroupItem>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>
                    <p>+1-(202)-555-0199 </p>
                  </ListGroupItem>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>
                    <p>multimartmarket@ecommerce.com</p>
                  </ListGroupItem>
                </motion.div>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Multimart © {year} - Developed with ❤️ by AlexCode. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
