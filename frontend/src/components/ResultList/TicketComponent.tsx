import React from 'react';
import './TicketComponent.css';

export const TicketComponent = ( {ticket} ) =>{
    console.log(ticket);
    return(
        <div className="ticket-container row">
            <div className="col-md-4 text-center ticket-container__left-part">
                <img src={ticket.carrier} width={150}/>
                <button className="btn btn-buy">Купить за {ticket.price} {ticket.currency}</button>
            </div>
            <div className="col-md-8 ticket-container__right-part">
                <div className="col-md-4 text-left">
                    <h3>{ticket.departure_time}</h3>
                    <p>МСК, СПБ</p>
                    <p>20.10.2020</p>
                </div>
                <div className="col-md-4 ticket-container__right-part__stops-block">
                    <p className="ticket-container__right-part__stops">3</p>
                    <img src='http://localhost:3001/img/plane.png' className="ticket-container__right-part__img-plane"/>
                </div>
                <div className="col-md-4 text-right">
                    <h3>{ticket.arrival_time}</h3>
                    <p>МСК, СПБ</p>
                    <p>20.10.2020</p>
                </div>
            </div>
        </div>
    );
}