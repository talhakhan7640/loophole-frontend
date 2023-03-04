import React from "react";
import Cookies from "universal-cookie";

const AuthRoutes = ({component}) => {
  const cookie = new Cookies();
  console.log(cookie.get("TOKEN"));
  if (cookie.get("TOKEN") == undefined) {
    return (
      <div>
        <span>You have to be login first</span>
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


export default AuthRoutes;