import React from 'react';

class Window9 extends React.Component {
    render() {
        return(
            <div className="row"  style={{textAlign: 'left'}}>
                <div className="col-md-2"></div>
                <div className="col-md-3" style={{fontSize: 20,lineHeight: '200%'}}>
                    <label className="checkbox-inline"><input type="checkbox" value=""/>Plan</label>
                    <label className="checkbox-inline"><input type="checkbox" value=""/>Monthly</label>
                    <label className="checkbox-inline"><input type="checkbox" value=""/>Quartely</label>
                    <p><b>Price: $0.00</b></p>
                    <div className="form-group">
                        <label htmlFor="usr">Name of the Card</label>
                        <input type="text" className="form-control" id="usr"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd" >Card Number</label>
                        <input type="text" className="form-control" id="pwd"/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="sel1">Expiry Date</label>
                        <p><select className="form-control" id="sel1" style={{width: 120}}>
                            <option>10</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                        </select>
                        <select className="form-control" id="sel1" style={{width: 150}}>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2013</option>
                            <option>2014</option>
                        </select></p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="usr" >Coupon</label>
                        <input type="text" className="form-control" id="usr"/>
                    </div>
                    <button className="btn btn-default"  style={{color: 'green'}}>SUBCRIBE NOW</button>
                </div>
                <div className="col-md-7"></div>
            </div>
        );
    }
}
export default Window9 ;
