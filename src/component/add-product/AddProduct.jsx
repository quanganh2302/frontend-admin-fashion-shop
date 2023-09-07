import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchColor } from "../../store/Home/thunk";
import { createColorTable, createNewProduct } from "../../store/Product/thunk";
import clsx from "clsx";
const AddProduct = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.homeReducer.color);
  const [colorArr, setColorArr] = useState([]);
  const [colorInfo, setColorInfo] = useState([]);
  // const [productInfo, setProductInfo] = useState({
  //   productNameEn: "",
  //   productId: "",
  //   quantity: "",
  //   weigh: "",
  //   image: "",
  //   desc: "",
  //   color: "",
  //   size: "",
  //   tag: "",
  //   category: "",
  // });
  const [productInfo, setProductInfo] = useState({
    productId: "",
    productNameEn: "",
    quantity: "",
    colorPicked: [],
  });
  const [colorSelected, setColorSelected] = useState([]);
  useEffect(() => {
    dispatch(fetchColor());
  }, []);

  useEffect(() => {
    setColorArr(color);
  }, [color]);
  // console.log(color)
  const handleOnChangeColor = (e) => {
    let colors = e.target.value;
    let checkColor = colorSelected.indexOf(colors);
    // indexOf return -1 if value isn't existed

    if (checkColor !== -1) {
      return;
    } else {
      let data = [...colorSelected];
      data.push(colors);
      setColorSelected(data);
      setProductInfo({
        ...productInfo,
        colorPicked: colorSelected,
      });
    }
  };
  const printColor = (item) => {
    let res = color.find(({ keyMap }) => keyMap === item);
    return res.value;
  };

  const handleOnChangeProduct = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    dispatch(createColorTable(productInfo));
    dispatch(createNewProduct(productInfo));
  };

  return (
    <div className="">
      {" "}
      <Container className="mt-5">
        <form action="">
          <Row>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">Product name En</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="productNameEn"
                  onChange={handleOnChangeProduct}
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">Product Id</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="productId"
                  onChange={handleOnChangeProduct}
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
              <Form.Label htmlFor="basic-url">Quantity</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="quantity"
                  onChange={handleOnChangeProduct}
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">Weigh</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="weigh"
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>{" "}
          {/* image and Description  */}
          <Row>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">image</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="image"
                  disabled
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">description</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="desc"
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>{" "}
          {/* color and size  */}
          <Row>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">Open this select menu</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="color"
                onChange={handleOnChangeColor}
              >
                {color &&
                  color.length > 0 &&
                  color.map((item, index) => {
                    return (
                      <option key={index} value={item.keyMap}>
                        {item.nameEn}
                      </option>
                    );
                  })}
              </Form.Select>
            </Col>
            <Col>
              {" "}
              {/* <Form.Label htmlFor="basic-url">color selected</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  // defaultValue={""}
                  // value={
                  //   colorSelected && colorSelected.length > 0 && colorSelected
                  // }
                />
              </InputGroup> */}
              <div className="show-color tw-flex tw-justify-between tw-flex-col">
                <p className="tw-mb-[8px]">color selected</p>
                <div className="color-area tw-border tw-h-[37.6px] tw-flex tw-items-center">
                  {colorSelected.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={clsx(
                          "tw-w-[15px] tw-h-[15px] tw-border tw-border-black tw-border-solid tw-rounded-[50%] tw-mx-[5px] tw-flex-wrap tw-cursor-pointer"
                        )}
                        style={{ backgroundColor: printColor(item) }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">size</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="sizeId"
                  disabled
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">color</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
            </Col>
          </Row>{" "}
          {/* tag and category  */}
          <Row>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">tag</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="tag"
                  disabled
                />
              </InputGroup>
            </Col>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">category</Form.Label>
              <InputGroup className="mb-3 ">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  name="category"
                  disabled
                />
              </InputGroup>
            </Col>
          </Row>
          <Button type="submit" variant="primary" onClick={handleCreateProduct}>
            Submit
          </Button>
        </form>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table>
        <div className="test-tailwind">akjdhasjkdhaskjdha</div>
      </Container>
    </div>
  );
};

export default AddProduct;
