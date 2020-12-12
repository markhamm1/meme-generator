import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import Memes from "./Memes"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
