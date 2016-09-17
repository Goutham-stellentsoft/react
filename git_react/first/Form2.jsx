import React from 'react';

class Form2 extends React.Component {
    render() {
        return(
            <div>
                <div className="col-md-12 col-sm-12 col-xs-12 form2">
                    <div className="col-md-2 col-sm-0 col-xs-0" />
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="form-group">
                            <label htmlFor="cname">First Name</label>
                            <input type="text" className="form-control" id="cname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ename">Email Address</label>
                            <input type="email" className="form-control" id="ename" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password</label>
                            <input type="password" className="form-control" id="pwd" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="form-group">
                            <label htmlFor="lname" style={{}}>Last Name</label>
                            <input type="text" className="form-control" id="lname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="form-control" id="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm">Confirm</label>
                            <input type="text" className="form-control" id="confirm" />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="col-md-2 col-sm-0 col-xs-0" />
                </div>
            </div>
        );
    }
}

export default Form2;