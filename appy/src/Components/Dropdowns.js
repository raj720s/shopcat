import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
function Dropdowns() {
  const [options, setoptions] = useState();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/sort/">price l 2 h</Dropdown.Item>
        <Dropdown.Item href="/sort/">price h 2 l</Dropdown.Item>
        <Dropdown.Item href="/sort/">name a 2 z</Dropdown.Item>
        <Dropdown.Item href="/sort/">name z 2 a</Dropdown.Item>
        <Dropdown.Item href="/sort/"></Dropdown.Item>
        <Dropdown.Item href="/sort/">name z 2 a</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdowns;
