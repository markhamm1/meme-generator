import React from "react"
import "./style.css"
import axios from "axios"

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",

      randomHead: "heads/professor yeti.png",
      randomBody: "bodies/cats cradle.png",
      randomLegs: "legs/elephant.png",
      allHeadImgs: [],
      allBodiesImgs: [],
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.pullImg = this.pullImg.bind(this)
    this.saveMeme = this.saveMeme.bind(this)
  }

  componentDidMount() {
 
    fetch('get_heads.json') 
      .then(response => response.json())
      .then(response => {
        const { heads } = response.data
        this.setState({
          allHeadImgs: heads
        })
      })

      fetch('get_bodies.json') 
      .then(response => response.json())
      .then(response => {
        const { bodies } = response.data
        this.setState({
          allBodiesImgs: bodies
        })
      })


  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  pullImg(event) {
    event.preventDefault()
    const randHead = Math.floor(Math.random() * this.state.allHeadImgs.length)
    this.setState({
      randomHead: this.state.allHeadImgs[randHead].url
    })
    const randBod = Math.floor(Math.random() * this.state.allBodiesImgs.length)
    this.setState({
      randomBody: this.state.allBodiesImgs[randBod].url
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
        this.props.history.push("/memes")
      })
      .catch(error => {
        console.log(error)
        if (error.response.status === 401) {
          console.log(this.props.history)
          this.props.history.push("/")
        }
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
          <img src={this.state.randomHead} alt="" />
          <img src={this.state.randomBody} alt="" />
          <img src={this.state.randomLegs} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <button onClick={this.saveMeme} className="meme-save">Save Meme</button>
      </div>
    )
  }
}

export default MemeGenerator