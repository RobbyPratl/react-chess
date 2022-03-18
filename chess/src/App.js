import './App.css';
import React from 'react';

// note onclick works with react !
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {current_click: '',
    board: null,
    moves: []
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

  * -- COMPLETE -- add tuple to allow for moves

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
  moves(x){
    this.local_moves = this.state.moves
    if(this.local_moves.length === 2 || this.local_moves[0] === x/* OR this.local_moves[0] == x */){
      this.local_moves = []
    }else if(this.local_moves.length === 1){
      this.local_moves[1] = x;
    }else{
      this.local_moves[0] = x;
    }
    this.setState({moves: this.local_moves})
    console.log(this.local_moves)
  }



  render (){
    return (
      <div>
        <div className="chessboard">
          
          <div onClick={() => this.moves('a8')} className="white">{"♜"}</div>
          <div onClick={() => this.moves('b8')} className="black">♞</div>
          <div onClick={() => this.moves('c8')} className="white">♝</div>
          <div onClick={() => this.moves('d8')} className="black">♛</div>
          <div onClick={() => this.moves('e8')} className="white">♚</div>
          <div onClick={() => this.moves('f8')} className="black">♝</div>
          <div onClick={() => this.moves('g8')} className="white">♞</div>
          <div onClick={() => this.moves('h8')} className="black">♜</div>
          <div onClick={() => this.moves('a7')} className="black">♝</div>
          <div onClick={() => this.moves('b7')} className="white">♝</div>
          <div onClick={() => this.moves('c7')} className="black">♝</div>
          <div onClick={() => this.moves('d7')} className="white">♝</div>
          <div onClick={() => this.moves('e7')} className="black">♝</div>
          <div onClick={() => this.moves('f7')} className="white">♝</div>
          <div onClick={() => this.moves('g7')} className="black">♝</div>
          <div onClick={() => this.moves('h7')} className="white">♝</div>
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
