import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FormGroup, Label, Input, Form } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Login({setauthenticate}) {
  const navigate=useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setauthenticate(true)
    navigate("/")
  };
  return (
    <Form onSubmit={loginUser} className="loginForm">
      <FormGroup>
        <Label for="exampleAddress">Email Address</Label>
        <Input id="exampleAddress" name="address" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password"
          type="password"
        />
      </FormGroup>
      <Button type="submit" color="warning">submit</Button>
    </Form>
  );
}

export default Login;
