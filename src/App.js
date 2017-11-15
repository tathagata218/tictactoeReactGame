import React, { Component } from "react";
// import Box from "./components/Box"
// import friends from "./friends.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
 



  renderDiv = (i) => {
    const divStyle = {
      float  : "left", 
      width  : "50px",
      height : "50px",
      margin : "12px",
      paddingBottom : "15px",
      border : "2px solid black"
    }
    const clickTest =  () => {
      alert("this works " + i );
      };
    return (<div onClick={clickTest} style={divStyle} value={i}></div>);
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
  <div>
    <h1> This is the tictactoe game</h1>
      <div className = "container">
        <div className = "row">
          <div   className = "col-md-2" >
            {this.renderDiv(1)}
          </div>
        
          <div   className = "col-md-2" >
          {this.renderDiv(2)}
          </div>
        
          <div  className = "col-md-2" >
          {this.renderDiv(3)}
          </div>
      
        </div>

        <div className = "row">
          <div   className = "col-md-2" >
          {this.renderDiv(4)}
          </div>
      
          <div  className = "col-md-2" >
          {this.renderDiv(5)}
          </div>
      
          <div   className = "col-md-2" >
          {this.renderDiv(6)}
          </div>
        </div>

        <div className = "row">
          <div className = "col-md-2" >
          {this.renderDiv(7)}
          </div>
    
          <div  className = "col-md-2" >
          {this.renderDiv(8)}
          </div>
    
          <div   className = "col-md-2" >
            {this.renderDiv(9)}
          </div>
        </div>

      </div>
  </div>
       );
  }
}

export default App;
