import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './TicTacToe/TicTacToe';
import reportWebVitals from './reportWebVitals';

const Button = (props)=>
{
   const [title,setTitle] = useState("-");
 return <button style={{"height": "50px", "width" : "50px", "margin" : "10px"}}    
          onClick={()=>{if(title == "-"){setTitle( props.fire(props.number))}}}>  
   <div  style={{ visibility: title !='-' ? 'visible' : 'hidden' }}>{title}</div>       
   </button>
};


const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
  const [message,setMessage] = useState("");
  const newGame =(message)=>{
    setMessage(message);
     setGameId(gameId + 1);
  };
	return <div>
    <div>{message}</div>
    <TicTacToe key={gameId} startNewGame={newGame}/>
  </div>
}


ReactDOM.render(
  <React.StrictMode>
   <StarMatch />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
