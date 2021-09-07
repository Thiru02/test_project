import React,{useState} from "react";
import Board from "./Components/Board";
import "./Styles/root.scss";
import calculateWinner from "./Components/calculateWinner";
import StatusMessage from "./Components/StatusMessage";
import History from "./Components/History";

const App = ()=>{
  const[history, setHistory] = useState([{board:Array(9).fill(null),isXNext:true}]);
  console.log(history);
  const[count,setCount] = useState(0);
  const current = history[count];
  const winner = calculateWinner(current.board);
  const message = winner?`Winnner is ${winner}`:`Next player is ${current.isXNext?"X":"O"}`;
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
  return (
    <div className="app">
      <h1>TICTACTOE</h1>
      <StatusMessage/>
      <Board board={current.board} handleSquare={handleSquare}/>
      <History history={history} moveT={moveT} count={count}/>
    </div>
  );
}
export default App
