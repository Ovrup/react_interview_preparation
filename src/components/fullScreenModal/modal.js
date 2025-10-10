import './modal.css';

export default function Modal({ isOpen, onClose, children }) {

    if (!isOpen) return null;

    return (
        <div className='modal-style'>
            {children}
            <button className='close-button' onClick={onClose}>X</button>
        </div>
    )
}
