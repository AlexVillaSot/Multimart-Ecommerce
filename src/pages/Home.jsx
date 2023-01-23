import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";
import products from "../assets/data/products";
import Services from "../services/Services";
import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import "../styles/home.css";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [watchProducts, setWatchProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "Sillas"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "Sofá"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "Móviles"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "Periféricos"
    );

    const filteredWatchProducts = products.filter(
      (item) => item.category === "Relojes"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setWatchProducts(filteredWatchProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">
                  Productos en tendencia del {year}
                </p>
                <h2>Haz que tus espacios sean Minimalistas y Modernos</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum ipsum earum repellat quisquam odit voluptates, quas
                  consequuntur reiciendis animi facilis?
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="shop">COMPRA AHORA</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">🛍️ Productos en tendencia 🛍️</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">💸 Los Más Vendidos 💸</h2>
            </Col>

            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">
                  💲 Ofertas Limitadas 💲
                </h4>
                <h3 className="text-white fs-5 mb-3">
                  Sillón Luxury Limited Edition
                </h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to={"/shop"}>Ver Tienda</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrival">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">🛬 Nueva Mercancía 🚢</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">✨ Los Más Populares ✨</h2>
            </Col>
            <ProductsList data={watchProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
