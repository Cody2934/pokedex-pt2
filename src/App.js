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
import NotFound from './NotFound.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Search for a Pokemon</h2>
                    <Link to="/">Go Home</Link>
                    <Link to="/about-me/some-other-param">About Thee</Link>
                    <Switch>
                        <Route exact path="/:name?" component={Home} />  
                        <Route exact path="/about-me/:other/:thing/:here" component={About} />
                        <Route exact path="/pokemon/:pokeId" component={Detail} />
                        <Route component={NotFound}/>
                    </Switch>

                </div>
            </Router>
      );
    }
}