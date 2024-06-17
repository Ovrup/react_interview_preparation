import React, { memo, useEffect, useRef } from 'react';

function Toast({ toastItem, closeToast }) {

    const timeout = useRef();

    useEffect(() => {
        timeout.current = setTimeout(() => {
            closeToast(toastItem);
        }, 3000);

        return () => {
            clearTimeout(timeout.current);
        }

    }, []);

    return (
        <div className={`toast`}>
            <div>{toastItem.title}</div>
            <div className='progress-bar'></div>
        </div>
    )

}

export default memo(Toast);
