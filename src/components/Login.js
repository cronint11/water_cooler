import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

function Login(props) {
  const context=React.useContext(GlobalContext);

  return (
    <div>
      <h4>Login</h4>
      <span>handle: </span><input placeholder="username"></input>
      <br/>
      <span>password: </span><input type="password" placeholder="password"></input>
      <br/>
      <button onClick={()=>context.dispatch({type:"authenticated", payload: null})}><Link to="Feed">Log In</Link></button>
    </div>
  );
}

export default Login;
