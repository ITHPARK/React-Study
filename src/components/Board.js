import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";


const Board = () =>  {

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

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  

  const calculateWinner = () => {
    //빙고가 될 수 있는 모든 경우의 수
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    //승자판별하는 코드
    for(let index = 0; index < lines.length; index++) {
      const [a, b ,c] = lines[index];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = 'Winner : ' + winner;
  }else {
    status = `Next Player : ${xIsNext ? ' X': ' O'}`; 
  }

  
  const handleClick = (i) => {
    const newSquares = squares.slice();
    //slice에 아무것도 넣지 않으면 모든 배열을 복사

    if(calculateWinner(newSquares) || newSquares[i]){
      return;
    }

    newSquares[i] = xIsNext ? 'X': 'O';

    setSquares(newSquares);
    //squares 배열 state를 newSquares배열값으로 변경해주는 함수

    setXIsNext(prev => !prev);
    //차례가 넘어가야하니 값을 반대 값으로 변경해줌
    /*
      위는 이전 값을 반대되는 값으로 변경해주는 코드 
      setXIsNext(!xIsNext);로 입력하면 변경된 값이 입력되지 않는다.
      ex) 콘솔을 2번 작성해도 1변한 값이 나온다.
    */
  }

  const renderSquare = (i) => {
      return <Square  value={squares[i]} onClick ={() => handleClick(i)}/>
  }

  

  return (
    <div className='board'>
      <div className='status'>{status}</div>
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