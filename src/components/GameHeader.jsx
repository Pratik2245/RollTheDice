import React, { useState } from "react";
import style from "./GamePage.module.css";
import styled from "styled-components";
const GameHeader = ({ setSelectedNumber, selectedNumber, score }) => {
  const NumberArray = [1, 2, 3, 4, 5, 6];
  // const [selectedNumber, setSelectedNumber] = useState(0);

  return (
    <div className={style.gameHeader}>
      <div className={style.score}>
        <p className={style.scoreCard}>{score}</p>
        <h3 style={{ marginTop: "-10px" }}>Total Score</h3>
      </div>
      <div className={style.selectNumber}>
        <div className={style.buttons}>
          {NumberArray.map((item, key) => (
            <Box
              isselected={item === selectedNumber}
              onClick={() => setSelectedNumber(item)}
              key={key}
              className={style.btnNumber}
            >
              {item}
            </Box>
          ))}
        </div>
        <div className={style.para}>
          <h2>Select Number</h2>
        </div>
      </div>
    </div>
  );
};

const Box = styled.button`
  border: 2px solid black;
  width: 4rem;
  font-size: 1.3rem;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;
export default GameHeader;
