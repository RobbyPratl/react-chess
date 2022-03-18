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
    let x = this.state.board
    this.setState({current_click: notation})
    
  }

  moves(x){
    this.local_moves = this.state.moves
    if(this.local_moves.length == 2 /* OR this.local_moves[0] == x */){
      this.local_moves = []
    }else if(this.local_moves.length == 1){
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
          <div onClick={() => this.currentClick('b8')} className="black">♞</div>
          <div onClick={() => this.currentClick('c8')} className="white">♝</div>
          <div onClick={() => this.currentClick('d8')} className="black">♛</div>
          <div onClick={() => this.currentClick('e8')} className="white">♚</div>
          <div onClick={() => this.currentClick('f8')} className="black">♝</div>
          <div onClick={() => this.currentClick('g8')} className="white">♞</div>
          <div onClick={() => this.currentClick('h8')} className="black">♜</div>
          <div onClick={() => this.currentClick('a7')} className="black">♝</div>
          <div onClick={() => this.currentClick('b7')} className="white">♝</div>
          <div onClick={() => this.currentClick('c7')} className="black">♝</div>
          <div onClick={() => this.currentClick('d7')} className="white">♝</div>
          <div onClick={() => this.currentClick('e7')} className="black">♝</div>
          <div onClick={() => this.currentClick('f7')} className="white">♝</div>
          <div onClick={() => this.currentClick('g7')} className="black">♝</div>
          <div onClick={() => this.currentClick('h7')} className="white">♝</div>
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
