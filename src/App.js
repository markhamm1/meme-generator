import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import Memes from "./Memes"
import EditMeme from "./EditMeme"
import LogIn from "./LogIn"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/memegenerator" component={MemeGenerator} />
          <Route path="/memes" component={Memes} />
          <Route path="/editmeme" component={EditMeme} />
          <Route path="/" component={LogIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
