import React from 'react'
import "./style.css"
import axios from 'axios'

class EditMonster extends React.Component {
  constructor() {
    super()
    this.state = {
      memeInfo: [],
      topText: "",
      bottomText: "",
      randomImg: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.saveMeme = this.saveMeme.bind(this)
    this.deleteMeme = this.deleteMeme.bind(this)
  }

  componentDidMount() {
    const memeUrl = this.props.location.pathname
    const memeId = memeUrl.slice(13)
    axios.get(`${process.env.REACT_APP_APIURL}/api/monsters/${memeId}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          memeInfo: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  saveMeme(event) {
    event.preventDefault()
    console.log(this.state.topText)
    const memeUrl = this.props.location.pathname
    const memeId = memeUrl.slice(13)
    axios
      .patch(`${process.env.REACT_APP_APIURL}/api/monsters/${memeId}`, {
        top_text: this.state.topText,
        bottom_text: this.state.bottomText,
        head_url: this.state.memeInfo.head_url,
        body_url: this.state.memeInfo.body_url,
        leg_url: this.state.memeInfo.leg_url
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response)
        this.props.history.push("/monsters")
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteMeme(event) {
    event.preventDefault()
    const memeUrl = this.props.location.pathname
    const memeId = memeUrl.slice(13)
    axios
      .delete(`${process.env.REACT_APP_APIURL}/api/monsters/${memeId}`)
      .then(response => {
        console.log(response)
        this.props.history.push("/monsters")
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.saveMeme}>
          <input
            type="text"
            name="topText"
            placeholder={this.state.memeInfo.top_text}
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder={this.state.memeInfo.bottom_text}
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Update</button>

        </form>
        <div className="meme">
          <img src={this.state.memeInfo.head_url} alt="" />
          <img src={this.state.memeInfo.body_url} alt="" />
          <img src={this.state.memeInfo.leg_url} alt="" />
          <h2 className="top">{this.state.topText ? this.state.topText : this.state.memeInfo.top_text}</h2>
          <h2 className="bottom">{this.state.bottomText ? this.state.bottomText : this.state.memeInfo.bottom_text}</h2>
        </div>

        <button className="meme-save" onClick={this.deleteMeme}>Delete Monster</button>
      </div >
    )
  }
}

export default EditMonster