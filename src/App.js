import React, { Component } from "react";
import Box from "./components/Box"
import friends from "./friends.json";


const divStyle = {
  float: "left",
  paddingBottom : "15px",
  background: "gray"
}
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  clickTest =  (e, data) => {
  
    console.log(this);
    console.log(e);
    console.log(data);
    alert("this works");
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
  <div>
    <h1> This is the tictactoe game</h1>
      <div className = "container">
        <div className = "row">
          <div style={divStyle}  className = "col-md-2" >
            <Box value="1" func={this.clickTest} />
          </div>
        
          <div style={divStyle}  className = "col-md-2" >
            <Box value="2" func={this.clickTest} />
          </div>
        
          <div style={divStyle}  className = "col-md-2" >
            <Box value="3" func={this.clickTest}/>
          </div>
      
        </div>

        <div className = "row">
          <div style={divStyle}  className = "col-md-2" >
            <Box value="4" func={this.clickTest}/>
          </div>
      
          <div style={divStyle}  className = "col-md-2" >
            <Box value="5" func={this.clickTest}/>
          </div>
      
          <div style={divStyle}  className = "col-md-2" >
            <Box value="6" func={this.clickTest}/>
          </div>
        </div>

        <div className = "row">
          <div style={divStyle}  className = "col-md-2" >
            <Box value="6" func={this.clickTest}/>
          </div>
    
          <div style={divStyle}  className = "col-md-2" >
            <Box value="7" func={this.clickTest}/>
          </div>
    
          <div style={divStyle}  className = "col-md-2" >
            <Box value="8" func={this.clickTest}/>
          </div>
        </div>

      </div>
  </div>
       );
  }
}

export default App;
