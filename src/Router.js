import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Matt from './components/Matt'
import Viteri from './components/Viteri'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/matt" component={Matt}/>
            <Route path="/viteri" component={Viteri}/>
        </Switch>
    )
}

export default Router