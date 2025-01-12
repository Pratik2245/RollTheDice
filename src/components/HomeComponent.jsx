import React from "react";
import styled from "styled-components";
import styles from "./HomeComponent.module.css";
import { useNavigate } from "react-router";
const StyledButton = styled.button`
  background-color: black;
  color: white;
  width: 15rem;
  font-size: 1.2rem;
  height: 3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-left: auto;
  position: absolute;
  right: 95px; /* Aligns the button to the right edge */
  top: 96%;

  &:hover {
    background-color: white; /* Change the background color when hovered */
    cursor: pointer;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
const HomeComponent = () => {
  const navigate = useNavigate();
  const handlePlayGameButton = () => {
    navigate("/playGame");
    // <NavLink to={"/playGame"} />;
  };
  return (
    <header className={styles.mainContainer}>
      <section className={styles.mainSection}>
        <div className={styles.imageComponent}>
          <img src="./dices.png" alt="" />
        </div>
        <div className={styles.gameLogo}>
          <h1 className={styles.GameName}>Dice Game</h1>
          <StyledButton onClick={handlePlayGameButton}>Play Now</StyledButton>
        </div>
      </section>
    </header>
  );
};

export default HomeComponent;
