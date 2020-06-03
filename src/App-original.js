import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Jumbotron } from 'react-bootstrap';
import Darkmode from 'darkmode-js';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import Feed from './components/Feed';

export const GlobalContext=React.createContext();
const reducer = (state, action) => {
  switch(action.type){
    case "authenticated":
      //code logic to authenticate user. Payload will need to be updated from Login.js in button OnClick function.
      return {...state, authenticated: true};
    case "logout":
      //code logic to logout. Payload will need to be updated from Logout.js.
      return {...state, authenticated: false};
    default:
      return state;
  }
};

const jumbotronStyle = {
  backgroundColor: 'lightblue',
};

new Darkmode().showWidget();

function App() {
  const [state, dispatch]=React.useReducer(reducer,{});

  return (
    <div className="App">
      <GlobalContext.Provider value={{state, dispatch}}>
      <Navigation />
      <Jumbotron fluid style={jumbotronStyle}>
      <Header />
    </Jumbotron>
     <Router>
      <Switch>
       <Route path='/log_in' component={Login} />
       <Route path='/feed' component={Feed} />
       <Route path='/log_out' component={Logout} />
       <Route component={Login} />
      </Switch>
     </Router>
      <div container>      
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
     <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </div>
      
      </GlobalContext.Provider>
    </div>
  );
  
}

export default App;
