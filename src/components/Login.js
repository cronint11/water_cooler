import React from "react";

function Login(props) {
  return (
    <div>
      <h4>Login</h4>
      <span>handle: </span><input placeholder="username"></input>
      <br/>
      <span>password: </span><input type="password" placeholder="password"></input>
    </div>
  );
}

export default Login;
