import React from 'react';

import { baseUrl } from "../../api/urls";

import parseTimestampToDate from "../../utils/parseTimestampToDate";

import './TicketComponent.css';

export const TicketComponent = ( { ticket } ) =>
    <div className="ticket-container row">
        <div className="col-md-4 text-center ticket-container__left-part">
            <img src={ticket.carrier} alt="Plane company logo" width={150}/>
            <button className="btn btn-buy">Купить за {ticket.price} {ticket.currency}</button>
        </div>
        <div className="col-md-8 ticket-container__right-part">
            <div className="col-md-4 text-left">
                <h3>{ticket.departure_time}</h3>
                <p>{ticket.origin}, {ticket.origin_name}</p>
                <p>{parseTimestampToDate(ticket.departure_date)}</p>
            </div>
            <div className="col-md-4 ticket-container__right-part__stops-block">
                <p className="ticket-container__right-part__stops">{ticket.stops}</p>
                <img src={`${baseUrl}/img/plane.png`} alt="Plane stops" className="ticket-container__right-part__img-plane"/>
            </div>
            <div className="col-md-4 text-right">
                <h3>{ticket.arrival_time}</h3>
                <p>{ticket.destination}, {ticket.destination_name}</p>
                <p>{parseTimestampToDate(ticket.arrival_date)}</p>
            </div>
        </div>
    </div>