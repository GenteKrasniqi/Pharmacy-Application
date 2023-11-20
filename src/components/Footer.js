import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/index.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark">
      <Container>
        <Row className="py-4">
          <Col md={5} className="text-center mt-5">
            <h5>Pharm Store</h5>
            
          </Col>
          <Col md={3} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/products">Services</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="text-center">
            <h5>Contact</h5>
            <p>Email: info@pharmstore.com</p>
            <p>Phone: (123) 456-7890</p>            
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
