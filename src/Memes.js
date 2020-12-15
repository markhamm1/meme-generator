import React from 'react'
import "./style.css"
import axios from 'axios'

class Memes extends React.Component {
  constructor() {
    super()
    this.state = {
      allMemes: [],
    }
    this.editMeme = this.editMeme.bind(this)
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_APIURL}/api/memes`)
      .then(response => {
        this.setState({
          allMemes: response.data
        })
        console.log(this.state.allMemes)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  editMeme(event) {
    event.preventDefault()
    console.log("editing meme")
  }

  render() {
    return (
      <div>
        <div>
          {this.state.allMemes.map((meme, i) => <li className="index" key={meme.id}>
            <div className="meme">
              <br></br>
              <img src={meme.img_url} alt="" />
              <h2 className="top">{meme.top_text}</h2>
              <h2 className="bottom">{meme.bottom_text}</h2>
              <br></br>
              <button onClick={this.editMeme}>Edit Meme</button>
              <br></br>
            </div>
          </li>)}
        </div>
        <p>{this.state.allMemes.top_text}</p>
      </div >
    )
  }
}

export default Memes