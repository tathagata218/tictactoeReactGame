import React, { Component } from "react";
import Box from "./components/Box"
import friends from "./friends.json";


const divStyle = {
float: "left",
background: "green"
}
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
  <div>
       <h1> This is the tictactoe game</h1>
    <div className = "container">
       <div className = "row">
       <div style={divStyle} calssName = "col-md-2" >
            <Box/>
      </div>
      <div style={divStyle} calssName = "col-md-2" >
            <Box/>
      </div>
      <div style={divStyle} calssName = "col-md-2" >
            <Box/>
      </div>
      </div>
    </div>
  </div>
       );
  }
}

export default App;
