import React from "react";
import home from "./components/home/home";
import MovieDesc from "./components/moviedesc/moviedesc"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={home} />
        {/* <Route path="/movies" component={Products} />
        <Route path="/about" component={About} /> */}
        <Route path="/movie/:id" component={MovieDesc} />
        <Route path="/*" component={Error} />
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
