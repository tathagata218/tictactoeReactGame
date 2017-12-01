import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = { 
      button_clicked : true,
      winningCombos : [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
      
          };

  divClickfuncTwo = (index) =>  {
  
  if( this.state.board[index] === "" && !this.state.winner1 && !this.state.winner2 && !this.state.winner3 && !this.state.winner4&& !this.state.winner5 && !this.state.winner6 && !this.state.winner7 && !this.state.winner8){
  this.state.board[index] = this.state.current_player;

  this.setState({
    board : this.state.board,
    current_player : this.state.player_one_symbol === this.state.current_player ?  this.state.player_two_symbol :  this.state.player_one_symbol , 
    winner1 : (this.state.board[0] !== "" && this.state.board[1] !== "" && this.state.board[2] !== "" &&this.state.board[0] === this.state.board[1] && this.state.board[0] === this.state.board[2] && this.state.board[1] === this.state.board[2]) ? this.state.board[0] : false,
    winner2 : (this.state.board[3] !== "" && this.state.board[4] !== "" && this.state.board[5] !== "" && this.state.board[3] === this.state.board[4] && this.state.board[3] === this.state.board[5] && this.state.board[5] === this.state.board[4]) ? this.state.board[5] : false,
    winner3 : (this.state.board[6] !== "" && this.state.board[7] !== "" && this.state.board[8] !== "" && this.state.board[6] === this.state.board[7] && this.state.board[6] === this.state.board[8] && this.state.board[7] === this.state.board[8]) ? this.state.board[7] : false,
    // winner4 : (this.state.board[0] === this.state.board[3] && this.state.board[0] === this.state.board[6] && this.state.board[3] === this.state.board[6]) ? this.state.board[3] : false,
    // winner5 : (this.state.board[1] === this.state.board[4] && this.state.board[1] === this.state.board[7] && this.state.board[4] === this.state.board[7]) ? this.state.board[4] : false,
    // winner6 : (this.state.board[2] === this.state.board[5] && this.state.board[2] === this.state.board[8] && this.state.board[5] === this.state.board[8]) ? this.state.board[0] : false,
    // winner7 : (this.state.board[0] === this.state.board[4] && this.state.board[0] === this.state.board[8] && this.state.board[4] === this.state.board[8]) ? this.state.board[4] : false,
    // winner8 : (this.state.board[2] === this.state.board[4] && this.state.board[2] === this.state.board[6] && this.state.board[4] === this.state.board[6]) ? this.state.board[4] : false
    
     
    
  });

 
  }
 
 
  this.render();
  console.log(this.state);
 
}

  divClickfuncOne (index){
  
  }

  onePlayer =  () => {

    this.setState({
      button_clicked : false,
      player_info : "Single Player",
      player_one_symbol : "X",
      player_two_symbol : "O",
      current_player : "X",
      single_player_status : true,
      board : [
        '','','','','','','','',''
      ],
      winner1 : false,
      winner2 : false,
      winner3 : false,
      winner4 : false,
      winner5 : false,
      winner6 : false,
      winner7 : false,
      winner8 : false,

    });


    this.render();
  }
  
  twoPlayer = () => {
   
   this.setState ({
      button_clicked : false,
      player_info : "Two Player",
      player_one_symbol : "X",
      player_two_symbol : "O",
      current_player : "X",
      two_player_status : true,
      board : [
        '','','','','','','','',''
      ],
      winner1 : false,
      winner2 : false,
      winner3 : false,
      winner4 : false,
      winner5 : false,
      winner6 : false,
      winner7 : false,
      winner8 : false,
    });
    this.render();
  }

  goBack = () => { 
    this.setState({
      button_clicked: true,
      player_info : "Single Player",
      player_one_symbol : "X",
      player_two_symbol : "O",
      current_player : "X",
      single_player_status : false,
      two_player_status : false,
      board : [
        '','','','','','','','',''
      ],
      winner1 : false,
      winner2 : false,
      winner3 : false,
      winner4 : false,
      winner5 : false,
      winner6 : false,
      winner7 : false,
      winner8 : false,
    });
    
    this.render();
   
    } 
    
  

 

  render() {
    
    if(this.state.button_clicked ){
    return (
      <div>
        <div className="mainDispalay">
          <h1>Tic Tac Toe Game</h1>
          <div>
            <button className="btnClick" onClick={this.onePlayer} >Player VS Computer</button>
            <button className="btnClick" onClick={this.twoPlayer} >Player VS Player</button>
          </div>
        </div>
      </div>
    );
  }
   else if(this.state.single_player_status){
      return(
        <div>
          <div className="mainDispalay">
            <h1> {this.state.player_info} </h1>
            <button onClick={this.goBack}>Go Back</button>
            <h2>it's '{this.state.current_player}' turn !!!</h2>
          </div>

        <div className="board">
            {this.state.board.map((value,index) => {
                return (<div onClick={ () => { this.divClickfuncOne(index) }} value={index} className="square">{value}</div>)
            })} 
   
          </div>
      </div>
      );
    }
    else if (this.state.two_player_status && this.state.winner1 === false && this.state.winner2 === false && this.state.winner3 === false && this.state.winner4 === false &&this.state.winner5 === false && this.state.winner6 === false && this.state.winner7 === false &&  this.state.winner8 === false ){
      return(
        <div>
          <div className="mainDispalay">
            <h1>{this.state.player_info}</h1>
            <button onClick={this.goBack}>Go Back</button>
            <h2>it's '{this.state.current_player}' turn !!!</h2>
          </div>
          <div className="mainDispalay">
              
          </div>
          <div className="board">
              {this.state.board.map((value,index) => {
                return (<div onClick={ () => {this.divClickfuncTwo(index) }} value={index} className="square">{value}</div>)
              })} 
        </div>
      </div>
      );
    }
    else if (this.state.winner1 !== false ){
      return (
        <div>
          <div className="mainDispalay">
            <h1 value= "test1">The winner is {this.state.winner1}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
    else if (this.state.winner2 !== false ){
      return (
        <div>
          <div className="mainDispalay">
            <h1 value= "test2">The winner is {this.state.winner2}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
    else if (this.state.winner3 !== false ){
      return (
        <div>
          <div className="mainDispalay">
            <h1 value= "test3">The winner is {this.state.winner3}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
    else if (this.state.winner4 !== false ){
      return (
        <div>
          <div className="mainDispalay">
            <h1 value= "test4">The winner is {this.state.winner4}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
    else if (this.state.winner5 !== false ){
      return (
        <div>
          <div className="mainDispalay">
            <h1 value= "test5">The winner is {this.state.winner5}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
    else if (this.state.winner6 !== false ){
      return (
        <div>
          <div className="mainDispalay">
            <h1 value= "test6">The winner is {this.state.winner6}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
    else if (this.state.winner7 !== false ){
      return (
        <div>
          <div className="mainDispalay">
            <h1 value= "test7">The winner is {this.state.winner7}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
    else if (this.state.winner8 !== false ){
      return (
        <div>
          <div className="mainDispalay">
            <h1 value= "test8">The winner is {this.state.winner8}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
  };

}

export default App;
