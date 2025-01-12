import React, { useState } from "react";
import style from "./GamePage.module.css";
const NumberContainer = ({ setCurrentDice, currentDice }) => {
  // const [currentDice, setCurrentDice] = useState(0);
  const getRandomInteger = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);
    return random;
  };

  const roleDice = () => {
    const random = getRandomInteger(1, 6);
    setCurrentDice(random);
  };

  return (
    <div className={style.diceContainer}>
      <div className="diceImage" onClick={roleDice}>
        <img src={`./dice/dice_${currentDice}.png`} aria-placeholder="hll" />
      </div>
      <div className={style.para1}>
        <p>Click On Dice To Roll</p>
      </div>
      <div className={style.reset}>
        <button className={style.resetDice}>Reset Score</button>
      </div>
      <div className="rules">
        <button className={style.showRules}>Show Rules</button>
      </div>
    </div>
  );
};

export default NumberContainer;
