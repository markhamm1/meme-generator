import React from 'react'

class Memes extends React.Component {
  constructor() {
    super()
    this.state = {
      allMemes: []
    }
  }

  componentDidMount() {
    console.log("getting all the memes")
  }

  render() {
    return (
      <div>
        <h1>All the Memes</h1>
      </div >
    )
  }
}

export default Memes