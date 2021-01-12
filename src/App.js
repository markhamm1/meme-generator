import React from "react"
import Header from "./Header"
import MonsterMaker from "./MonsterMaker"
import Monsters from "./Monsters"
import EditMonster from "./EditMonster"
import LogIn from "./LogIn"
import LogOut from "./LogOut"
import CreateUser from "./CreateUser"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/monstermaker" component={MonsterMaker} />
          <Route path="/monsters" component={Monsters} />
          <Route path="/editmonster" component={EditMonster} />
          <Route path="/createaccount" component={CreateUser} />
          <Route path="/logout" component={LogOut} />
          <Route path="/" component={LogIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
