import React from 'react'
import "./style.css"
import axios from 'axios'

class EditMeme extends React.Component {
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
  }

  componentDidMount() {
    const memeUrl = this.props.location.pathname
    const memeId = memeUrl.slice(10)
    axios.get(`${process.env.REACT_APP_APIURL}/api/memes/${memeId}`)
      .then(response => {
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
    const memeId = memeUrl.slice(10)
    axios
      .patch(`${process.env.REACT_APP_APIURL}/api/memes/${memeId}`, {
        top_text: this.state.topText,
        bottom_text: this.state.bottomText,
        img_url: this.state.memeInfo.img_url
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response)
        this.props.history.push("/memes")
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
          <img src={this.state.memeInfo.img_url} alt="" />
          <h2 className="top">{this.state.topText ? this.state.topText : this.state.memeInfo.top_text}</h2>
          <h2 className="bottom">{this.state.bottomText ? this.state.bottomText : this.state.memeInfo.bottom_text}</h2>
        </div>
      </div >
    )
  }
}

export default EditMeme