import React from 'react';
import {Component} from 'react';
import './Production.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {MDBCol, MDBRow, MDBIcon } from 'mdbreact'

class Production extends React.Component {
    render() {
        return (
            <section className="my-5 container">
                <MDBRow className='m-0'>
                    <MDBCol lg="6" className="text-center text-lg-left justify-content-center m-auto px-0 m-0 p-2">
                        <img
                            className="img-fluid"
                            src={require('./../../Image/prof/123.webp')}
                            alt=""
                        />
                    </MDBCol>
                    <MDBCol lg="6" className="col text-center text-lg-left justify-content-center p-2">
                        <h2 className="h2-responsive font-weight-bold text-center py-sm-5 py-3 about-text m-0">Продукція компанії</h2>
                        <h5 className="black-text about-text text-left">
                            <span className='green-ic font-weight-bold'>White Mandarin</span> - торгівельна марка натуральних косметичних засобів, вироблених виключно на основі рослинної сировини, не містять продуктів нафтохімії, SLS і SLES, силіконів, парабенів, синтетичних добавок, небезпечних для здоров'я людини.
                        </h5>
                        <h5 className="black-text about-text text-left">
                            <span className='green-ic font-weight-bold'>Добра їжа</span> - це натуральні добавки до їжі, поживні речовини для дієтичного харчування та здалансованого раціону для дорослих та дітей. Поліпшують обмін речовин та зміцнюють здоров'я.
                        </h5>
                        <h5 className="black-text about-text text-left">
                            <span className='green-ic font-weight-bold'>Green Max</span> - засоби по догляду за домом, особливість яких полягає у природному походженні та властивості біологічно розкладатися не завдаючи шкоди навколишньому середовищі.
                        </h5>
                    </MDBCol>
                </MDBRow>
            </section>
        )
    }
}

export default Production;