import React from 'react';
import ReactDOM from 'react-dom';
import Window from './windows/Window.jsx';
import Second from './Second.jsx';
import Third from './Third.jsx';
import Fourth from './Fourth.jsx';
import Fifth from './Fifth.jsx';
import Sixth from './Sixth.jsx';
import Seventh from './Seventh.jsx';
import Eighth from './Eighth.jsx';
import Ninth from './Ninth.jsx';
import ReactFire from 'reactfire';
import Firebase from 'firebase';
import rootUrl from 'https://react-b1127.firebaseio.com/';
import { Router, Route, Link, hashHistory } from 'react-router';


class App extends React.Component {

    render() {
        return (
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
            <h1 className="tryh1">Try Shift Log</h1>
                <Window />
                <ul className="pagination">
                    <li className="active"><Link to="/">1</Link></li>
                    <li><Link to="/second">2</Link></li>
                    <li><Link to="/third">3</Link></li>
                    <li><Link to="/fourth">4</Link></li>
                    <li><Link to="/fifth">5</Link></li>
                    <li><Link to="/sixth">6</Link></li>
                    <li><Link to="/seventh">7</Link></li>
                    <li><Link to="/eighth">8</Link></li>
                    <li><Link to="/ninth">9</Link></li>
                </ul>
            </div>

        );
    }
}



export default App;

const app = document.getElementById('app');

ReactDOM.render(<Router history={ hashHistory }>
    <Route path="/" component={App}></Route>
    <Route path="/second" component={Second} />
    <Route path="/third" component={Third} />
    <Route path="/fourth" component={Fourth} />
    <Route path="/fifth" component={Fifth} />
    <Route path="/sixth" component={Sixth} />
    <Route path="/seventh" component={Seventh} />
    <Route path="/eighth" component={Eighth} />
    <Route path="/ninth" component={Ninth} />
</Router>, app );
