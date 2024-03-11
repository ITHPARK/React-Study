import'./App.css';
import { Board } from './components/Board'

function App() {
  return (
    <div className="game">
      <div className="game-boar">
        <Board />
      </div>
      <div className="game-info">
        game-info
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
