import React, { useState } from 'react';

export default function Star({ item, index, highlightOnHover, markFeedback }) {

    return (
        <div className={`star ${item.isHover ? "hovered" : ""} ${item.isMarked ? "hovered" : ""}`}
            onMouseOver={() => highlightOnHover(true, index)}
            onMouseLeave={() => highlightOnHover(false, index)}
            onClick={() => markFeedback(index)}
        >

        </div>
    )
}
