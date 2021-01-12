import React from 'react'
import "./style.css"
import axios from 'axios'

class CreateUser extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  createUser(event) {
    event.preventDefault()
    axios
      .post(`${process.env.REACT_APP_APIURL}/api/users`, {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        this.props.history.push("/")
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <div>
        <div className="login">
          <form className="login-form" onSubmit={this.createUser}>
            <h1>Create Account</h1>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Re-enter password"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <input
              type="submit" className="btn-primary" value="Submit"
            />
          </form>
        </div>
      </div >

    )
  }
}

export default CreateUser