import React from "react";
import Cookies from "universal-cookie";
import Search from "../components/Search";

const Home = ({username}) => {
  console.log(username)
  const cookie = new Cookies();
  console.log(cookie.get("TOKEN"));
  const logoutUser = (e) => {
    e.preventDefault();
    cookie.remove("TOKEN", { path: "/" });
    console.log(cookie.get("TOKEN"));
    setInterval(() => {
      window.location.assign("users/login");
    }, 3000);
  };
  return (
    <div className="loophole-home">
      <div className="navbar grid grid-cols-3 gap-4">
        <div className="col-span-1">col 1</div>
        <div className="col-span-1">
          <Search />
        </div>
        <div className="col-span-1">
          <span>{username}</span>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
