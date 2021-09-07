import React,{useState} from "react";
import Board from "./Components/Board";
import "./Styles/root.scss";
import calculateWinner from "./Components/calculateWinner";
import StatusMessage from "./Components/StatusMessage";
import History from "./Components/History";

const App = ()=>{
  const[history, setHistory] = useState([{board:Array(9).fill(null),isXNext:true}]);
  const[count,setCount] = useState(0);
  const current = history[count];
  const {winner,winningSquares} = calculateWinner(current.board);
  const handleSquare = position=>{
      if (current.board[position]||winner){
          return;
      }
      setHistory((prev)=>{
          const last = prev[prev.length-1];
          const array1 =last.board.map((square,pos)=>{
              if (pos===position){
                  return current.isXNext?"X":"0";
              }
              return square;
          })
          return prev.concat({board:array1,isXNext:!last.isXNext});
      })
      setCount((prev)=>prev+1)
  };
  const moveT=(move)=>{
    setCount(move);
  }
  const noMovesLeft = current.board.every((el)=>el!==null);
  return (
    <div className="app">
      <h1>TICTACTOE</h1>
      <StatusMessage winner={winner} noMovesLeft={noMovesLeft} current = {current}/>
      <Board board={current.board} handleSquare={handleSquare} winningSquares={winningSquares}/>
      <History history={history} moveT={moveT} count={count}/>
    </div>
  );
}
export default App
