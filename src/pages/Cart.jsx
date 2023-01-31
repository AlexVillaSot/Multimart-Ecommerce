import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cartActions, CartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Carrito">
      <CommonSection title="🛒 Carrito de Compra 🛒" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">
                  🛒 ❌​ No hay artículos en el Carrito ❌ 🛒​{" "}
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Título</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Los impuestos y el envío se calcularán al finalizar la compra 💲
              </p>
              <div>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="buy__btn w-100 "
                >
                  <Link to="/checkout">Verificar Compra</Link>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="buy__btn w-100 mt-3"
                >
                  <Link to="/shop">Seguir Comprando</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.3 }}
          onClick={deleteProduct}
          class="ri-delete-bin-5-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
