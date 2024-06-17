import React from 'react';
import './modal.css';


export default function Modal({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (

        <div className='modal-style'>
            <h2>Full Screen Modal</h2>
            <button className='close-button' onClick={() => onClose()}>Close</button>
        </div>
        //  <div className='overlay' />     
    )
}
