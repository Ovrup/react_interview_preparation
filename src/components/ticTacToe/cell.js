import React, { useEffect } from 'react'

export default function Cell({ currentClass, setCurrentClass, markedPosition, setMarkedPosition, index, setIsWinOrDraw }) {

    const WINNING_POSITION = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function swapturn() {
        let updatedCurrentClass = currentClass == "x" ? "circle" : "x";
        setCurrentClass(updatedCurrentClass)
    }

    function checkWin() {
        return WINNING_POSITION.some((combination) =>
            combination.every((position) => markedPosition[position] === currentClass)
        )
    }

    function checkDraw() {
        return markedPosition.every((position) => {
            return (position === "x" || position === "circle")
        })
    }

    function endGame(isGameDraw) {
        setIsWinOrDraw({ isDraw: isGameDraw, isWin: !isGameDraw });
    }

    useEffect(() => {
        // Check for win/draw logic
        if (markedPosition.some((item) => item)) {   // Check if atleast one position in board is marked either X or O. This Prevent 
            // the swapping of class from X to O at the initial render. Meaning before X plays
            // its turn, the mark will swap to O due to the else condition. 
            if (checkWin()) {
                endGame(false)
            }
            else if (checkDraw()) {
                endGame(true)
            }
            else {
                // Swaping turn
                swapturn();
            }
        }
    }, [markedPosition])

    const handleCellClick = (e) => {
        // Update the Marked position array with the Class with their position in the game board
        let tempMarkedPosition = JSON.parse(JSON.stringify(markedPosition));
        tempMarkedPosition[index] = currentClass;
        setMarkedPosition(tempMarkedPosition);
    }
    return (
        <div onClick={(e) => handleCellClick(e)} className={`cell ${markedPosition[index]}`}></div>
    )
}
