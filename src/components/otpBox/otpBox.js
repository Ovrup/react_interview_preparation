import React, { useEffect, useRef, useState } from 'react';
import './otpBox.css';
import CenteredComponent from '../../utility/center-component/centeredComponent';

export default function OtpBox() {
    const [otpInput, setOtpInput] = useState(Array.from({ length: 4 }, (_, id) => ""));
    const inputRefs = useRef([]);


    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])

    function handleOtpInput(event, index) {
        let value = event.target.value;
        if (isNaN(value)) return;
        let tempOtpInput = [...otpInput];
        tempOtpInput[index] = value.substring(value.length - 1);

        setOtpInput(tempOtpInput);

        if (inputRefs.current[index + 1] && (index < otpInput.length - 1) && value) {
            inputRefs.current[index + 1].focus();
        }

    }

    function handleKeyDown(event, index) {
        if (event.key == "Backspace" &&
            index > 0 &&
            !otpInput[index] &&
            inputRefs.current[index - 1]) {

            inputRefs.current[index - 1].focus()
        }

    }

    function handleClick(index) {
        inputRefs.current[index].setSelectionRange(1, 1);

        if (index > 0 && !otpInput[index - 1]) {
            inputRefs.current[otpInput.indexOf("")].focus();
        }
    }

    function showData() {
        console.log("This is Test console");
        return <div>This is Test</div>
    }

    return (
        <div>
            <label className='toggle-box'>
                <input type='checkbox' id='toggle-checkbox' />
                <span className='toggle-button'></span>
            </label>
            <div style={{ display: "none" }}>{showData()}</div>
            <CenteredComponent>
                {otpInput.map((val, idx) => {
                    return <input
                        className='otp-input'
                        type="text"
                        value={val}
                        onChange={(e) => handleOtpInput(e, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        onClick={() => handleClick(idx)}
                        ref={(input) => inputRefs.current[idx] = input}
                    />
                })}
            </CenteredComponent>
        </div>
    )
}
