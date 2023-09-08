import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchColor,
  fetchSize,
  fetchTypeCustomer,
  fetchCategories,
  fetchTagProduct,
} from "../../store/Home/thunk";
import { createNewProduct, fetchProduct } from "../../store/Product/thunk";
import clsx from "clsx";
const AddProduct = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.homeReducer.color);
  const size = useSelector((state) => state.homeReducer.size);
  const type = useSelector((state) => state.homeReducer.type);
  const categories = useSelector((state) => state.homeReducer.categories);
  const tagProduct = useSelector((state) => state.homeReducer.tagProduct);
  const products = useSelector((state) => state.productReducer.products);
  const productsReverse = [...products].reverse();
  const [productInfo, setProductInfo] = useState({
    productId: "",
    productNameEn: "",
    quantity: "",
    weigh: "",
    sizeKeyMap: "",
    typeKeyMap: "",
    category: "",
    tagName: "",
    colorPicked: [],
  });
  const [colorSelected, setColorSelected] = useState([]);
  useEffect(() => {
    dispatch(fetchColor());
    dispatch(fetchSize());
    dispatch(fetchCategories());
    dispatch(fetchTypeCustomer());
    dispatch(fetchTagProduct());
    dispatch(fetchProduct());
  }, []);

  // Define default value for type, categories, size and color picked
  useEffect(() => {
    if (
      type &&
      type.length > 0 &&
      size &&
      size.length > 0 &&
      categories &&
      categories.length > 0 &&
      color &&
      color.length > 0 &&
      tagProduct &&
      tagProduct.length > 0
    ) {
      setProductInfo({
        ...productInfo,
        typeKeyMap: type[0].key,
        sizeKeyMap: size[0].key,
        category: categories[0].cateKey,
        tagName: tagProduct[0].nameEn,
        colorPicked: colorSelected,
      });
    }
  }, [type, categories, size, color, tagProduct]);

  // Define default value for color selected display
  useEffect(() => {
    if (color && color.length > 0) {
      let colorDefault = color[0].colorKey;
      let checkColor = colorSelected.indexOf(colorDefault);
      if (checkColor !== -1) {
        return;
      } else {
        let data = [...colorSelected];
        data.push(colorDefault);
        setColorSelected(data);
      }
    }
  }, [color]);
  // Update state of color picked onchange
  useEffect(() => {
    setProductInfo({
      ...productInfo,
      colorPicked: colorSelected,
    });
  }, [colorSelected]);

  const handleOnChangeSize = (e) => {
    setProductInfo({
      ...productInfo,
      sizeKeyMap: e.target.value,
    });
  };

  const handleOnChangeType = (e) => {
    setProductInfo({
      ...productInfo,
      typeKeyMap: e.target.value,
    });
  };

  const handleOnChangeCategory = (e) => {
    setProductInfo({
      ...productInfo,
      category: e.target.value,
    });
  };
  const handleOnChangeTagProduct = (e) => {
    setProductInfo({
      ...productInfo,
      tagName: e.target.value,
    });
  };

  // Handle Color -----------------------------------------------------------------
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
    }
  };

  const printColor = (item) => {
    let res = color.find(({ colorKey }) => colorKey === item);
    return res.value;
  };

  const handleRemoveColor = (data) => {
    const newColorSelected = colorSelected.filter((item) => item !== data);
    setColorSelected(newColorSelected);
  };
  // Handle Color -----------------------------------------------------------------

  // Handle Product -----------------------------------------------------------------
  const handleOnChangeProduct = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const handleCreateProduct = (e) => {
    // e.preventDefault();

    dispatch(createNewProduct(productInfo));
  };

  // Handle Product -----------------------------------------------------------------
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
                  value={productInfo.productNameEn}
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
                  value={productInfo.productId}
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
                  value={productInfo.quantity}
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
                  value={productInfo.weigh}
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
                      <option key={index} value={item.colorKey}>
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
                        onClick={() => handleRemoveColor(item)}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col>
              {" "}
              {/* size --------------------------------------------------------  */}
              <Form.Label htmlFor="basic-url">
                Open this select menu size
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="color"
                onChange={handleOnChangeSize}
              >
                {size &&
                  size.length > 0 &&
                  size.map((item, index) => {
                    return (
                      <option key={index} value={item.key}>
                        {item.key}
                      </option>
                    );
                  })}
              </Form.Select>
            </Col>
            <Col>
              {" "}
              {/* type customer -----------------------------------------------------  */}
              <Form.Label htmlFor="basic-url">
                Open this select menu type of customer
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="color"
                onChange={handleOnChangeType}
              >
                {type &&
                  type.length > 0 &&
                  type.map((item, index) => {
                    return (
                      <option key={index} value={item.key}>
                        {item.nameEn}
                      </option>
                    );
                  })}
              </Form.Select>
            </Col>
          </Row>{" "}
          {/* tag and category  */}
          <Row>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">Open this select menu</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="color"
                onChange={handleOnChangeTagProduct}
              >
                {tagProduct &&
                  tagProduct.length > 0 &&
                  tagProduct.map((item, index) => {
                    return (
                      <option key={index} value={item.nameEn}>
                        {item.nameEn}
                      </option>
                    );
                  })}
              </Form.Select>
            </Col>
            <Col>
              {" "}
              <Form.Label htmlFor="basic-url">Open this select menu</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="color"
                onChange={handleOnChangeCategory}
              >
                {categories &&
                  categories.length > 0 &&
                  categories.map((item, index) => {
                    return (
                      <option key={index} value={item.cateKey}>
                        {item.nameEn}
                      </option>
                    );
                  })}
              </Form.Select>
            </Col>
          </Row>
          <Button type="submit" variant="primary" onClick={handleCreateProduct}>
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
              <th>Color</th>
              <th>Size</th>
              <th>Type of customer</th>
              <th>Tag</th>
              <th>Category</th>
              <th>Image</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {productsReverse.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index}</td>
                  <td>{item.productId}</td>
                  <td>{item.nameProductEn}</td>
                  <td>{item.quantity}</td>
                  <td>
                    {item.Colors.map((item, index) => {
                      return <div key={index}>{item.nameEn}</div>;
                    })}
                  </td>
                  <td>{item.sizeKeyMap}</td>
                  <td>{item.Type_Customer.nameEn}</td>
                  <td>{item.tagName}</td>
                  <td>{item.Category.nameEn}</td>
                  <td>{item.image}</td>
                  <td>{item.desc}</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AddProduct;
