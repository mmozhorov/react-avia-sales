import React, { useState } from 'react';
import BA from './BA.png';
import S7 from './S7.png';
import SU from './SU.png';
import TK from './TK.png';
import plane from './plane.png';
import './TicketComponent.css';

export const TicketComponent = ( ticket: any) =>{
    return(
        <div className="ticket-container row">
            <div className="col-md-4 text-center ticket-container__left-part">
                <img src={BA} width={150}/>
                <button className="btn btn-buy">Купить за 20000 рублей</button>
            </div>
            <div className="col-md-8 ticket-container__right-part">
                <div className="col-md-4 text-left">
                    <h3>20:16</h3>
                    <p>МСК, СПБ</p>
                    <p>20.10.2020</p>
                </div>
                <div className="col-md-4 ticket-container__right-part__stops-block">
                    <p className="ticket-container__right-part__stops">3</p>
                    <img src={plane} className="ticket-container__right-part__img-plane"/>
                </div>
                <div className="col-md-4 text-right">
                    <h3>20:16</h3>
                    <p>МСК, СПБ</p>
                    <p>20.10.2020</p>
                </div>
            </div>
        </div>
    );
}