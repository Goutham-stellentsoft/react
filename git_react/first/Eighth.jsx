import React from 'react';
import Window8 from './windows/Window8.jsx';
import { Link } from 'react-router';

class Eighth extends React.Component {
    render() {
        return(
            <div>
                <nav className="jumbotron navbar navbar-default topnav">
                    {/* Logo */}
                    <div className="navbar-header logo">
                        <a className="navbar-brand navbar-fixed-left" href="#"><b>Shift Log Logo</b></a>
                        <button type="button"  className="navbar-toggle animated infinite hinge" data-toggle="collapse" data-target="#tg">menu</button>
                    </div>
                    <div className="collapse navbar-collapse" id="tg">
                        <ul className="nav navbar-nav logomatter">
                            <li><b><a href="#">Sign in</a></b></li>
                            <li><b><a href="#">Buy ShiftLog</a></b></li>
                            <li><b><a href="#">About</a></b></li>
                            <li><b><a href="#">FAQ</a></b></li>
                        </ul>
                    </div>
                </nav>
                <h1 className="tryh1">Your trial of Shift Log about to expire.</h1>
                <h1 className="tryh1" style={{marginBottom: 350}}>Subcribe as soon as possible to avoid any disruptions to paperless office.</h1>
                <Window8 />
                <ul className="pagination">
                    <li><Link to="/">1</Link></li>
                    <li><Link to="/second">2</Link></li>
                    <li><Link to="/third">3</Link></li>
                    <li><Link to="/fourth">4</Link></li>
                    <li><Link to="/fifth">5</Link></li>
                    <li><Link to="/sixth">6</Link></li>
                    <li><Link to="/seventh">7</Link></li>
                    <li className="active"><Link to="/eighth">8</Link></li>
                    <li><Link to="/ninth">9</Link></li>
                </ul>
            </div>
        );
    }
}

export default Eighth ;