import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";
import { ProductType } from "../types/types";

interface ProductCardProps {
  product: ProductType;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <CardImg variant="top" src={product.thumbnail} />
      <CardBody>
        <CardTitle>{product.title}</CardTitle>
        <CardText>
          {product.description}
        </CardText>
        <Button variant="primary">Add To Cart</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
