import React from "react";
import "./AccessDenied.css";

const AccessDenied = () => {

  return (
    <div className="forbidden-access-container">
      <div className="error-msg my-auto">
        <h1 className="forbidden-heading"> <span className="code">403</span> Forbidden Access</h1>
        <p className="forbidden-tag">
          You are not authorized to access this page. Try logging in first.
        </p>
      </div>
    </div>
  );
};

export default AccessDenied;
