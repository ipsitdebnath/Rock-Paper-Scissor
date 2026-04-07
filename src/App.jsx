import { useState } from "react";
import "./Game.css";

function Game() {

  let [usermove, usersetmove] = useState("");
  let [compmove, compsetmove] = useState("");
  let [userscore, usersetscore] = useState(0);
  let [compscore, compsetscore] = useState(0);
  let [userhistory, setuserhistory] = useState([]);
  let [comphistory, setcomphistory] = useState([]);
  let [result,setresult] = useState("");

  function resetGame(){
    usersetmove("");
    compsetmove("");
    usersetscore(0);
    compsetscore(0);
    setuserhistory([]);x
    setcomphistory([]);
    setresult("");
  }

  function handleClick(move){

    let a = Math.random();

    if (a <= 0.3){

      compsetmove(1);

      if (move == 1){
        usersetmove("🪨");
        setresult("Draw");
      }
      else if (move == 2){
        usersetscore(userscore + 1);
        usersetmove("📃");
        setresult("You Win");
      }
      else{
        compsetscore(compscore + 1);
        usersetmove("✂️");
        setresult("Computer Wins");
      }

      setcomphistory([...comphistory,"🪨"]);
      setuserhistory([...userhistory,
        move === 1 ? "🪨" :
        move === 2 ? "📃" :
        "✂️"
      ]);
    }

    else if (a <= 0.6){

      compsetmove(2);

      if (move == 1){
        compsetscore(compscore + 1);
        usersetmove("🪨");
        setresult("Computer Wins");
      }
      else if (move == 2){
        usersetmove("📃");
        setresult("Draw");
      }
      else{
        usersetscore(userscore + 1);
        usersetmove("✂️");
        setresult("You Win");
      }

      setcomphistory([...comphistory,"📃"]);
      setuserhistory([...userhistory,
        move === 1 ? "🪨" :
        move === 2 ? "📃" :
        "✂️"
      ]);
    }

    else{

      compsetmove(3);

      if (move == 1){
        usersetscore(userscore + 1);
        usersetmove("🪨");
        setresult("You Win");
      }
      else if (move == 2){
        compsetscore(compscore + 1);
        usersetmove("📃");
        setresult("Computer Wins");
      }
      else{
        usersetmove("✂️");
        setresult("Draw");
      }

      setcomphistory([...comphistory,"✂️"]);
      setuserhistory([...userhistory,
        move === 1 ? "🪨" :
        move === 2 ? "📃" :
        "✂️"
      ]);
    }
  }

  return (

    <div className="gameContainer">

      <h1 className="title">Rock Paper Scissors</h1>

      <div className="mainLayout">

        <div className="leftPanel">

          <h2>Computer : You</h2>

          <h1 className="moves">

            {compmove === 1 ? "🪨" :
             compmove === 2 ? "📃" :
             compmove === 3 ? "✂️" : ""}

            :

            {usermove}

          </h1>

          <h2 className="result">{result}</h2>

          <h3 className="turn">
            Turn : {userhistory.length}
          </h3>

          <h1 className="score">
            {compscore} : {userscore}
          </h1>

          <div className="buttonContainer">

            <button onClick={() => handleClick(1)}>🪨</button>
            <button onClick={() => handleClick(2)}>📃</button>
            <button onClick={() => handleClick(3)}>✂️</button>

          </div>

          <button className="resetBtn" onClick={resetGame}>
            Reset Game
          </button>

        </div>


        <div className="rightPanel">

          <h2 className="historyTitle">History</h2>

          <div className="historyContainer">

            <div className="historyBox">

              <h3>Computer</h3>

              {comphistory.map((move,index)=>{
                return <p key={index}>{move}</p>
              })}

            </div>

            <div className="historyBox">

              <h3>User</h3>

              {userhistory.map((move,index)=>{
                return <p key={index}>{move}</p>
              })}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Game;