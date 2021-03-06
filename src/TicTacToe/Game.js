import React, {useState} from 'react';
import Button from './Button.js';

const Game = (props)=>
{
  const [myArray]= useState(["0","1","2","3","4","5","6","7","8"]);
  const [buttons] = useState([0,1,2,3,4,5,6,7,8]);
  const [playerTurn,setPlayersTurn] = useState(true);
  const winCombination = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

  const checkWinner=()=>
  {
    const details = myArray.reduce( (acc, curr)=> {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {});

    if (details.O + details.X == 9)
    {
      props.startNewGame("Draw");
    }

    winCombination.map(test => {
      if(myArray[test[0]] ==myArray[test[1]] && myArray[test[0]] ==myArray[test[2]]  )
      {
        props.startNewGame("Winner Was: "+myArray[test[1]]);
      }
  });
  }
  const clickFired = (value) =>{
    const turn = playerTurn;
     setPlayersTurn(!playerTurn);
    myArray[value] =  turn ? "X" : "O";
    checkWinner();
    return turn ? "X" : "O";
  }

    return <div style={{"height" : "300px", "width" : "250px"}}>
       { buttons.map(f=>  <Button  fire={clickFired} number={f}/>)}
        </div>
 };


export default Game;