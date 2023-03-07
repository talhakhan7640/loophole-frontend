import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AuthRoute from "./components/AuthRoute";
import UserProfile from "./pages/UserProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/loophole/users/signup" />} />

        <Route path="loophole">
          <Route path="home/" element={<AuthRoute component={<App />} />} />

          <Route path="users/">
            <Route path="signup" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
