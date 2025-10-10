import { useState, useEffect } from "react";
import { Board } from "./gameBoardClass";
import "./snl.css";
import snake from '../../assets/snake.png';
import ladder from '../../assets/ladder.png';

const SnakeAndLadder = ({ gridSize }) => {
    const [board, setBoard] = useState([]);
    const [number, setNumber] = useState(0);
    const [showWinningText, setShowWinningText] = useState(false);
    const [player1, setPlayer1] = useState(0);
    const [player2, setPlayer2] = useState(0);
    const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
    const snake_style = { backgroundImage: "url(" + snake + ")", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" };
    const ladder_style = { backgroundImage: "url(" + ladder + ")", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }
    useEffect(() => {
        const board = new Board(gridSize[0], gridSize[1]);
        const grid = board.constructBoard();
        setBoard(grid);
    }, []);

    function checkWin(diceNumber) {
        const finalPosition = diceNumber + (isPlayer1Turn ? player1 : player2);
        if (finalPosition === 100) {
            return true;
        } else {
            return false;
        }
    }

    function hasSnakeOrLadder(diceNumber) {
        const finalNumber = diceNumber + (isPlayer1Turn ? player1 : player2);
        const newCell = board.find((cell) => cell.value === finalNumber);
        if (newCell.isSnake) {
            return { isSoL: newCell.isSnake, moveTo: newCell.moveTo };
        } else if (newCell.isLadder) {
            return { isSoL: newCell.isLadder, moveTo: newCell.moveTo };
        } else {
            return { isSoL: false, moveTo: null };
        }
    }

    function handleCoinPosition() {
        const diceNumber = Math.ceil(Math.random() * 6);
        setNumber(diceNumber);

        if (isPlayer1Turn) {
            if (diceNumber + player1 > 100) {
                setIsPlayer1Turn(false);
                return;
            }
            setPlayer1((prev) => prev + diceNumber);
            if (checkWin(diceNumber)) {
                setShowWinningText(true);
                return;
            }

            const { isSoL, moveTo } = hasSnakeOrLadder(diceNumber);

            if (isSoL) {
                setPlayer1(moveTo);
            }
            setIsPlayer1Turn(false);
        } else {
            if (diceNumber + player2 > 100) {
                setIsPlayer1Turn(true);
                return;
            }
            setPlayer2((prev) => prev + diceNumber);
            if (checkWin(diceNumber)) {
                setShowWinningText(true);
                return;
            }

            const { isSoL, moveTo } = hasSnakeOrLadder(diceNumber);

            if (isSoL) {
                setPlayer2(moveTo);
            }
            setIsPlayer1Turn(true);
        }
    }

    function resetGame() {
        setNumber(0);
        setPlayer1(0);
        setPlayer2(0);
        setShowWinningText(false);
    }

    return (
        <div className="container-snl">
            <div className="game-board-snl">
                {board.map((cell, idx) => {
                    return (
                        <div
                            key={cell.value}
                            className={`cell-snl ${cell.value % 2 === 0 ? "bg-danger" : ""} ${player1 === cell.value ? "player1"
                                : player2 === cell.value
                                    ? "player2"
                                    : ""}`}
                            style={cell.isSnake ? snake_style : cell.isLadder ? ladder_style : {}}
                        >
                            {cell.value}
                        </div>
                    );
                })}
            </div>
            {!showWinningText ? (
                <button onClick={handleCoinPosition}>Roll Dice</button>
            ) : (
                <></>
            )}
            {showWinningText ? <button onClick={resetGame}>Reset</button> : <></>}
            <div className="player-box">
                <div className={`player1 ${isPlayer1Turn ? "highlight" : ""}`}>
                    Player 1
                </div>
                <div className="dice">{number ? number : ""}</div>
                <div className={`player2 ${!isPlayer1Turn ? "highlight" : ""}`}>
                    Player 2
                </div>
            </div>

            <h1>
                {showWinningText
                    ? isPlayer1Turn
                        ? "Player One Won"
                        : "Player Two Won"
                    : ""}
            </h1>
        </div>
    );
};

export default SnakeAndLadder;
