import React, { useRef, useEffect } from "react";
import "./header.css";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
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
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Multimart</h1>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <motion.li
                    whileHover={{ scale: 1.3 }}
                    className="nav__item"
                    key={index}
                  >
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <motion.span whileTap={{ scale: 1.3 }} className="cart__icon">
                <i class="ri-heart-3-line"></i>
                <span className="badge">2</span>
              </motion.span>
              <motion.span
                whileTap={{ scale: 1.3 }}
                className="cart__icon"
                onClick={navigateToCart}
              >
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">{totalQuantity}</span>
              </motion.span>

              <span>
                <motion.img
                  whileTap={{ scale: 1.3 }}
                  src={userIcon}
                  alt="user-icon"
                />
              </span>
              <div className="mobile__menu">
                <motion.span whileTap={{ scale: 1.2 }} onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </motion.span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
