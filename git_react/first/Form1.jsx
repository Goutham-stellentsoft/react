import React from 'react';

class Form1 extends React.Component {
    render() {
        return(
            <div>
                <div className="col-md-12 col-sm-12 col-xs-12 form1">
                    <div className="col-md-4 col-sm-3 col-xs-3" />
                    <div className="form-group col-md-4 col-sm-6 col-xs-6">
                        <label htmlFor="cname">Company Name</label>
                        <input type="text" className="form-control" id="cname" />
                    </div>
                    <div className="col-md-4 col-sm-3 col-xs-3" />
                </div>
            </div>
        );
    }
}

export default Form1;