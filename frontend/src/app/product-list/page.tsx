import { Col, Container, Row } from "react-bootstrap";
import ProductListWrapper from "../../../packages/product-list/src/components/ProductListWrapper";
import OfferListWrapper from "../../../packages/offer-list/src/components/OfferListWrapper";
const ProductList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ProductListWrapper />
        </Col>
        <Col>
          <OfferListWrapper />
        </Col>
      </Row>
      {/* <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}
    </Container>
  );
};

export default ProductList;
