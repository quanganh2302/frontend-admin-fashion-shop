import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import Button from "react-bootstrap/Button";
import { userServices } from "../../store/Auth/reducer/userServices";
import { fetchGender, fetchRole } from "../../store/Home/thunk";
import homeReducer from "../../store/Home/reducer/homeReducer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    roleId: "",
    gender: "",
  });
  const navigate = useNavigate();
  const [genderArr, setGenderArr] = useState();
  const [roleArr, setRoleArr] = useState();

  const gender = useSelector((state) => state.homeReducer.gender);
  const role = useSelector((state) => state.homeReducer.role);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRole());
  }, []);

  useEffect(() => {
    dispatch(fetchGender());
  }, []);

  useEffect(() => {
    if (role && role.length > 0) {
      setRoleArr(role);
      userInfo.roleId = role[0].keyMap;
    }
    if (gender && gender.length > 0) {
      setGenderArr(gender);
      userInfo.gender = gender[0].keyMap;
    }
  }, [role, gender]);

  const handleOnChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    userServices.createNewUser(userInfo);
    // navigate("/");
  };
  return (
    <div className="login">
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={handleOnChange}
          name="email"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-3"
      >
        <Form.Control
          onChange={handleOnChange}
          type="password"
          placeholder="Password"
          name="password"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="First name"
        className="mb-3"
      >
        <Form.Control
          name="firstName"
          type="text"
          placeholder="name@example.com"
          onChange={handleOnChange}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Last name"
        className="mb-3"
      >
        <Form.Control
          name="lastName"
          type="text"
          placeholder="Password"
          onChange={handleOnChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
        <Form.Control
          name="address"
          type="text"
          placeholder="name@example.com"
          onChange={handleOnChange}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Phone number"
        className="mb-3"
      >
        <Form.Control
          name="phoneNumber"
          type="number"
          placeholder="Password"
          onChange={handleOnChange}
        />
      </FloatingLabel>
      <Form.Select
        name="roleId"
        className="mb-3"
        aria-label="Default select example"
        onChange={handleOnChange}
        // value={}
      >
        {roleArr &&
          roleArr.length > 0 &&
          roleArr.map((item, index) => {
            return (
              <option key={index} value={item.keyMap}>
                {" "}
                {item.valueEn}{" "}
              </option>
            );
          })}
      </Form.Select>
      <Form.Select
        name="gender"
        className="mb-3"
        aria-label="Default select example"
        onChange={handleOnChange}
      >
        {genderArr &&
          genderArr.length > 0 &&
          genderArr.map((item, index) => {
            return (
              <option key={index} value={item.keyMap}>
                {" "}
                {item.valueEn}{" "}
              </option>
            );
          })}
      </Form.Select>
      <Button onClick={handleSubmit} variant="primary">
        submit
      </Button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;
