import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import "./Registration.css";
import { signInWithGoogle } from "../config/googleOAuth";
import { Link } from "react-router-dom";

const Registration = () => {
  const [signupCredentials, setSignupCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://loophole-backend.onrender.com/users/register"

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupCredentials),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMessage(data.message)
      })
      .catch((error) =>  {
          console.log(error);
      });
  };

  const handleSignInWithGoogle = () => {
     signInWithGoogle();
  }

  return (
    <div className="signup-component">
      <div className="form-container mx-auto xl:w-4/12 lg:w-5/12 md:w-7/12 sm:w-8/12 w-11/12">
        <div className="logo py-2 ">
          <span className="text-2xl">#loophole</span>
          <br />
          <span className="tagline text-xs">
            A place where you find projects to contribute.
          </span>
        </div>
        <div className="create-account-container">
          <span className="create-account">Create Account</span>
        </div>
        <div className="alert p-0">
          <span className="text-red-500 font-semibold">{message}</span>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicusername">
            {/* <Form.Label>Username</Form.Label> */}
            <Form.Control
              className="form-input"
              type="text"
              name="username"
              value={signupCredentials.username}
              required
              placeholder="Enter your username"
              onChange={(e) => {
                setSignupCredentials({
                  ...signupCredentials,
                  username: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              className="form-input"
              type="email"
              name="email"
              value={signupCredentials.email}
              required
              placeholder="Enter your email address"
              onChange={(e) => {
                setSignupCredentials({
                  ...signupCredentials,
                  email: e.target.value,
                });
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              className="form-input"
              type="password"
              name="password"
              value={signupCredentials.password}
              required
              placeholder="Enter your password"
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
                Already have an account?{" "}
                <Link to="/loophole/users/login" className="login-link">
                  Log in
                </Link>
              </Form.Text>
            </div>
            <div>
              <Button
              className="create-account-button "
                variant="primary"
                onClick={handleSubmit}
              >
                Next
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};



export default Registration;
