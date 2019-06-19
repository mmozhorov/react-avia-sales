import React, { Component } from 'react';
import BA from './BA.png';
import S7 from './S7.png';
import SU from './SU.png';
import TK from './TK.png';
import './TicketComponent.css';

export default class TicketComponent extends Component{
    constructor(props){
        super(props);

        this.carrierLogo = "";
        console.log(this.props.ticket.carrier);
        switch (this.props.ticket.carrier) {
            case "BA":
                this.carrierLogo = BA;
                break;
            case "S7":
                this.carrierLogo = S7;
                break;
            case "SU":
                this.carrierLogo = SU;
                break;
            case "TK":
                this.carrierLogo = TK;
                break;
        }
    }

    render() {
        return(
            <div className="ticket-container row">
                <div className="col-md-4 text-center ticket-container__left-part">
                    <img src={this.carrierLogo} width={150}/>
                    <button className="btn btn-buy">Купить за {this.props.ticket.price}</button>
                </div>
                <div className="col-md-8 ticket-container__right-part">
                    <div className="col-md-6">
                        <h3>{this.props.ticket.departure_time}</h3>
                        <p>{this.props.ticket.destination}, {this.props.ticket.origin_name}</p>
                        <p>{this.props.ticket.departure_date}</p>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        );
    }
}