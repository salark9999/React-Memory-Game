import React, {Component} from 'react';
import Easy from './components/gamelevels/easy/easy';
import Medium from './components/gamelevels/medium/medium';
import Master from './components/gamelevels/master/master';
import AppHeader from './components/AppHeader/AppHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import './App.css';
import './components/AppHeader/AppHeader.css';
class App extends Component {
  render() {
    return (
      <Router className="title" >
        <Route path="/" exact component={AppHeader} />
        <Route path="/easy" exact component={Easy} />
        <Route path="/medium" exact component={Medium} />
        <Route path="/master" exact component={Master} />
        <Route path="/about" exact component={() => (
          <article className="App">
            <nav>
              <h3><Link to="/">Memory Game</Link></h3>
            </nav>
            <h2>Informacje o grze</h2>
            <p>
              Memory Game to gra logiczna znana również pod nazwą koncentracja polegająca na znalezieniu par spośród rozrzuconych kart.
              Do gry wystarczy dowolna przeglądarka internetowa.
            </p>
            <h2>Jak grać w Memory Game:</h2>
            <p> 
              Najpierw wybierz poziom trudności 
              (poziom łatwy - 6 par do połączenia, poziom średni - 8 par do połączenia lub poziom trudny - 12 par do połączenia). 
              Plansza gry generowana jest losowo i zawiera losowe karty z pośród dostępnych.
              Odkrywaj poszczególne karty aby dopasować pary.
              Aby wygrać dopasuj wszystkie pary.
            </p>
          </article>
        )}>
        </Route>
      </Router>
    )
  }
}

export default App;
