import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../App';

function Logout(props) {
  const context=React.useContext(GlobalContext);

  useEffect(context.dispatch({type:'logout', payload: null}));

  return (
    <div>
      <h4>You have logged out.</h4>
      <br/>
      <Link to='log_in'>Log in</Link>
    </div>
  )
}

export default Logout;