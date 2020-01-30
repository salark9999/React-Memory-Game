import React, { useState, useEffect } from 'react';
import Board2 from '../../board/index2';
import initializeDeckMedium from './deck2';
import { Link } from "react-router-dom";

import './medium.css';


function Medium() {

    const [counter, setCounter] = useState(0);
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        resizeBoard()
        setCards(initializeDeckMedium())
    }, [])

    useEffect(() => {
        preloadImages()
    }, cards)


    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard)

        return () => window.removeEventListener('resize', resizeListener)
    })

    const handleClick = (id) => {
        setDisabled(true)
        if (solved.length == 14) {
            setFlipped([id])
            alert("Gratulacje!!! Udało Ci się dopasować wszystkie obrazki. Zacznij od nowa");
        }
        if (flipped.length === 0) {
            setFlipped([id])
            setDisabled(false)
            return
        } else {
            if (sameCardClicked(id)) {
                setDisabled(false)
                return
            }
            setFlipped([flipped[0], id])
            if (isMatch(id)) {
                setSolved([...solved, flipped[0], id])
                setFlipped([])
                resetCards()
            } else {
                setTimeout(resetCards, 1500)
            }
        }
    }

    const preloadImages = () => {
        cards.map((card) => {
            const src = `/img/${card.type}.png`
            new Image().src = src
        })
    }

    const resetCards = () => {
        setFlipped([])
        setDisabled(false)

    }

    const sameCardClicked = (id) => flipped.includes(id)

    const isMatch = (id) => {
        const clickedCard = cards.find((card) => card.id === id)
        const flippedCard = cards.find((card) => flipped[0] === card.id)
        return flippedCard.type === clickedCard.type
    }

    const resizeBoard = () => {
        setDimension(Math.min(
            document.documentElement.clientWidth,
            document.documentElement.clientHeight,
        ))
    }


    return (
        <div className="App2">
            <h4>
                <span>
                    <Link to="/">Memory Game</Link>&nbsp;<Link to="/about">About this app</Link>
                </span>
            </h4>
            
            <div className="board" onClick={() => { setCounter(counter + 1)}}>
                <h3>Liczba kliknięć = {counter} </h3>
                <Board2 className="board"
                    dimension={dimension}
                    cards={cards}
                    flipped={flipped}
                    handleClick={handleClick}
                    disabled={disabled}
                    solved={solved}
                />
            </div>
        </div>
    );
}
export default Medium;