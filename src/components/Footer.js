import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/index.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark">
      <Container
        style={{ minHeight: '300px', maxWidth: '1200px' }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Row className="py-3" style={{ width: '100%' }}>
          <Col md={4} className="text-center mt-5">
            <h5><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Pharm Store</Link></h5>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5 style={{ marginBottom: '20px' }}>Contact</h5>
            <p>Email: info@pharmstore.com</p>
            <p>Phone: +383 46 456-789</p>
          </Col>
        </Row>
      </Container>
      <div className="footer-part text-center">
        <p>@2023 Pharmacy Store. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
