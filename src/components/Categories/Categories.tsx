import { Col, Container, Row } from "react-bootstrap";
import { CATEGORIES_ITEMS } from "../../constants";
import { FaMars, FaVenus } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";


const Categories = () => {
  return (
    <div className="categoriesContainer" id="categories">
      <h1>Our Categories</h1>
      <Container>
        <Row className="categories">
          {CATEGORIES_ITEMS.map((item) => (
            <Col sm={12} lg md={6} className="category">
              {item.icon === "Mars" ? (
                <FaMars />
              ) : item.icon === "Venus" ? (
                <FaVenus />
              ) : (
                <FaChildren />
              )}
              <h1>{item.name}</h1>
              <p>{item.text}</p>
              <a href="">{item.link}</a>
            </Col>
          ))}
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default Categories
