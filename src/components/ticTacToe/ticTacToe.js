import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ticTacToe.css';
import GameBoard from './gameBoard';

export default function TicTacToe() {

    const navigate = useNavigate();

    return (
        <>
            <div className='tic-tac-toe'>
                <h2>Tic Tac Toe</h2>
                <button className='button-success' onClick={() => navigate(-1)}>Back</button>
            </div>
            <GameBoard />
        </>
    )
}
