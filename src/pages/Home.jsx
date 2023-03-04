import React from 'react';
import Cookies from 'universal-cookie';

const Home = () => {
  const cookie = new Cookies();
  console.log(cookie.get("TOKEN"))
  const logoutUser = (e) => {
    e.preventDefault();
    cookie.remove("TOKEN", {path: "/"});
    console.log(cookie.get("TOKEN"));
    setInterval(() => {
    window.location.assign("users/login");
    }, 3000)
    
  }
  return(
<div>
    <p>This is home page</p>
    <button onClick={logoutUser}>Logout</button>
</div>
  ) 
}

export default Home;