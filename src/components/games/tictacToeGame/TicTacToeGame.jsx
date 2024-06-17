import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CenteredComponent from '../../../utility/center-component/centeredComponent';
import './TicTacToeGame.css'

const TicTacToeGame = () => {
    const X_CLASS = "x";
    const CIRCLE_CLASS = "circle";
    const [xTurn, setXTurn] = useState(true);
    const [showWinningMessage, setShowWinningMessage] = useState(false)
    const cellRef = useRef([]);

    const WINING_COMBINATION = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const navigate = useNavigate()


    function startGame() {
        setXTurn(true);
        setShowWinningMessage(false)
        if (cellRef) {
            cellRef.current.forEach((ele) => {
                ele.classList.remove(X_CLASS, CIRCLE_CLASS)
            })
        }
    }

    function filpTurn() {
        if (xTurn) {
            setXTurn(false)
        }
        else {
            setXTurn(true)
        }
    }

    function markCell(index) {
        if (xTurn) {
            cellRef.current[index].classList.add(X_CLASS)
        }
        else {
            cellRef.current[index].classList.add(CIRCLE_CLASS)
        }

        if (checkWin()) {
            setShowWinningMessage(true)
        }
        else {
            filpTurn()
        }
    }

    function checkWin() {
        return WINING_COMBINATION.some((cmb) => {
            return cmb.every((pos) => cellRef.current[pos].classList.contains(xTurn ? X_CLASS : CIRCLE_CLASS))
        })
    }

    useEffect(() => {
        startGame()
    }, []);


    return (
        <>
            <div className='tic-tac-toe'>
                <h2>Tic Tac Toe</h2>
                <button className='button-success' onClick={() => navigate(-1)}>Back</button>
            </div>

            <CenteredComponent>
                <div className={`container ${xTurn ? X_CLASS : CIRCLE_CLASS}`}>
                    {Array.from({ length: 9 }, (_, idx) => idx).map((index) => {
                        return <div
                            ref={(ele) => cellRef.current[index] = ele}
                            className="cell"
                            onClick={() => markCell(index)}
                        ></div>
                    })}
                </div>
                {showWinningMessage && <div className='winning-message-container'>
                    <div className="message">{xTurn ? X_CLASS : CIRCLE_CLASS} Win</div>
                    <button className="start-game-button" onClick={startGame}>Restart</button>

                </div>}
            </CenteredComponent>
        </>
    )
}

export default TicTacToeGame