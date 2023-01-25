import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Sofá") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sofá"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Móviles") {
      const filteredProducts = products.filter(
        (item) => item.category === "Móviles"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Sillas") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sillas"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Relojes") {
      const filteredProducts = products.filter(
        (item) => item.category === "Relojes"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === "Periféricos") {
      const filteredProducts = products.filter(
        (item) => item.category === "Periféricos"
      );

      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="🛍️ Productos 🛍️" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filtrar por Categoría</option>
                  <option value="Sofá">Sofá</option>
                  <option value="Móviles">Móviles</option>
                  <option value="Sillas">Sillas</option>
                  <option value="Relojes">Relojes</option>
                  <option value="Periféricos">Periféricos</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Ordenar por</option>
                  <option value="ascedente">Ascendente</option>
                  <option value="descendente">Descedente</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Buscar...."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">
                No se encontraron productos! 🤷🏻‍♂️
              </h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
