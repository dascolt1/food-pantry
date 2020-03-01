import React, { Component } from 'react';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// components
import Feed from './components/feed';
import Home from "./components/home";
import Nav from './components/nav'
class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Nav/>
                 <switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/feed" component={Feed}/>
                 </switch>
                </div>
            </Router>
            
        )
    }
}



export default App