import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
import "./Login.css"

const Login = () => {
  const cookie = new Cookies();
   const [signupCredentials, setSignupCredentials] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault();

    const url = "https://loophole-backend.onrender.com/users/login"

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupCredentials),
    })
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        cookie.set("TOKEN", data.token, {path: "/"});
        window.location.assign("/loophole/home");
      })
      .catch((error) =>  {
          console.log(error);
      });
  }
  return (
     <div className="login-component">
      <div className="form-container mx-auto xl:w-4/12 lg:w-5/12 md:w-7/12 sm:w-8/12 w-11/12">
        <div className="logo py-2 ">
          <span className="text-2xl">#loophole</span>
          <br />
          <span className="tagline text-xs">
            A place where you find projects to contribute.
          </span>
        </div>
        <div className="create-account-container">
          <span className="create-account">Sign in </span>
        </div>
        <div className="alert p-0">
          <span className="text-red-500 font-semibold">{message}</span>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicusername">
            {/* <Form.Label>Username</Form.Label> */}
            <Form.Control
              className="form-input"
              type="text"
              name="username"
              value={signupCredentials.username}
              required
              placeholder="Username"
              onChange={(e) => {
                setSignupCredentials({
                  ...signupCredentials,
                  username: e.target.value,
                });
              }}
            />
          </Form.Group>

          

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              className="form-input"
              type="password"
              name="password"
              value={signupCredentials.password}
              required
              placeholder="Password"
              onChange={(e) => {
                setSignupCredentials({
                  ...signupCredentials,
                  password: e.target.value,
                });
              }}
            />
          </Form.Group>

          <div className=" create-account-footer flex justify-between">
            <div className="empty-div">
              <Form.Text className="text-muted">
                Don't have an account?{" "}
                <Link to="/loophole/users/signup" className="login-link">
                  Sign up
                </Link>
              </Form.Text>
            </div>
            <div>
              <Button
              className="create-account-button "
                variant="primary"
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
