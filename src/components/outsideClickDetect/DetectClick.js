import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './detectClick.css';
import { useOutsideClick } from './useOutsideClick';
import ToastList from './ToastList';

export default function DetectClick() {
    const navigate = useNavigate();
    const outsideClickRef = useRef();
    const [toast, setToast] = useState([]);
    useOutsideClick(outsideClickRef, handleOutsideClick);

    function* idGenerator(id) {

        while (true) {
            yield id++
        }
    }

    const createId = idGenerator(1);


    function handleOutsideClick() {


        setToast((prev) => {
            let id = createId.next().value;
            const newToast = {
                id: id,
                title: `Outside Clicked ${id}`,
            }
            return [...prev, newToast]
        });
    }

    const closeToast = (toastItem) => {
        setToast((prev) => prev.filter((item) => toastItem.id !== item.id))
    }

    return (
        <div className='main-container'>
            <button onClick={() => navigate(-1)} className='button-success'>Back</button>
            <div ref={outsideClickRef} className='container-box'>Detect Outside Click</div>
            <ToastList toast={toast} closeToast={closeToast} />
        </div>
    )
}
