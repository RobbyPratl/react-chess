import './App.css';
import React from 'react';

// note onclick works with react !
class App extends React.Component {
  constructor(props){
    super(props);
    this.pieces = {black_rook:'♜',black_knight:'♞',black_bishop:'♝',black_queen:'♛',black_king:'♚',black_pawn:'♟'}
    this.move = []
    this.state = {current_click: null,
    board:[
      ["bR","bN","bB","bQ","bK","bB","bN","bR"],
      ["bp","bp","bp","bp","bp","bp","bp","bp"],
      ["--","--","--","--","--","--","--","--"],
      ["--","--","--","--","--","--","--","--"],
      ["--","--","--","--","--","--","--","--"],
      ["--","--","--","--","--","--","--","--"],
      ["wp","wp","wp","wp","wp","wp","wp","wp"],
      ["wR","wN","wB","wQ","wK","wB","wN","wR"]
    ],
  };
  }
// Cant use setState inside conditional so we must take in value, set to variable, 
// change variable then pass out new state
  currentClick(notation) {
    this.setState(
    {
      current_click: notation,
      moves: []
    })
    
  }
/* 
Explanations:
  * () => moves(x) checks last clicked sqaures, assuming we pass in values
      in order to know in the future when to switch turns and stop players 
      from not making a move.

TODO: 

  *  COMPLETE  add tuple to allow for moves

  * Add state variable to change turns and add logic to change turns after a legal move

  * add onClick={() => this.moves(`VALUE`)} to every board cell div

  * map innerHTML of board cell divs to 

  * add this.state.board

  * allow this.board to move if this.local_moves reads a legal move &
    not another of own colors piece located in said cell

  * add taking pieces while storing taken pieces in another variable
    (will be used later to calculate point values)

  * add move legality

  * add en passent 


*/

  convert_to_image(wp){
    if 
  }

  confirm_move(notation){
    if(this.move.length === 2){

    }
  }

  moves(x){
// currently changing this function so it takes in [x][x] instead of algebraic notation
    if(this.move.length === 2){
      this.move = [];
    }
    else if(this.move.length === 1){
      this.move[1] = x;
    }
    else{
      this.move[0] = x;
    }
    this.setState({current_click:this.move})
    this.confirm_move(x)
  }

  render (){
    return (
      <div>
        <div className="chessboard">
          
          <div onClick={() => this.moves('a8')} className="white">{this.state.board[0][0]}</div>
          <div onClick={() => this.moves('b8')} className="black">{this.state.board[0][1]}</div>
          <div onClick={() => this.moves('c8')} className="white">{this.state.board[0][2]}</div>
          <div onClick={() => this.moves('d8')} className="black">{this.state.board[0][3]}</div>
          <div onClick={() => this.moves('e8')} className="white">{this.state.board[0][4]}</div>
          <div onClick={() => this.moves('f8')} className="black">{this.state.board[0][5]}</div>
          <div onClick={() => this.moves('g8')} className="white">{this.state.board[0][6]}</div>
          <div onClick={() => this.moves('h8')} className="black">{this.state.board[0][7]}</div>
          <div onClick={() => this.moves(this.state.board[1][0])} className="black">{this.state.board[1][0]}</div>
          <div onClick={() => this.moves('b7')} className="white">{this.state.board[1][1]}</div>
          <div onClick={() => this.moves('c7')} className="black">{this.state.board[1][2]}</div>
          <div onClick={() => this.moves('d7')} className="white">{this.state.board[1][3]}</div>
          <div onClick={() => this.moves('e7')} className="black">{this.state.board[1][4]}</div>
          <div onClick={() => this.moves('f7')} className="white">{this.state.board[1][5]}</div>
          <div onClick={() => this.moves('g7')} className="black">{this.state.board[1][6]}</div>
          <div onClick={() => this.moves('h7')} className="white">{this.state.board[1][7]}</div>
          <div onClick={() => this.moves('a6')} className="white">{this.state.board[2][0]}</div>
          <div onClick={() => this.moves('b6')} className="black">{this.state.board[2][1]}</div>
          <div onClick={() => this.moves('c6')} className="white">{this.state.board[2][2]}</div>
          <div onClick={() => this.moves('d6')} className="black">{this.state.board[2][3]}</div>
          <div onClick={() => this.moves('e6')} className="white">{this.state.board[2][4]}</div>
          <div onClick={() => this.moves('f6')} className="black">{this.state.board[2][5]}</div>
          <div onClick={() => this.moves('g6')} className="white">{this.state.board[2][6]}</div>
          <div onClick={() => this.moves('h6')} className="black">{this.state.board[2][7]}</div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="black"></div>
          <div className="white"></div>
          <div className="white">&#9817;</div>
          <div className="black">&#9817;</div>
          <div className="white">&#9817;</div>
          <div className="black">&#9817;</div>
          <div className="white">&#9817;</div>
          <div className="black">&#9817;</div>
          <div className="white">&#9817;</div>
          <div className="black">&#9817;</div>
          <div className="black">&#9814;</div>
          <div className="white">&#9816;</div>
          <div className="black">&#9815;</div>
          <div className="white">&#9813;</div>
          <div className="black">&#9812;</div>
          <div className="white">&#9815;</div>
          <div className="black">&#9816;</div>
          <div className="white">&#9814;</div>
        </div>
      <h1>{this.state.current_click}</h1>
      </div>
    )
  }
}

export default App;
