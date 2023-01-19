import React from "react";
import "./header.css";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

const nav__links = [
  {
    path: "home",
    display: "Inicio",
  },

  {
    path: "shop",
    display: "Tienda",
  },

  {
    path: "cart",
    display: "Carrito",
  },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Multimart</h1>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="cart__icon">
                <i class="ri-heart-3-line"></i>
                <span className="badge">2</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">2</span>
              </span>

              <span>
                <motion.img
                  whileTap={{ scale: 1.3 }}
                  src={userIcon}
                  alt="user-icon"
                />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-5-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
