import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";


const Board = ({squares, onClick}) =>  {

  /*
  constructor(props) {

    
            super를 사용해야 this를 사용할 수 있음. 
            (새로운 객체를 생성하거나 상속받은 객체를 수정하기 위해서는 무조건 super를 선언해야됨)
            //객체 자체를 통으로 넘겨줄수는 없음.
       
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }
  */

  const renderSquare = (i) => {
      return <Square  value={squares[i]} onClick = {() => onClick(i)}/>
  }

  

  return (
    <div className='board-wrapper'>
      <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
      </div>
      <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
      </div>
      <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
      </div>
    </div>
  )  
}

export default Board;