import React, { useEffect } from 'react';

export function useOutsideClick(ref, handleOutsideClick) {

    function detectOutsideClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            handleOutsideClick();
        }
    }

    function removeListener() {
        document.removeEventListener("click", detectOutsideClick, true)
    }

    useEffect(() => {
        document.addEventListener("click", detectOutsideClick, true);

        return () => removeListener()
    }, []);

    return;

}