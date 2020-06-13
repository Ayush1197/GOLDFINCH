import React, { Component } from "react";
import Clock from 'react-live-clock';

export default class current_time extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() ;

        this.state = {
            date: date
        };
    }
    render() {
        return (
            <div>
             <h1>Welcome to timer</h1>
                <h6>Current Time in India is :
            <button className="btn btn-primary btn-sm m-2"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />
            </button></h6>
            <div className='date'>Today's Date is  : -  {this.state.date}
            </div>
            </div>
        );
    }
}
