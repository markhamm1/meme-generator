import React from "react"
import "./style.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="./QuestionMark.png" />
      <p>Monster Meme</p>
      <ul className="nav-list">
        <Link to="/memes">
          <li>View My Memes</li>
        </Link>
        <Link to="/memegenerator">
          <li>Create New Meme</li>
        </Link>
        <Link to="/logout">
          <li>Log Out</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header