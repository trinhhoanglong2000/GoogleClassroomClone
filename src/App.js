import React from "react";
import { Header, ClassesContent, Login,Register } from "./components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
     
        <Switch>
          <Route path="/" exact>
            <Header/>
            <ClassesContent/>
          </Route>
          <Route path="/Login">
            <Login/>

          </Route>
          <Route path="/Register">
            <Register/>
           
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
