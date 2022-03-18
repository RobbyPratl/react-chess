import './App.css';
import React from 'react';

// note onclick works with react !
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {current_click: ''};
  }

  currentClick(notation) {
    this.setState({current_click: notation})
  }

  render (){
    return (
      <div>
        <div className="chessboard">
          <div onClick={() => this.currentClick('a8')} className="white">♜</div>
          <div className="black">♞</div>
          <div className="white">♝</div>
          <div className="black">♛</div>
          <div className="white">♚</div>
          <div className="black">♝</div>
          <div className="white">♞</div>
          <div className="black">♜</div>
          <div className="black">♝</div>
          <div className="white">♝</div>
          <div className="black">♝</div>
          <div className="white">♝</div>
          <div className="black">♝</div>
          <div className="white">♝</div>
          <div className="black">♝</div>
          <div className="white">♝</div>
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
