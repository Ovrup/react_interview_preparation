import React, { useEffect, useState, useRef } from 'react'
import './timer.css'

export default function Counter() {
    const [seconds, setSeconds] = useState(0);
    const [inputMinutes, setInputMinutes] = useState(0)
    let interval = useRef();

    function debounce(callback) {
        let timeout;

        return function (...args) {
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                callback(args[0])
            }, 500)

        }
    }

    function setTimer() {
        if (inputMinutes <= 0) return;

        setSeconds(inputMinutes * 60);
    }

    function appendZero(val) {
        if (val.length <= 1) {
            return "0" + val
        }
        else {
            return val
        }
    }

    function getTimeInHourMinSec() {
        let hour = appendZero(Math.floor(seconds / 3600) + "")
        let min = appendZero(Math.floor((seconds / 60) % 60) + "")
        let sec = appendZero(seconds % 60 + "");

        return <h1>{hour}:{min}:{sec}</h1>
    }

    useEffect(() => {
        if (seconds <= 0) {
            setSeconds(0)
            clearInterval(interval.current);
        }
    }, [seconds])

    useEffect(() => {
        setTimer();

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        }
    }, [inputMinutes])


    // Create a debounce function for taking input
    const handleTimeCounterDebounce = debounce((val) => setInputMinutes(Number(val)));

    // Function for starting the timer
    function startTimer() {

        if (interval.current) {
            clearInterval(interval.current);
        }

        interval.current = setInterval(() => {
            setSeconds((prev) => prev - 1)
        }, 1000);
    }

    function resetTimer() {
        clearInterval(interval.current);
        setTimer();
    }

    function pauseTimer() {
        clearInterval(interval.current);
    }

    return (
        <div className='counter-container'>
            {getTimeInHourMinSec()}
            <div>
                <input className='input' onChange={(e) => handleTimeCounterDebounce(e.target.value)} type='number' placeholder='Please Enter the value in minutes' />
            </div>
            <div className='play-button-box'>
                <button className='button-success' onClick={startTimer}>Play</button>
                <button className='button-danger' onClick={resetTimer}>Reset</button>
                <button className='button-success' onClick={pauseTimer}>Pause</button>
            </div>
        </div>
    )
}
