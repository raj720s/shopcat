import React, { useState } from "react";

import { Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function SearchBox({ history }) {
  let navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
    // sends the typed keyword into search route.. for search functionality
    // if (keyword.trim()) {
    //   history.push(`/search/${keyword}`);
    // } else {
    //   // returns to home
    //   history.push("/");
    // }
    console.log("submitted");
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex ml-auto">
      {/* <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="search propducts.."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>

      <Button type="submit" variant="outline-success" className="p-2">
        search
      </Button> */}

      <FormControl
        type="search"
        placeholder="Search"
        className="me-2 "
        aria-label="Search"
        required
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button variant="outline-success" type="submit" className="ml-2">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
