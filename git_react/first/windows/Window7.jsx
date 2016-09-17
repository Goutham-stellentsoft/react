import React from 'react';

class Window7 extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4" style={{fontSize: 20}}>
                    <p style={{marginTop: 40, marginBottom: 40}}><b>We pre configured Shift Log for you. However, you are free to customize more to suit your needs at your gas stations.</b>  </p>
                    <p style={{ marginBottom: 40}}><b>You're free to try for 30 days before subscribing to continue automate your buisiness. We will notify you as soon as your trial end will need you subscribe plan to continue.></b> </p>
                    <p style={{ marginBottom: 40}}><b>Feel free to contact us at 1-800-SHIFT or chat with our support staff any time if you or your staff has question or concern regarding use of shift log.</b> </p>
                    <button className="btn btn-default">Ready to Buy?</button>  <button className="btn btn-default">Take me to my trial now</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}
export default Window7 ;
