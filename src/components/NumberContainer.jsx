import React, { useState } from "react";
import style from "./GamePage.module.css";
const NumberContainer = ({
  setScore,
  roleDice,
  currentDice,
  setRules,
  rules,
}) => {
  // const [currentDice, setCurrentDice] = useState(0);
  const handleResetScore = () => {
    setScore(0);
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
        <button className={style.resetDice} onClick={handleResetScore}>
          Reset Score
        </button>
      </div>
      <div className="rules">
        <button
          className={style.showRules}
          onClick={() => !setRules((prev) => !prev)}
        >
          {rules ? "Hide" : "Show"} Rules
        </button>
      </div>
    </div>
  );
};

export default NumberContainer;
