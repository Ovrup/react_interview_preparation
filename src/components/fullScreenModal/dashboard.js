import React, { useState } from 'react';
import Modal from "./modal";
import OutsideClickHandler from '../../utility/outside-click/outsideClickHandler';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleModalOpen = () => {
        setIsOpen(true)
    }

    return (
        <div>
            <div className='dashboard-header'>
                <h2>Modal</h2>
                <div>
                    <button className='button-success' style={{ marginRight: "8px" }} onClick={() => handleModalOpen()}>Open Modal</button>
                    <button className='button-success' onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
            <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </OutsideClickHandler>
        </div>
    )
}
