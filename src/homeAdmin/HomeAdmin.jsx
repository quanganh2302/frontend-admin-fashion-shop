import React from "react";
import Login from "../component/login/Login";
import Register from "../component/register/Register";
import { NavLink } from "react-router-dom";
import "./HomeAdmin.scss";
const HomeAdmin = () => {
  return (
    <section>
      <header className="header">
        <div className=" header-item">
          <NavLink to="/login">Login</NavLink>
        </div>
        <div className=" header-item">
          <NavLink to="/register">Register</NavLink>
        </div>
        <div className=" header-item">
          <NavLink to="/add-product">Add Product</NavLink>
        </div>
      </header>
    </section>
  );
};

export default HomeAdmin;
