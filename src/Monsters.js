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

  printMonster(){
    console.log("logging attempt to save");
  }

  

  render() {
    return (
      <div>
        <div>
          {this.state.allMemes.map((meme, i) => <li className="index" key={meme.id}>
            <div className="meme">
              <br></br>
              <canvas id="monster_canvas" height = "520" width = "400"></canvas>
              <img src={meme.head_url} alt="" class="monster_head"/>
              <img src={meme.body_url} alt="" class="monster_body"/>
              <img src={meme.leg_url} alt="" class="monster_leg"/>
              <h2 className="memes-top">{meme.top_text}</h2>
              <h2 className="memes-bottom">{meme.bottom_text}</h2>
              <br></br>
              <br></br>
              <Link
                className="meme-link"
                to={{
                  pathname: `/editmonster/${meme.id}`,
                }}
              >
                Edit Monster
              </Link>
              {/* <Link className="meme-link ">
                <a href="#" class="button" id="btn-download">Download Monster</a>
              </Link> */}
              <button onClick={this.printMonster} className="meme-print">Download Monster</button>
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