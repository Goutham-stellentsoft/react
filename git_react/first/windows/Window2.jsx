import React from 'react';

class Window2 extends React.Component {
    render() {
        return(
            <div className="row window">
                <div className="col-md-2" />
                <div className="col-md-8 register">
                    <div className>
                        <div className="wintop col-md-11 col-sm-11 col-xs-11"><p>Confirmation</p></div>
                        <div className="col-md-1 col-sm-1 col-xs-1" style={{backgroundColor: 'lightgrey', height: 40, borderBottom: '1px solid darkgray'}}><a href="#"><img id="close" src="img/close-icon.png" style={{height: 25, width: 25, float: 'right', paddingTop: 5}} /></a></div>
                    </div>
                   <p className="secpage"><b>Thank you for signing up to Shift Log.We will send you email confirming your registration.Please click on the link to confirm your registration to setup your account with us</b></p>
                    <div className="col-md-2 col-sm-2 col-xs-2" />
                </div>
            </div>
        );
    }
}

export default Window2 ;
