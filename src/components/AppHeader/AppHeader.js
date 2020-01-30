import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './AppHeader.css';

const AppHeader = props => {
    return (
        <header className="title">
            <h1>Memory Game</h1>
            <h2>Znajdź wszystkie pary !!!</h2>
            <nav>
                <h3><Link to="/about">Informacje o grze</Link></h3>
                <button className="level-button">
                    <Link to="/easy">Poziom Łatwy</Link>
                </button><br />
                <button className="level-button">
                    <Link to="/medium">Poziom Średni</Link>
                </button><br />
                <button className="level-button">
                    <Link to="/master">Poziom Mistrz Memory Game</Link>
                </button>
            </nav>
        </header>
    );
};

AppHeader.propTypes = {};
AppHeader.defaultProps = {};

export default AppHeader;
