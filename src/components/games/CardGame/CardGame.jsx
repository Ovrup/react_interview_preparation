import React, { useEffect, useRef, useState } from 'react';
import './CardGame.css';
import Deck from './deck';
import Card from './Card';

const CardGame = () => {

    const [playerDeck, setPlayerDeck] = useState([]);
    const [computerDeck, setComputerDeck] = useState([]);
    const [selectedPlayerCard, setSelectedPlayerCard] = useState();
    const [selectedComputerCard, setSelectedComputerCard] = useState();
    const cardFlipTurn = useRef(true);
    const [turnWinner, setTurnWinner] = useState("")

    const SUIT_VALUE_MAP = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "J": 10,
        "Q": 11,
        "K": 12,
        "A": 13
    }

    const startGame = () => {
        const deck = new Deck();
        deck.shuffleCard();

        const deckMidPoint = Math.ceil(deck.numberOfCards / 2);
        const playerCards = deck.cards.slice(0, deckMidPoint);
        const computerCards = deck.cards.slice(deckMidPoint);

        setPlayerDeck(playerCards);
        setComputerDeck(computerCards);

        setTurnWinner("")
    }

    useEffect(() => {
        startGame()
    }, []);

    function checkWin() {
        if (SUIT_VALUE_MAP[selectedComputerCard.value] > SUIT_VALUE_MAP[selectedPlayerCard.value]) {
            setTurnWinner("Computer")
        }
        else if (SUIT_VALUE_MAP[selectedComputerCard.value] < SUIT_VALUE_MAP[selectedPlayerCard.value]) {
            setTurnWinner("Player");
        }
        else {
            setTurnWinner("Draw")
        }
    }

    function displayFlippedCards() {
        checkWin();
        cardFlipTurn.current = false
    }

    function arrangeCards() {
        if (turnWinner === "Computer") {
            setComputerDeck((prev) => [...prev, selectedPlayerCard])
            setPlayerDeck((prev) => prev.filter((card) => !(card.value === selectedPlayerCard.value && card.suit === selectedPlayerCard.suit)))
        }
        else if (turnWinner === "Player") {
            setPlayerDeck((prev) => [...prev, selectedComputerCard]);
            setComputerDeck((prev) => prev.filter((card) => !(card.value === selectedComputerCard.value && card.suit === selectedComputerCard.suit)))
        }

        setSelectedComputerCard();
        setSelectedPlayerCard();
        cardFlipTurn.current = true;
        setTurnWinner("")
    }

    useEffect(() => {
        if (selectedComputerCard && selectedPlayerCard) {
            displayFlippedCards();
        }
    }, [selectedComputerCard, selectedPlayerCard])

    function flipCard() {
        if (cardFlipTurn.current) {
            let rc = Math.ceil(Math.random() * computerDeck.length);
            let rp = Math.ceil(Math.random() * playerDeck.length)
            setSelectedComputerCard(computerDeck[rc]);
            setSelectedPlayerCard(playerDeck[rp]);
            return;
        }

        arrangeCards()
    }


    return (
        <div className='game-board' onClick={flipCard}>
            <div className='computer-deck' >
                {computerDeck.length}
            </div>
            <div className='computer-card-slot'>
                {selectedComputerCard && <Card card={selectedComputerCard} />}
            </div>
            <div className='text'>{turnWinner}</div>
            <div className='player-deck' >
                {playerDeck.length}
            </div>
            <div className='player-card-slot'>
                {selectedPlayerCard && <Card card={selectedPlayerCard} />}
            </div>
        </div>
    )
}

export default CardGame