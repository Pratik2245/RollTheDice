import React, { useState } from "react";
import style from "./GamePage.module.css";
import { Bounce, toast, ToastContainer } from "react-toastify";
import NumberContainer from "./NumberContainer";
import GameHeader from "./GameHeader";
import RulesComponent from "./RulesComponent";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [rules, setRules] = useState(false);

  const getRandomInteger = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(random);
    return random;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      // toast.error("You Have Not selected Any Number");
      toast.error("You Have Not selected Any Number", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    //

    const random = getRandomInteger(1, 6);
    setCurrentDice(random);
    if (selectedNumber == random) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setSelectedNumber(undefined);
  };

  return (
    <div className={style.mainGameContainer}>
      <div className={style.gameContainer}>
        <GameHeader
          score={score}
          setScore={setScore}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
        <NumberContainer
          setScore={setScore}
          roleDice={roleDice}
          currentDice={currentDice}
          setRules={setRules}
          rules={rules}
        />
        {rules && <RulesComponent />}
      </div>
    </div>
  );
};

export default GamePage;
