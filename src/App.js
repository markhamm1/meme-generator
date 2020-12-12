<<<<<<< HEAD
import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
=======
import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import Memes from "./Memes"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
>>>>>>> 5cc089bc3c4e87662c84029b2aba0b33a468302e

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/memegenerator" component={MemeGenerator} />
        <Route path="/memes" component={Memes} />
      </div>
    </Router>
  );
}

export default App;
