import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card'

import './styles.css'

function Board({ 
    solved, 
    disabled, 
    dimension, 
    cards, 
    flipped, 
    handleClick }) {
    return (
        <div className="board">
            {cards.map(card => (
                <Card 
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    width={dimension / 2.2}
                    height={dimension / 4}
                    flipped={flipped.includes(card.id)}
                    handleClick={handleClick}
                    solved={solved.includes(card.id)}
                    disabled={disabled || solved.includes(card.id)}
                />
            ))}
        </div>
    )
}

Board.propTypes = {
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Board;
