import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import UserDetail from './components/UserDetail/UserDetail';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/posts">
           <Home></Home>
         </Route>
         <Route path="/posts/:userId">
  <UserDetail></UserDetail>
  </Route>
         <Route exact path="/">
           <Home></Home>
         </Route>
          <Route path="*">
          <Notfound></Notfound>
         </Route>
         </Switch>
     </Router>
    </div>
  );
}

export default App;

