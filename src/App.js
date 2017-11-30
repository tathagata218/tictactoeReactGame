import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = { 
      button_clicked : true,
      winningCombos : [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
      
          };

  divClickfuncTwo = (index) =>  {
  
  if( this.state.board[index] === "" && !this.state.winner){
  this.state.board[index] = this.state.current_player;

  this.setState({
    board : this.state.board,
    current_player : this.state.player_one_symbol === this.state.current_player ?  this.state.player_two_symbol :  this.state.player_one_symbol , 
    winner1 : (this.state.board[0] === this.state.board[1] && this.state.board[0] === this.state.board[2] && this.state.board[1] === this.state.board[2]) ? this.state.board[0] : false
    
     
    
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
      winner : false
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
      winner : false
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
      winner : false
    });
    
    this.render();
   
    } 
    
  

   checkWinner = () => {
    let board = this.state.board;
    let winner = this.state.winningCombos;
    
    for( let i=0; i< winner; i++){
      if( board[winner[i][0]]===board[winner[i][1]] &&board[winner[i][0]]===board[winner[i][2]] &&board[winner[i][1]]===board[winner[i][0]] && board[winner[i][1]]===board[winner[i][2]] && board[winner[i][2]]===board[winner[i][1]] && board[winner[i][2]]===board[winner[i][0]]){
        return  true;
      }
      else{
        return null;
      }
    }

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
    else if (this.state.two_player_status && this.state.winner1 === false){
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
            <h1>The winner is {this.state.winner}</h1>
            <button onClick={this.goBack}>Go Back Start</button>
          </div>
        </div>
      );
    }
  };

}

export default App;
