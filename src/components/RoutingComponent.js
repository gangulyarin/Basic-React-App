import React from 'react';
import User from './User';
import Home from './Home';
import NotFound from './NotFound';
import App from './../App';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';


class Routing extends React.Component {
    render(){
        return (
    <Router>
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user">List</Link>
                </li>
            </ul>
            </div>
        </nav>
            
            <Switch>
                
                <Route path="/user" component={User} />
                <Route path="/home" component={Home} />
                <Route path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
           
        </div>
    </Router>
        )
    }
}

export default Routing