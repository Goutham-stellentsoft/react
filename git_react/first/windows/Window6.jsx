import React from 'react';

class Window6 extends React.Component {
    render() {
        return(
            <div className="row window">
                <div className="col-md-2" />
                <div className="col-md-8 register">
                    <div className="">
                        <div className="wintop col-md-11 col-sm-11 col-xs-11"><p>Begin</p></div>
                        <div className="col-md-1 col-sm-1 col-xs-1" style={{backgroundColor: 'lightgrey', height: 40, borderBottom: '1px solid darkgray'}}><a href="#"><img id="close" src="img/close-icon.png" style={{height: 25, width: 25, float: 'right', paddingTop: 5}} /></a></div>
                    </div>
                    <p style={{marginTop: 80, marginBottom: 80}}><b>How many shifts usually you do at your gas stations?</b></p>
                    <div className="fordrop row" style={{marginBottom: 250}}>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" id="sel1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option className="active">3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>

                                </select>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>


                    <div className="row">
                        <div className="col-md-9"></div>
                        <div className="col-md-1">
                            <button className="btn btn-default">Next</button>
                        </div>
                        <div className="col-md-2"></div>

                    </div>


                </div>
            </div>
        );
    }
}

export default Window6 ;
