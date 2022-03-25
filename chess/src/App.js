import './App.css';
import React from 'react';

// note onclick works with react !
class App extends React.Component {
  constructor(props){
    super(props);
    this.pieces = {black_rook:'♜',black_knight:'♞',black_bishop:'♝',black_queen:'♛',black_king:'♚',black_pawn:'♟',white_pawn:'♙',white_rook:'♖',white_knight:'♘',white_bishop:'♗',white_queen:'♕',white_king:'♔'}
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
    white_to_move:true,
    status: null
  }
  
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

  *  --COMPLETE--  add tuple to allow for moves

  * Add state variable to change turns and add logic to change turns after a legal move

  *   --COMPLETE-- add onClick={() => this.moves(`VALUE`)} to every board cell div

  * map innerHTML of board cell divs to 

  *  --COMPLETE-- add this.state.board

  * -- 1/2 -- (can move, but can still take own pieces) allow this.board to move if this.local_moves reads a legal move &
    not another of own colors piece located in said cell

  * add taking pieces while storing taken pieces in another variable
    (will be used later to calculate point values)

  * add move legality // for knight!!! pawn in progress (- en passent)

  * add en passent 


*/

  convert_to_image(piece){
    const name_to_image_dict = {
      'bp':this.pieces.black_pawn,
      'bR':this.pieces.black_rook,
      'bN':this.pieces.black_knight,
      'bB':this.pieces.black_bishop,
      'bK':this.pieces.black_king,
      'bQ':this.pieces.black_queen,
      'wp':this.pieces.white_pawn,
      'wR':this.pieces.white_rook,
      'wN':this.pieces.white_knight,
      'wB':this.pieces.white_bishop,
      'wQ':this.pieces.white_queen,
      'wK':this.pieces.white_king
    }
    return name_to_image_dict[piece]
  }

  convert_notation_to_array(notation){
    let x = 8-notation[1];
    let y = notation[0];
    const y_dict = {'a':0,'b':1,'c':2,'d':'3','e':4,'f':5,'g':6,'h':7}
    return [x,y_dict[y]]
  }

  confirm_move(move){
    // pass in 2d array of length 2 [[0,0],[0,0]]
    let move_status = null

    let local_white_to_move = this.state.white_to_move

    let local_board = this.state.board

    let piece_to_move = this.convert_notation_to_array(move[0])
    let piece_moved_to = this.convert_notation_to_array(move[1])

    let piece_to_move_coord = this.convert_notation_to_array(move[0])
    let piece_moved_to_coord = this.convert_notation_to_array(move[1])

    let piece_moved = local_board[piece_to_move_coord[0]][piece_to_move_coord[1]].toString()
    let piece_moved_onto = local_board[piece_moved_to_coord[0]][piece_moved_to_coord[1]].toString()
    /* 
    Possible white knight moves are (x-2,y-1),(x-2,y+1),(x+2,y-1)(x+2,y+1)
    */

    var true_to_move = {
      'w': true,
      'b':false
    }

    console.log(piece_moved)
    if(true_to_move[piece_moved[0]] != local_white_to_move){
      console.log('not true')
      move_status = 'not your turn'
    }
    else if( (piece_moved[0] == piece_moved_onto[0] ) ){
      console.log('invalid move: friendly take')
      move_status = 'invalid move: friendly take'
    }
    else if(piece_moved == '--'){
      move_status = 'must move a piece'
    }
    // NEED REFACTOR
    else if(piece_moved == 'wp' && (piece_moved_to_coord[1] != piece_moved[1]) && ((piece_to_move_coord[0] != 6 && piece_to_move_coord[0]-piece_moved_to_coord[0] == 2 ) && (piece_to_move_coord[0]-1 != piece_moved_to_coord[0]))){
      console.log('invalid pawn move')
      move_status = 'invalid pawn move'
    }
    // knights ---------------
    //NEED REFACTOR
    else if(
      piece_moved[1] === 'N' 
      && (`${piece_to_move_coord[0]-2},${piece_to_move_coord[1]-1}` !== `${piece_moved_to_coord[0]},${piece_moved_to_coord[1]}`)
      && (`${piece_to_move_coord[0]-2},${piece_to_move_coord[1]+1}` !== `${piece_moved_to_coord[0]},${piece_moved_to_coord[1]}`)
      && (`${piece_to_move_coord[0]+2},${piece_to_move_coord[1]-1}` !== `${piece_moved_to_coord[0]},${piece_moved_to_coord[1]}`)
      && (`${piece_to_move_coord[0]+2},${piece_to_move_coord[1]+1}` !== `${piece_moved_to_coord[0]},${piece_moved_to_coord[1]}`)
      && (`${piece_to_move_coord[0]-1},${piece_to_move_coord[1]+2}` !== `${piece_moved_to_coord[0]},${piece_moved_to_coord[1]}`)
      && (`${piece_to_move_coord[0]-1},${piece_to_move_coord[1]-2}` !== `${piece_moved_to_coord[0]},${piece_moved_to_coord[1]}`)
      && (`${piece_to_move_coord[0]+1},${piece_to_move_coord[1]+2}` !== `${piece_moved_to_coord[0]},${piece_moved_to_coord[1]}`)
      && (`${piece_to_move_coord[0]+1},${piece_to_move_coord[1]-2}` !== `${piece_moved_to_coord[0]},${piece_moved_to_coord[1]}`)
      ){
        move_status = 'invalid knight move'
      console.log('invalid knight move')
    }
    
    // -----------------------
    else if(piece_moved[1] == 'R' && piece_moved_to_coord[0] != piece_to_move_coord[0] && piece_moved_to_coord[1] != piece_to_move_coord[0] ){
      move_status = 'invalid rook move'
    }
    else{
      local_board[piece_moved_to[0]][piece_moved_to[1]] = local_board[piece_to_move[0]][piece_to_move[1]]
      local_board[piece_to_move[0]][piece_to_move[1]] = '--'
      console.dir(local_board)
      local_white_to_move = !local_white_to_move;

    }
    this.setState({board:local_board,status:move_status,white_to_move:local_white_to_move})

  }
  
