import React from 'react';
import './centerComponent.css'

export default function CenteredComponent({ children }) {
    return (
        <div className='center-component'>{children}</div>
    )
}
