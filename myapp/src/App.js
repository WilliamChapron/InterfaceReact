import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Pokedex from "./pages/Pokedex";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route path="/m">
          <Manage />
        </Route>
        <Route path="/p">
          <Pokedex />
        </Route>
      </Switch>
  </Router>
}


export default App;
