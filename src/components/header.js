import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <Link className='link' to='/outside-click'>
                <div className='header-card'>
                    <h2>Detect Outside Click</h2>
                </div>
            </Link>
            <Link className='link' to='/modal'>
                <div className='header-card'>
                    <h2>Modal</h2>
                </div>
            </Link >
            <Link className='link' to='/tic-tac-toe'>
                <div className='header-card'>
                    <h2>Tic Tac Toe</h2>
                </div>
            </Link>
            <Link className='link' to='/folder-structure'>
                <div className='header-card'>
                    <h2>Folder</h2>
                </div>
            </Link>
            <Link className='link' to='/timer'><div className='header-card'>
                <h2>Timer</h2>
            </div>
            </Link>
            <Link className='link' to='/feedback'><div className='header-card'>
                <h2>Feedback</h2>
            </div>
            </Link>
            <Link className='link' to='/login-mobile'><div className='header-card'>
                <h2>Login With Mobile</h2>
            </div>
            </Link>
            <Link className='link' to='/users'><div className='header-card'>
                <h2>User Data</h2>
            </div>
            </Link>
            <Link className='link' to='/card-game'><div className='header-card'>
                <h2>Card Game</h2>
            </div>
            </Link>
            <Link className='link' to='/snl'><div className='header-card'>
                <h2>Snake & Ladder</h2>
            </div>
            </Link>
        </div >
    )
}
