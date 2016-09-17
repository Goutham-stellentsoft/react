import React from 'react';
import Window6 from './windows/Window6.jsx';
import { Link } from 'react-router';

class Sixth extends React.Component {
    render() {
        return(
            <div>
                <nav className="jumbotron navbar navbar-default topnav">
                    {/* Logo */}
                    <div className="navbar-header logo">
                        <a className="navbar-brand navbar-fixed-left" href="#"><b>Shift Log Logo</b></a>
                        <button type="button"  className="navbar-toggle" data-toggle="collapse" data-target="#tg">menu</button>
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
                <h1 className="tryh1">Tell us about your business ?</h1>
                <Window6 />
                <ul className="pagination">
                    <li><Link to="/">1</Link></li>
                    <li><Link to="/second">2</Link></li>
                    <li><Link to="/third">3</Link></li>
                    <li><Link to="/fourth">4</Link></li>
                    <li><Link to="/fifth">5</Link></li>
                    <li className="active"><Link to="/sixth">6</Link></li>
                    <li><Link to="/seventh">7</Link></li>
                    <li><Link to="/eighth">8</Link></li>
                    <li><Link to="/ninth">9</Link></li>
                </ul>
            </div>
        );
    }
}

export default Sixth ;