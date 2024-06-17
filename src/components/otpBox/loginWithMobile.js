import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CenteredComponent from '../../utility/center-component/centeredComponent';

export default function LoginWithMobile() {

    const navigate = useNavigate();
    const mobileRef = useRef();

    function handleNumberInput(e) {
        e.preventDefault();
        let value = mobileRef.current.value;
        if (value.length == 10) {
            navigate('/otp')
        }
    }
    return (
        <CenteredComponent>
            <form onSubmit={handleNumberInput}>
                <input className='input' placeholder='Enter 10 digit Mobile Number' type='tel' maxLength={10} ref={mobileRef} />
                <button style={{ padding: "11px", marginLeft: "10px" }} type='submit' className='button-success'>Send OTP</button>
            </form>
        </CenteredComponent>
    )
}
