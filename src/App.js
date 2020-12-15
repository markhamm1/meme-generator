import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import Memes from "./Memes"
import LogIn from "./LogIn"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={LogIn} />
          <Route path="/memegenerator" component={MemeGenerator} />
          <Route path="/memes" component={Memes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
