import React,{useState} from "react";
import Board from "./Components/Board";
import "./Styles/root.scss";
import calculateWinner from "./Components/calculateWinner";

const App = ()=>{
  const[board, setBoard] = useState(Array(9).fill(null));
  const[isXNext,setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  let message = "Next player";
  const handleSquare = position=>{
      if (board[position]||winner){
          message = `winner is ${winner}`
          return;
      }
      setBoard((prev)=>{
          return(
              prev.map((square,pos)=>{
                  if (pos===position){
                      return isXNext?"X":"0";
                  }
                  return square;
              })
          );
      })
      setIsXNext(prev=>!prev);
  };

  return (
    <div className="app">
      <h1>TICTACTOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquare={handleSquare}/>
    </div>
  );
}
export default App
