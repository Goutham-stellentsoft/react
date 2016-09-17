import React from 'react';


class Button extends React.Component {
    render() {
        return(
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-4 col-sm-4 col-xs-4" />
                <div className="col-md-4 col-sm-4 col-xs-4">
                    <button className="btn btn-default" type="submit" style={{color: 'white', backgroundColor: 'deeppink', padding: '10px 30px'}}>SUBMIT</button>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4" />
            </div>
        );
    }
}

export default Button ;