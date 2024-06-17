import React, { useEffect, useRef } from 'react'
import Toast from './toast'

export default function ToastList({ toast, closeToast }) {

    if (toast.length === 0) return;

    return (
        <div className='toast-list'>
            {toast.map((item) => {
                return <Toast key={item.id} toastItem={item} closeToast={closeToast} />
            })}
        </div>
    )
}
