import React from 'react';
import { useNavigate } from 'react-router-dom';
import Counter from './counter';
import CenteredComponent from '../../utility/center-component/centeredComponent';

export default function Timer() {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(-1)} style={{ margin: "20px" }} className='button-success'>Back</button>
            <CenteredComponent>
                <Counter />
            </CenteredComponent>
        </>
    )
}
