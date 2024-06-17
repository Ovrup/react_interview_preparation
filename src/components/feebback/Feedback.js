import React, { useEffect, useState } from 'react';
import Star from './star';
import './feedback.css';
import CenteredComponent from '../../utility/center-component/centeredComponent';

export default function Feedback() {
    const [stars, setStars] = useState(Array.from({ length: 5 }, (val) => { return { isHover: false, isMarked: false } }));

    function highlightOnHover(isHover, index) {
        if (isHover) {
            setStars((prev) => prev.map((val, i) => {
                if (i <= index) {
                    val.isHover = isHover;
                }
                return val
            })
            )
        }
        else {
            setStars((prev) => prev.map((val) => {
                val.isHover = isHover;
                return val;
            }))
        }
    }

    function markFeedback(index) {
        setStars((prev) => prev.map((val, i) => {
            if (i <= index) {
                val.isMarked = true;
                val.isHover = false;
            }
            else {
                val.isHover = false;
                val.isMarked = false;
            }

            return val
        }))
    }


    return (
        <CenteredComponent>
            <div className='star-container'>{stars.map((item, index) => <Star
                item={item}
                index={index}
                highlightOnHover={highlightOnHover}
                markFeedback={markFeedback}
            />
            )}
            </div>
        </CenteredComponent>
    )
}
