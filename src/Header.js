import React from "react"
import "./style.css"
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <header>
      <img src="./QuestionMark.png" alt="" />
      <p>Monster Mashup</p>
      {props.isLoggedIn && (
        <ul className="nav-list">
          <Link to="/monsters">
            <li>View Monsters</li>
          </Link>
          <Link to="/monstermashup">
            <li>Create New Monster</li>
          </Link>
          <Link to="/logout">
            <li>Log Out</li>
          </Link>
        </ul>
      )}
    </header>
  )
}

export default Header