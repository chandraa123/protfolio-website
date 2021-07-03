import './App.css';
import{BrowserRouter as Router,Route,Switch} from "react-router-dom";
import React from "react";
import Home from "./Home";
import Header from "./Header"
import Slide from "./Slide"
import Catagory from "./Catagory"


function App() {
  return( <div className="App">
<Router>
  <Switch>
    <Route path = "/">
      <Header/>
      <Catagory/>
      <Home/>
      <Slide/>
    </Route>
  </Switch>
</Router>

  </div>
  );
  }

export default App;
