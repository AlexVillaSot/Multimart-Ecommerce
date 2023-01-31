import React, { useRef, useEffect } from "react";
import "./header.css";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

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
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

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

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sesión finalizada");
      })
      .catch((err) => {
        toast.error(err.message);
        navigate("/home");
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

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("hide__profileActions");

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
              <motion.ul className="menu">
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
              </motion.ul>
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

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.3 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="user-icon"
                  onClick={toggleProfileActions}
                />

                <div
                  id="profile__btn"
                  className=" hide__profileActions profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Cerrar sesión</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Crear Cuenta</Link>
                      <Link to="/login">Iniciar Sesión</Link>
                    </div>
                  )}
                </div>
              </div>
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
