import { Card, Col, Container, Row } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { PRODUCTS } from "../../constants/OUPRODUCTS";

const Products = () => {
  const isInWish = false;
  return (
    <div className="productsContainer" id="products">
      <h1>Our Products</h1>
      <Container>
        <Row className="products">
          {PRODUCTS.map((product, index) => (
            <Col key={index} className="product">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Text>{product.model}</Card.Text>
                  <Card.Title>{product.name}</Card.Title>
                  <div className="prices">
                    <del>{product.oldPrice}$</del>
                    <span>{product.newPrice} $</span>
                  </div>
                  <div className="icons">
                    <FaShoppingCart />
                    {isInWish ? <FaHeart /> : <FaRegHeart />}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      <hr />
      </Container>
    </div>
  );
};

export default Products;
