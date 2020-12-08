import React from "react"
import "./style.css"
import axios from "axios"

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.pullImg = this.pullImg.bind(this)
    this.saveMeme = this.saveMeme.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        this.setState({
          allMemeImgs: memes
        })
      })
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  pullImg(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    this.setState({
      randomImg: this.state.allMemeImgs[randNum].url
    })
  }

  saveMeme(event) {
    event.preventDefault()
    console.log(this.state)
    axios
      .post(`${process.env.REACT_APP_APIURL}/api/memes`, {
        top_text: this.state.topText,
        bottom_text: this.state.bottomText,
        img_url: this.state.randomImg
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.pullImg}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>

        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <button onClick={this.saveMeme}>Save Meme</button>
      </div>
    )
  }
}

export default MemeGenerator