import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../dummydata/datas";
import RatingComponent from "./RatingComponent";
import { useNavigate } from "react-router-dom";
function ProductDetails({ product }) {
  //   const product = products.find((p) => p._id == match.params.id);
  // console.log(product);
  const navigate = useNavigate();
  const [rating, setrating] = useState(0);

  const submitRating = async (e) => {
    e.preventDefault();
    if (rating) {
      const res = await axios.post(`/api/product/${product._id}/rating`, {
        rating,
      });
      if (res.status === 200) {
        alert("your review has been submitted");
      }
      // console.log(res.data);
      console.log("rated", rating);
      window.location.reload();
    }
  };
  useEffect(() => {
    navigate(`/product/${product._id}`);
  }, [rating]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        go back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
            className="my-2 mb-4"
          />
        </Col>
        <Col md={4}>
          <ListGroupItem variant="flush">{product.name}</ListGroupItem>
          <ListGroupItem variant="flush">
            <RatingComponent
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </ListGroupItem>
          <ListGroupItem variant="flush">
            Price : <span>{product.price} </span>
          </ListGroupItem>
          <ListGroupItem variant="flush">
            Description : <br></br> <span>{product.description} </span>
          </ListGroupItem>
          <ListGroupItem variant="flush">
            <Button type="button" variant="dark" size="md" className="w-100">
              {" "}
              add 2 cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h3>reviews</h3>

          <ListGroup variant="flush">
            <ListGroupItem>
              <Form onSubmit={submitRating}>
                <Form.Label>leave a Rating</Form.Label>
                <Form.Control
                  as="select"
                  value={rating}
                  onChange={(e) => setrating(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </Form.Control>

                <Button type="submit" variant="primary">
                  submit
                </Button>
              </Form>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default ProductDetails;
