import "./Form.css";
import React from "react";
import { useState } from "react";
import validate from "./Validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="main">
      <h1>Rick and Morty</h1>
      <div className="conten__login">
        <form onSubmit={handleSubmit}>
          <div className="ingreso">
            <input
              className="entrada"
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
            <label className="letras" htmlFor="username">
              Username
            </label>
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="ingreso">
            <input
              className="entrada"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <label className="letras" htmlFor="password">
              Password
            </label>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button className="boton__login">
            Login<span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
