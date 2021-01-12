import React from "react"
import "./style.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="./QuestionMark.png" alt="" />
      <p>Monster Maker</p>
      <ul className="nav-list">
        <Link to="/monsters">
          <li>View Monsters</li>
        </Link>
        <Link to="/monstermaker">
          <li>Create New Monster</li>
        </Link>
        <Link to="/logout">
          <li>Log Out</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header