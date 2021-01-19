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
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  return (
    <Router>
      <div>
        <Header isLoggedIn = {isLoggedIn} />
        <Switch>
          <Route path="/monstermashup" render={(props) => <MonsterMaker setIsLoggedIn = {setIsLoggedIn} {...props} />}/>
          <Route path="/monsters" render={(props) => <Monsters setIsLoggedIn = {setIsLoggedIn} {...props} />}/>
          <Route path="/editmonster" render={(props) => <EditMonster setIsLoggedIn = {setIsLoggedIn} {...props} />}/>
          <Route path="/createaccount" render={(props) => <CreateUser setIsLoggedIn = {setIsLoggedIn} {...props} />}/>
          <Route path="/logout" render={(props) => <LogOut setIsLoggedIn = {setIsLoggedIn} {...props} />}  />
          <Route path="/" render={(props) => <LogIn setIsLoggedIn = {setIsLoggedIn} {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
