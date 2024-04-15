import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import About from "./About";
import Contact from "./Contact";
import Policies from "./Policies";
import Others from "./Others";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <h1>Contact US! </h1>
      <Container>
        <Row className="links">
          <Col>
            <About />
          </Col>
          <Col>
            <Contact />
          </Col>
          <Col>
            <Policies />
          </Col>
          <Col>
            <Others />
          </Col>
        </Row>
      </Container>
      <div className="social">
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
        <FaTwitter />
        <FaTiktok />
      </div>
    </footer>
  );
};

export default Footer;
