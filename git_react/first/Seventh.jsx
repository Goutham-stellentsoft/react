import React from 'react';
import Window7 from './windows/Window7.jsx';
import { Link } from 'react-router';

class Seventh extends React.Component {
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
                <h1 className="tryh1">Thank you for choosing us to make your gas stations paperless!!!</h1>
                <Window7 />
                <ul className="pagination">
                    <li><Link to="/">1</Link></li>
                    <li><Link to="/second">2</Link></li>
                    <li><Link to="/third">3</Link></li>
                    <li><Link to="/fourth">4</Link></li>
                    <li><Link to="/fifth">5</Link></li>
                    <li><Link to="/sixth">6</Link></li>
                    <li className="active"><Link to="/seventh">7</Link></li>
                    <li><Link to="/eighth">8</Link></li>
                    <li><Link to="/ninth">9</Link></li>
                </ul>
            </div>
        );
    }
}

export default Seventh ;