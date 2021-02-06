import React, {useState} from 'react';

import Game from "./Game";
const TikTakToe = () => {
    const [gameId, setGameId] = useState(1);
    const [message,setMessage] = useState("");
    const newGame =(message)=>{
        setMessage(message);
        setGameId(gameId + 1);
    };
    return <div>
        <div>{message}</div>
        <Game key={gameId} startNewGame={newGame}/>
    </div>
}



export default TikTakToe;