import './App.css';
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import Gallery from "./Gallery";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
       
       
          <Switch>
            <Route path="/" exact component={Home}/> 
            <Route path="/about" component={About}/> 
            <Route path="/services" component={Services}/> 
            <Route path="/contact" component={Contact}/> 
            <Route path="/gallery" component={Gallery}/> 
          </Switch>
     
      </Router>
      
    </div>
  );
}

export default App;
