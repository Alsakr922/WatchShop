
import { Card, Col, Container, Row } from "react-bootstrap";
import { OUR_BRANDS } from "../../constants/OURBRANDS";

const Brands = () => {
  return (
    <div className="brandsContainer" id="brands">
      <h1>Brands</h1>
      <Container>
        <Row className="brands">
          {OUR_BRANDS.map((brand, index) => (
            <Col key={index} className="brand">
              <Card>
                <img src={brand.img} alt="brand" />
                <Card.Body>
                  <Card.Text className="text">{brand.text}</Card.Text>
                  <Card.Link className="link">Learn More!</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Brands;
