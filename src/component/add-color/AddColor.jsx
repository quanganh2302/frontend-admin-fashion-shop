import "./AddColor.scss";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { createNewColor } from "../../store/Product/thunk.js";

const AddColor = () => {
  const dispatch = useDispatch();
  const [newColor, setNewColor] = useState({
    colorKey: "",
    value: "",
    nameEn: "",
    nameVi: "",
  });
  const handleOnchange = (e) => {
    setNewColor({ ...newColor, [e.target.name]: e.target.value });
  };
  const handleCreateNewColor = (e) => {
    e.preventDefault();
    dispatch(createNewColor(newColor));
    setNewColor({ colorKey: "", value: "", nameEn: "", nameVi: "" });
  };
  return (
    <Container className="mt-5">
      <form action="">
        <Row>
          <Col>
            {" "}
            <Form.Label htmlFor="basic-url">Color Key</Form.Label>
            <InputGroup className="mb-3 ">
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                name="colorKey"
                placeholder="Gi gi do"
                onChange={handleOnchange}
                value={newColor.colorKey}
              />
            </InputGroup>
          </Col>
          <Col>
            {" "}
            <Form.Label htmlFor="basic-url">Value</Form.Label>
            <InputGroup className="mb-3 ">
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                name="value"
                onChange={handleOnchange}
                value={newColor.value}

                // pattern="^P[A-Z]{2}\d$"
                // required
                // Set up Regular Expressions next time
              />
            </InputGroup>
          </Col>
        </Row>
        {/* Quantity and Weigh  */}
        <Row>
          <Col>
            {" "}
            <Form.Label htmlFor="basic-url">Name En</Form.Label>
            <InputGroup className="mb-3 ">
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                name="nameEn"
                onChange={handleOnchange}
                value={newColor.nameEn}
              />
            </InputGroup>
          </Col>
          <Col>
            {" "}
            <Form.Label htmlFor="basic-url">Name Vi</Form.Label>
            <InputGroup className="mb-3 ">
              <Form.Control
                id="basic-url"
                aria-describedby="basic-addon3"
                name="nameVi"
                onChange={handleOnchange}
                value={newColor.nameVi}
              />
            </InputGroup>
          </Col>
        </Row>{" "}
        {/* image and Description  */}
        <Button type="submit" variant="primary" onClick={handleCreateNewColor}>
          Submit
        </Button>
      </form>
      {/* Display product */}
      <Table className="tw-mt-[300px] tw-mb-[300px]" responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>ProductId</th>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Tag</th>
            <th>Category</th>
            <th>Color</th>
            <th>Size</th>
            <th>Image</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AddColor;
