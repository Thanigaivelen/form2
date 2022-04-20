import React, { useState } from "react";
import Form from "./Form";

const Login = () => {
  const [data, setData] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newData = Object.assign({}, data, { [name]: value });
    setData(newData);
  };

  const handleSubmit = (e) => {
    // e.preventDefault()
    console.log(data);
    document.cookie = `email=${data.email}`;
    document.cookie = `username=${data.username}`;
    document.cookie = `password=${data.password}`;
    console.log(document.cookie);
  };

  console.log(document.cookie);
  return (
    <div className="container">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        data={data}
      />
    </div>
  );
};

export default Login;
