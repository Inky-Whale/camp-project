import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProductsById(id)
      .then((result) => setProduct(result.data));
  }, []);

  return (
    <Card fluid>
      <CardContent>
        <CardHeader>{product.name}</CardHeader>
        <Image size="medium" src={product.imageUrl} />

        <CardDescription>${product.price}</CardDescription>
      </CardContent>
      <CardContent extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
