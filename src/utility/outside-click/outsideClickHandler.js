import React, { useEffect, useRef } from 'react';
import CenteredComponent from '../../utility/center-component/centeredComponent';

export default function OutsideClickHandler({ children, onOutsideClick }) {

    const modalRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onOutsideClick();
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick, true);

        return () => {
            document.removeEventListener("click", handleOutsideClick, true);
        }
    }, [onOutsideClick])
    return (
        <CenteredComponent>
            <div ref={modalRef}>
                {children}
            </div>
        </CenteredComponent>
    )
}
