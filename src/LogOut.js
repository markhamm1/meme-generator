import React from 'react'
import "./style.css"

class LogOut extends React.Component {
  constructor() {
    super()
    this.state = {}

  }

  componentDidMount() {
    localStorage.clear();
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