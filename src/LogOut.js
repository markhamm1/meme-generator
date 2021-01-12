import React from 'react'
import "./style.css"
import axios from 'axios'

class LogOut extends React.Component {
  constructor() {
    super()
    this.state = {}

  }

  componentDidMount() {
    localStorage.clear();
    axios.defaults.headers.common["Authorization"] = null
    this.props.setIsLoggedIn(false)
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <p>Logging Out</p>
      </div >

    )
  }
}

export default LogOut