import React, { useEffect, useState } from "react";
// import products from "../dummydata/datas";
import { Row, Col, Card, Dropdown, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeProduct from "../Components/HomeProduct";
import Dropdowns from "../Components/Dropdowns";
import axios from "axios";
import { useParams } from "react-router-dom";
function Homepage() {
  // const params = useParams();
  const [products, setproducts] = useState([]);
  const { keyword, cat, sot } = useParams();

  // if (cat) {
  //   console.log(cat);
  // }
  // if (keyword) {
  //   console.log(keyword);
  // }

  // products has been set .
  useEffect(() => {
    // cant make useEffect async ever **

    const fetchproducts = async () => {
      const res = await axios.get("/api/product");
      if (res.status === 200) {
        setproducts(res.data);
      }
      if (keyword) {
        setproducts([]);
        // console.log(keyword);
        const { data } = await axios.get(`/api/product?keyword=${keyword}`);
        setproducts(data);
        console.log(products);
      }
      if (cat) {
        setproducts([]);
        console.log(cat);
        const res = await axios.get(`/api/category/${cat}`);
        setproducts(res.data);
        console.log(products);

        // console.log(data);
      }
      if (sot) {
        console.log(sot);
        setproducts([]);
        // if (sot == "name") {
        const res = await axios.get(`/api/sort/${sot}`);
        console.log(res.data);
        setproducts(res.data);
        // }
      }
    };
    fetchproducts();
    console.log(products);
  }, [useParams()]);
  return (
    <>
      {!products || products.length === 0 ? (
        <div className="d-flex justify-content-center my-100">loading.. </div>
      ) : (
        <>
          <div className="d-flex justify-content-center my-2">
            <p className="mr-2">sort By :</p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                choose category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={`/category/laptop`}>laptop</Dropdown.Item>
                <Dropdown.Item href={`/category/monitor`}>
                  monitor
                </Dropdown.Item>
                <Dropdown.Item href={`/category/printer`}>
                  printer
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link
              style={{ textDecoration: "none" }}
              className="btn btn-primary mx-2 size=lg"
              to={"/sort/name"}
            >
              name
            </Link>
            <Link className="btn btn-primary mx-2 size=lg" to={"/sort/price"}>
              price
            </Link>
            <Link className="btn btn-primary mx-2 size=lg" to={"/sort/rating"}>
              rating
            </Link>
          </div>
          <Row>
            {products.length > 0 &&
              products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <HomeProduct product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
}

export default Homepage;
