import React from 'react'
import "./style.css"
import axios from 'axios'
import { BrowserRouter as Route, Link } from "react-router-dom";

class Monsters extends React.Component {
  constructor() {
    super()
    this.state = {
      allMemes: [],
    }
  }

  componentDidMount() {
    const jwt = localStorage.getItem("jwt")
    axios.get(`${process.env.REACT_APP_APIURL}/api/monsters`)
      .then(response => {
        this.setState({
          allMemes: response.data
        })
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 401) {
          console.log(this.props.history)
          this.props.history.push("/")
        }
      })
  }


  render() {
    return (
      <div>
        <div>
          {this.state.allMemes.map((meme, i) => <li className="index" key={meme.id}>
            <div className="meme">
              <br></br>
              <img src={meme.head_url} alt="" />
              <img src={meme.body_url} alt="" />
              <img src={meme.leg_url} alt="" />
              <h2 className="memes-top">{meme.top_text}</h2>
              <h2 className="memes-bottom">{meme.bottom_text}</h2>
              <br></br>
              <Link
                className="meme-link"
                to={{
                  pathname: `/editmonster/${meme.id}`,
                }}
              >
                Edit Meme
              </Link>
              <br></br>
              <hr></hr>
            </div>
          </li>)}
        </div>
        <p>{this.state.allMemes.top_text}</p>
      </div >
    )
  }
}

export default Monsters