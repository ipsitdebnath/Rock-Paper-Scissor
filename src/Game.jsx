import { useState } from "react";
import "./Game.css";


function Game() {
  let [usermove, usersetmove] = useState("");
  let [compmove, compsetmove] = useState("");
  let [userscore, usersetscore] = useState(0);
  let [compscore, compsetscore] = useState(0);
  let [userhistory, setuserhistory] = useState([]);
  let [comphistory, setcomphistory] = useState([]);

  function handleClick(move) {
    let a = Math.random();

    if (a <= 0.3) {
      compsetmove(1);

      if (move == 1) {
        usersetmove("🪨");
      } else if (move == 2) {
        usersetscore(userscore + 1);
        usersetmove("📃");
      } else {
        compsetscore(compscore + 1);
        usersetmove("✂️");
      }

      setcomphistory([...comphistory, "🪨"]);
      setuserhistory([
        ...userhistory,
        move === 1 ? "🪨" : move === 2 ? "📃" : "✂️",
      ]);
    } else if (a <= 0.6) {
      compsetmove(2);

      if (move == 1) {
        compsetscore(compscore + 1);
        usersetmove("🪨");
      } else if (move == 2) {
        usersetmove("📃");
      } else {
        usersetscore(userscore + 1);
        usersetmove("✂️");
      }

      setcomphistory([...comphistory, "📃"]);
      setuserhistory([
        ...userhistory,
        move === 1 ? "🪨" : move === 2 ? "📃" : "✂️",
      ]);
    } else {
      compsetmove(3);

      if (move == 1) {
        usersetscore(userscore + 1);
        usersetmove("🪨");
      } else if (move == 2) {
        compsetscore(compscore + 1);
        usersetmove("📃");
      } else {
        usersetmove("✂️");
      }

      setcomphistory([...comphistory, "✂️"]);
      setuserhistory([
        ...userhistory,
        move === 1 ? "🪨" : move === 2 ? "📃" : "✂️",
      ]);
    }
  }

  return (
    <div>
      <h1>Computer : You</h1>

      <h1 className="moves">
        {compmove === 1
          ? "🪨"
          : compmove === 2
            ? "📃"
            : compmove === 3
              ? "✂️"
              : ""}
        :{usermove}
      </h1>

      <h1 className="score">
        {compscore} : {userscore}
      </h1>

      <button onClick={() => handleClick(1)}>🪨</button>
      <button onClick={() => handleClick(2)}>📃</button>
      <button onClick={() => handleClick(3)}>✂️</button>

      <h2>History</h2>

      <div className="historyContainer">
        <div className="historyBox">
          <h3>Computer</h3>
          {comphistory.map((move, index) => {
            return <p key={index}>{move}</p>;
          })}
        </div>

        <div className="historyBox">
          <h3>User</h3>
          {userhistory.map((move, index) => {
            return <p key={index}>{move}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;
