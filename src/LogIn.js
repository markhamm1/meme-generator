import React from 'react'
import "./style.css"
import axios from 'axios'

class LogIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.loginSubmit = this.loginSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  loginSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    axios
      .post(`${process.env.REACT_APP_APIURL}/api/sessions`, {
        email: this.state.email,
        password: this.state.password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response)
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        this.props.history.push("/monsters")
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <div>
        <div class="login">
          <form className="login-form" onSubmit={this.loginSubmit}>
            <h1>Login</h1>
            <ul>
              {/* <li class="text-danger">...</li> */}
            </ul>
            <div class="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <input
              type="submit" class="btn-primary" value="Submit"
            />
          </form>
        </div>
      </div >

    )
  }
}

export default LogIn