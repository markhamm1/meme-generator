import React from "react"
import "./style.css"
import axios from "axios"

class MonsterMaker extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",

      randomHead: "heads/professor yeti.png",
      randomBody: "bodies/cats cradle.png",
      randomLeg: "legs/elephant.png",
      allHeadImgs: [],
      allBodiesImgs: [],
      allLegsImgs: []
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

      fetch('get_legs.json') 
      .then(response => response.json())
      .then(response => {
        const { legs } = response.data
        this.setState({
          allLegsImgs: legs
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
    const randLeg = Math.floor(Math.random() * this.state.allLegsImgs.length)
    this.setState({
      randomLeg: this.state.allLegsImgs[randLeg].url
    })
  }

  saveMeme(event) {
    event.preventDefault()
    console.log(this.state)
    axios
      .post(`${process.env.REACT_APP_APIURL}/api/monsters`, {
        top_text: this.state.topText,
        bottom_text: this.state.bottomText,
        head_url: this.state.randomHead,
        body_url: this.state.randomBody,
        leg_url: this.state.randomLeg
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
            placeholder="First Name"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Last Name"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>

        </form>
        <div className="meme">
          <img src={this.state.randomHead} alt="" />
          <img src={this.state.randomBody} alt="" />
          <img src={this.state.randomLeg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <button onClick={this.saveMeme} className="meme-save">Save Meme</button>
      </div>
    )
  }
}

export default MonsterMaker