  restart(){
    let og_board = [["bR","bN","bB","bQ","bK","bB","bN","bR"],
    ["bp","bp","bp","bp","bp","bp","bp","bp"],
    ["--","--","--","--","--","--","--","--"],
    ["--","--","--","--","--","--","--","--"],
    ["--","--","--","--","--","--","--","--"],
    ["--","--","--","--","--","--","--","--"],
    ["wp","wp","wp","wp","wp","wp","wp","wp"],
    ["wR","wN","wB","wQ","wK","wB","wN","wR"]];
    this.setState({board:og_board})
  }

  moves(x){
    // currently changing this function so it takes in [x][x] instead of algebraic notation

        if(x === this.move[0]){
          this.move = [];
        }
        else if(this.move[0] === '--' ||(this.move[1] === '--' && this.move[0] === '--' )){
          this.move = []
        }
        else if(this.move.length === 2){
          console.log('move list cleared')
        }
        else if(this.move.length === 1){
          this.move[1] = x;
          this.confirm_move(this.move)
          this.move = []
        }
        else{
          this.move[0] = x;
        }
        this.setState({current_click:this.move})
      }

  render (){
    return (
      <div>
        <center>
        <div className="chessboard">
          
          <div onClick={() => this.moves('a8')} className="white">{this.convert_to_image(this.state.board[0][0])}</div>
          <div onClick={() => this.moves('b8')} className="black">{this.convert_to_image(this.state.board[0][1])}</div>
          <div onClick={() => this.moves('c8')} className="white">{this.convert_to_image(this.state.board[0][2])}</div>
          <div onClick={() => this.moves('d8')} className="black">{this.convert_to_image(this.state.board[0][3])}</div>
          <div onClick={() => this.moves('e8')} className="white">{this.convert_to_image(this.state.board[0][4])}</div>
          <div onClick={() => this.moves('f8')} className="black">{this.convert_to_image(this.state.board[0][5])}</div>
          <div onClick={() => this.moves('g8')} className="white">{this.convert_to_image(this.state.board[0][6])}</div>
          <div onClick={() => this.moves('h8')} className="black">{this.convert_to_image(this.state.board[0][7])}</div>
          <div onClick={() => this.moves('a7')} className="black">{this.convert_to_image(this.state.board[1][0])}</div>
          <div onClick={() => this.moves('b7')} className="white">{this.convert_to_image(this.state.board[1][1])}</div>
          <div onClick={() => this.moves('c7')} className="black">{this.convert_to_image(this.state.board[1][2])}</div>
          <div onClick={() => this.moves('d7')} className="white">{this.convert_to_image(this.state.board[1][3])}</div>
          <div onClick={() => this.moves('e7')} className="black">{this.convert_to_image(this.state.board[1][4])}</div>
          <div onClick={() => this.moves('f7')} className="white">{this.convert_to_image(this.state.board[1][5])}</div>
          <div onClick={() => this.moves('g7')} className="black">{this.convert_to_image(this.state.board[1][6])}</div>
          <div onClick={() => this.moves('h7')} className="white">{this.convert_to_image(this.state.board[1][7])}</div>
          <div onClick={() => this.moves('a6')} className="white">{this.convert_to_image(this.state.board[2][0])}</div>
          <div onClick={() => this.moves('b6')} className="black">{this.convert_to_image(this.state.board[2][1])}</div>
          <div onClick={() => this.moves('c6')} className="white">{this.convert_to_image(this.state.board[2][2])}</div>
          <div onClick={() => this.moves('d6')} className="black">{this.convert_to_image(this.state.board[2][3])}</div>
          <div onClick={() => this.moves('e6')} className="white">{this.convert_to_image(this.state.board[2][4])}</div>
          <div onClick={() => this.moves('f6')} className="black">{this.convert_to_image(this.state.board[2][5])}</div>
          <div onClick={() => this.moves('g6')} className="white">{this.convert_to_image(this.state.board[2][6])}</div>
          <div onClick={() => this.moves('h6')} className="black">{this.convert_to_image(this.state.board[2][7])}</div>
          <div onClick={() => this.moves('a5')} className="black">{this.convert_to_image(this.state.board[3][0])}</div>
          <div onClick={() => this.moves('b5')} className="white">{this.convert_to_image(this.state.board[3][1])}</div>
          <div onClick={() => this.moves('c5')} className="black">{this.convert_to_image(this.state.board[3][2])}</div>
          <div onClick={() => this.moves('d5')} className="white">{this.convert_to_image(this.state.board[3][3])}</div>
          <div onClick={() => this.moves('e5')} className="black">{this.convert_to_image(this.state.board[3][4])}</div>
          <div onClick={() => this.moves('f5')} className="white">{this.convert_to_image(this.state.board[3][5])}</div>
          <div onClick={() => this.moves('g5')} className="black">{this.convert_to_image(this.state.board[3][6])}</div>
          <div onClick={() => this.moves('h5')} className="white">{this.convert_to_image(this.state.board[3][7])}</div>
          <div onClick={() => this.moves('a4')} className="white">{this.convert_to_image(this.state.board[4][0])}</div>
          <div onClick={() => this.moves('b4')} className="black">{this.convert_to_image(this.state.board[4][1])}</div>
          <div onClick={() => this.moves('c4')} className="white">{this.convert_to_image(this.state.board[4][2])}</div>
          <div onClick={() => this.moves('d4')} className="black">{this.convert_to_image(this.state.board[4][3])}</div>
          <div onClick={() => this.moves('e4')} className="white">{this.convert_to_image(this.state.board[4][4])}</div>
          <div onClick={() => this.moves('f4')} className="black">{this.convert_to_image(this.state.board[4][5])}</div>
          <div onClick={() => this.moves('g4')} className="white">{this.convert_to_image(this.state.board[4][6])}</div>
          <div onClick={() => this.moves('h4')} className="black">{this.convert_to_image(this.state.board[4][7])}</div>
          <div onClick={() => this.moves('a3')} className="black">{this.convert_to_image(this.state.board[5][0])}</div>
          <div onClick={() => this.moves('b3')} className="white">{this.convert_to_image(this.state.board[5][1])}</div>
          <div onClick={() => this.moves('c3')} className="black">{this.convert_to_image(this.state.board[5][2])}</div>
          <div onClick={() => this.moves('d3')} className="white">{this.convert_to_image(this.state.board[5][3])}</div>
          <div onClick={() => this.moves('e3')} className="black">{this.convert_to_image(this.state.board[5][4])}</div>
          <div onClick={() => this.moves('f3')} className="white">{this.convert_to_image(this.state.board[5][5])}</div>
          <div onClick={() => this.moves('g3')} className="black">{this.convert_to_image(this.state.board[5][6])}</div>
          <div onClick={() => this.moves('h3')} className="white">{this.convert_to_image(this.state.board[5][7])}</div>
          <div onClick={() => this.moves('a2')} className="white">{this.convert_to_image(this.state.board[6][0])}</div>
          <div onClick={() => this.moves('b2')} className="black">{this.convert_to_image(this.state.board[6][1])}</div>
          <div onClick={() => this.moves('c2')} className="white">{this.convert_to_image(this.state.board[6][2])}</div>
          <div onClick={() => this.moves('d2')} className="black">{this.convert_to_image(this.state.board[6][3])}</div>
          <div onClick={() => this.moves('e2')} className="white">{this.convert_to_image(this.state.board[6][4])}</div>
          <div onClick={() => this.moves('f2')} className="black">{this.convert_to_image(this.state.board[6][5])}</div>
          <div onClick={() => this.moves('g2')} className="white">{this.convert_to_image(this.state.board[6][6])}</div>
          <div onClick={() => this.moves('h2')} className="black">{this.convert_to_image(this.state.board[6][7])}</div>
          <div onClick={() => this.moves('a1')} className="black">{this.convert_to_image(this.state.board[7][0])}</div>
          <div onClick={() => this.moves('b1')} className="white">{this.convert_to_image(this.state.board[7][1])}</div>
          <div onClick={() => this.moves('c1')} className="black">{this.convert_to_image(this.state.board[7][2])}</div>
          <div onClick={() => this.moves('d1')} className="white">{this.convert_to_image(this.state.board[7][3])}</div>
          <div onClick={() => this.moves('e1')} className="black">{this.convert_to_image(this.state.board[7][4])}</div>
          <div onClick={() => this.moves('f1')} className="white">{this.convert_to_image(this.state.board[7][5])}</div>
          <div onClick={() => this.moves('g1')} className="black">{this.convert_to_image(this.state.board[7][6])}</div>
          <div onClick={() => this.moves('h1')} className="white">{this.convert_to_image(this.state.board[7][7])}</div>
        </div>
        <div className='restart_button' onClick={()=>this.restart()}>restart</div>
      <h1>♟</h1>
      <h1>{this.state.status}</h1>
      </center>
      </div>
    )
  }
}

export default App;
