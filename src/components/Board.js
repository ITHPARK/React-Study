import React, { Component } from 'react'
import { Square } from './Square'
import "./Board.css";


export class Board extends Component {

  constructor(props) {

     /*
            super를 사용해야 this를 사용할 수 있음. 
            (새로운 객체를 생성하거나 상속받은 객체를 수정하기 위해서는 무조건 super를 선언해야됨)
            //객체 자체를 통으로 넘겨줄수는 없음.
        */
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  renderSquare (i) {
      return <Square  value={this.state.squares[i]} />
  }

  render() {

    return (
      <div className='board'>
        <div className='status'>Next Player: X, O</div>
        <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className='board-row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

 