import React, { Component } from 'react';
import BA from './BA.png';
import S7 from './S7.png';
import SU from './SU.png';
import TK from './TK.png';
import plane from './plane.png';
import './TicketComponent.css';

export default class TicketComponent extends Component{
    constructor(props){
        super(props);

        this.departure_date = this.getDate(this.props.ticket.departure_date);
        this.arrival_date = this.getDate(this.props.ticket.arrival_date);
        this.carrierLogo = this.getCarrierLogo(this.props.ticket.carrier);
        this.stops = this.getStops(this.props.ticket.stops);


    }

    getStops(stops){
        let result = "";
        switch (stops) {
            case 0:
                result = "БЕЗ ПЕРЕСАДОК";
                break;
            case 1:
                result = "1 ПЕРЕСАДКА";
                break;
            case 2:
                result = "2 ПЕРЕСАДКИ";
                break;
            case 3:
                result = "3 ПЕРЕСАДКИ";
                break;
            default:
                break;
        }
        return result;
    }

    getDate(date){
        const departure_date_array = date.split(".");

        if (departure_date_array[2].length === 2){
            departure_date_array[2] = "20" + departure_date_array[2];
        }
        const departure_date = new Date(departure_date_array[2],departure_date_array[1],departure_date_array[0]);
        let result = departure_date_array[0] + " ";

        switch (departure_date_array[1]) {
            case "01":
                result += "янв";
                break;
            case "05":
                result += "мая";
                break;
        }

        result = result + " " + departure_date_array[2] + ", ";


        switch (departure_date.getDay()) {
            case 0:
                result = result + "Вс";
                break;
            case 1:
                result = result + "Пн";
                break;
            case 2:
                result = result + "Вт";
                break;
            case 3:
                result = result + "Ср";
                break;
            case 4:
                result = result + "Чт";
                break;
            case 5:
                result = result + "Пт";
                break;
            case 6:
                result = result + "Сб";
                break;



        }

        return result;
    }

    getCarrierLogo(carrier){
        let CarrierLogo = "";
        switch (carrier) {
            case "BA":
                CarrierLogo = BA;
                break;
            case "S7":
                CarrierLogo = S7;
                break;
            case "SU":
                CarrierLogo = SU;
                break;
            case "TK":
                CarrierLogo = TK;
                break;
        }
        return CarrierLogo;

    }

    render() {
        return(
            <div className="ticket-container row">
                <div className="col-md-4 text-center ticket-container__left-part">
                    <img src={this.carrierLogo} width={150}/>
                    <button className="btn btn-buy">Купить за {this.props.ticket.price}</button>
                </div>
                <div className="col-md-8 ticket-container__right-part">
                    <div className="col-md-4 text-left">
                        <h3>{this.props.ticket.departure_time}</h3>
                        <p>{this.props.ticket.origin}, {this.props.ticket.origin_name}</p>
                        <p>{this.departure_date}</p>
                    </div>
                    <div className="col-md-4">
                        <p className="ticket-container__right-part__stops">{this.stops}</p>
                        <img src={plane} className="ticket-container__right-part__img-plane"/>
                    </div>
                    <div className="col-md-4 text-right">
                        <h3>{this.props.ticket.arrival_time}</h3>
                        <p>{this.props.ticket.destination_name}, {this.props.ticket.destination}</p>
                        <p>{this.arrival_date}</p>
                    </div>
                </div>
            </div>
        );
    }
}