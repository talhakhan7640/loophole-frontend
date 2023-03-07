import React from "react";
import Cookies from "universal-cookie";
import AccessDenied from "../pages/AccessDenied";

const AuthRoute = ({component}) => {
  const cookie = new Cookies();
  console.log(cookie.get("TOKEN"));
  if (cookie.get("TOKEN") == undefined ) {
    return (
      <div>
        <AccessDenied />
      </div>
    );
  } else {
    return (
      <div>
        {component}
      </div>
    );
  }
}


export default AuthRoute;