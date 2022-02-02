import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import RatingComponent from "./RatingComponent";
function Product(props) {
  const product = props.product;
  // console.log(product);
  // const [product, setproducts] = useState();

  return (
    <div key={product._id}>
      <Card className="my-3 p-3 rounded ">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant-="top"
            className="mh-20 mw-40"
          ></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <div className="my-2">{product.rating}</div>
            {/* <Rating value={product.rating} text={`${product.numReviews}`} /> */}
            <RatingComponent
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
