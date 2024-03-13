import React, { useState } from 'react'
import'./App.css';
import Board from './components/Board';

function App() {

  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) => {
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

  //마지막 동작 
  const current = history[stepNumber];
   
  //승자판별
  const winner = calculateWinner(current.squares);

  let status;
  if(winner) {
    status = 'Winner : ' + winner;
  }else {
    status = `Next Player : ${xIsNext ? ' X': ' O'}`; 
  }

  const handleClick = (i) => {

    //블변성을 위해서 모든 값을 새로 받아옴
    const newHistory = history.slice(0, stepNumber + 1);
    //아래 jumpTo 함수를 실행해서 setpNumber state 값이 변경되고 histtory의 값을 변경하게 된다.

    const newCurrent = newHistory[newHistory.length - 1];
    //history값이 갱신되면서 갱신된 history의 최신값을 구함.

    const newSquares = newCurrent.squares.slice();
    //최신화된 newCurrent의 배열을 복사.

    console.log(newHistory);
    console.log(newCurrent);
    console.log(newSquares);

    
    if(calculateWinner(newSquares) || newSquares[i]){
      return
    }

    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...history, {squares: newSquares}]);
    setXIsNext(prev => !prev);
    setStepNumber(newHistory.length);

  }
  
  const moves = history.map((step, move) => {
    const desc = move ?
    "Go to move #" + move :
    "Go to game start";
    return (
      <li key={move}>
        {/* 여러개가 생성되는 것은 고유의 키값을 삽입해줘야함*/}

        <button className='move-button' onClick = {() => jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  const jumpTo = (jumpStep) => {
    setStepNumber(jumpStep);
    setXIsNext((jumpStep % 2 ) === 0);
    //짝수 순서로 돌아가면 xIsNext를 true로 설정.
  }


  return (
    <div className="game">
      <div className="game-boar">
        <Board 
          squares ={current.squares} 
          onClick = {(i) => {handleClick(i)}}
        />
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default App;
