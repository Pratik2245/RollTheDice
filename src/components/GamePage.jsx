import React, { useState } from "react";
import style from "./GamePage.module.css";
import NumberContainer from "./NumberContainer";
import GameHeader from "./GameHeader";

const GamePage = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  return (
    <div className={style.mainGameContainer}>
      <div className={style.gameContainer}>
        <GameHeader
          setSelectedNumber={setSelectedNumber}
          selectedNumber={selectedNumber}
        />
        <NumberContainer
          setCurrentDice={setCurrentDice}
          currentDice={currentDice}
        />
      </div>
    </div>
  );
};

export default GamePage;
