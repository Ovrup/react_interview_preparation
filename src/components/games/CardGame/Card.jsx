import React from 'react'

const Card = ({ card }) => {
    function getCardColor() {
        let color = "";
        switch (card.suit) {
            case "♥":
            case "♦":
                color = "#FF4141";
                break;
            case "♣":
            case "♠":
                color = "black";
                break;

            default:
                color = "black";
                break;
        }
        console.log(color);

        return color
    }
    return (
        <div className='card'>
            {card.suit} {card.value}
        </div>
    )
}

export default Card