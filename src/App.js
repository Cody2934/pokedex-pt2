// Everything gets sent to this page to display, kind of like an html page

import React, { Component } from 'react';
import { 
    Route, 
    Switch,
    Link,
    BrowserRouter as Router, 
} from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';
import About from './About.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Search for a Pokemon</h1>
                    <Link to="/">Go Hometh</Link>
                    <Link to="/about-thee/a">About Thee</Link>
                    <Switch>
                        <Route exact path="/:name?" component={Home} /> 
                        <Route path="/about-thee" component={About} />
                        <Route path="/pokemon/:pokeId" component={Detail} />
                    </Switch>

                </div>
            </Router>
      );
    }
}