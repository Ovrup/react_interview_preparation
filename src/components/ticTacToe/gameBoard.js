import React, { useState } from 'react';
import CenteredComponent from '../../utility/center-component/centeredComponent';
import Cell from './cell';

export default function GameBoard() {
    const X_CLASS = "x";
    const CIRCLE_CLASS = "circle";
    const DEFAULT_STATE = { isDraw: false, isWin: false }

    const [isWinOrDraw, setIsWinOrDraw] = useState(DEFAULT_STATE);
    const [markedPosition, setMarkedPosition] = useState(Array.from({ length: 9 }));
    const [currentClass, setCurrentClass] = useState(X_CLASS);

    function restartGame() {
        setIsWinOrDraw(DEFAULT_STATE);
        setMarkedPosition(Array.from({ length: 9 }));
        setCurrentClass(X_CLASS)
    }


    return (

        <CenteredComponent>
            <div className={`board ${currentClass}`}>
                {markedPosition.map((cell, index) => {
                    return <Cell
                        currentClass={currentClass}
                        setCurrentClass={setCurrentClass}
                        markedPosition={markedPosition}
                        setMarkedPosition={setMarkedPosition}
                        index={index}
                        setIsWinOrDraw={setIsWinOrDraw}
                    />
                })}
            </div>
            {(isWinOrDraw.isDraw || isWinOrDraw.isWin) &&
                <div className='winning-message-container'>
                    <div className='winning-message'>{isWinOrDraw.isWin ? `${currentClass.toUpperCase()} Wins`
                        : isWinOrDraw.isDraw ? "Draw" : ""} </div>
                    <button className='restart-button' onClick={restartGame}>Restart</button>
                </div>
            }
        </CenteredComponent>
    )
}
