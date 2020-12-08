import React from 'react';
import {Component} from 'react';
import Cards from 'react-credit-cards';
import './Visa.scss'

import 'react-credit-cards/es/styles-compiled.css';

import {
    MDBCol,
    MDBRow
} from 'mdbreact';

class VISA extends React.Component {

    state = {
        number: '',
        cvc: '',
        expiry: '',
        focused: '',
        name: ''
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }


    render() {
        return (
            <p>
                <div className="container">
                    <div className="row py-3">
                        <div className="order-item z-depth-2 py-4 px-4 rgba-white-strong">
                            <div className="order panel-default ">
                                <div className="order-heading">
                                    <h4 className="green-text font-weight-bold text-left mb-0 p-2">Visa &<span className='blue-text'> Mastercard</span></h4>
                                    <div className='payment-form pt-3' id="PaymentForm">
                                        <Cards
                                            number={this.state.number}
                                            cvc={this.state.cvc}
                                            expiry={this.state.expiry}
                                            focused={this.state.focused}
                                            name={this.state.name}
                                            styles={{width: '15px'}}
                                        />
                                        <form role="form">
                                            <div className="form-group mb-1 px-2">
                                                <label htmlFor="cardNumber" className='pt-2 pb-0 mb-1'>CARD NUMBER</label>
                                                <div className="input-group">
                                                    <input className="order w-100"
                                                           id="cardNumber"
                                                           type="tel"
                                                           pattern="[0-9\s]{13,19}"
                                                           autoComplete="cc-number" maxLength="19"
                                                           label="xxxx xxxx xxxx xxxx"
                                                           onChange={this.handleInputChange}
                                                           onFocus={this.handleInputFocus}
                                                    />
                                                    <span className="input-group-addon"><span
                                                        className="glyphicon glyphicon-lock"></span></span>
                                                </div>
                                            </div>
                                            <div className="d-inline-flex w-100 p-2">
                                                <div className="col-6 p-0">
                                                    <div className="form-group m-0">
                                                        <label htmlFor="expityMonth" className='mb-1'>
                                                            EXPIRY DATE</label>
                                                        <div className='d-inline-flex'>
                                                            <div className="col-xs-5 col-lg-5 pl-ziro p-0 m-0">
                                                                <input type="text"
                                                                       className="w-100 order m-0"
                                                                       id="expityMonth"
                                                                       placeholder="MM"
                                                                       maxLength="2"
                                                                       label="XX"
                                                                       required
                                                                       onChange={this.handleInputChange}
                                                                       onFocus={this.handleInputFocus}
                                                                />
                                                            </div>
                                                            <div className="col-xs-5 col-lg-5 pl-ziro p-0 m-0 ml-3 mr-0">
                                                                <input type="text"
                                                                       className="w-100 order m-0"
                                                                       id="expityYear"
                                                                       placeholder="YY"
                                                                       maxLength="2"
                                                                       label="YY"
                                                                       required
                                                                       onChange={this.handleInputChange}
                                                                       onFocus={this.handleInputFocus}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 float-right p-0 ccv-code">
                                                    <div className="d-inline-flex flex-column pl-3">
                                                        <label htmlFor="cvCode" className='mb-1'>
                                                            CV CODE</label>
                                                        <input type="text"
                                                               className="w-100 order"
                                                               id="cvCode"
                                                               placeholder="CVV2" required
                                                               onChange={this.handleInputChange}
                                                               onFocus={this.handleInputFocus}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ul className="nav nav-pills nav-stacked d-inline-flex w-100 p-2 pt-0">
                                    <li className="text-left w-50">Final Payment:</li>
                                    <li className="text-right w-50">4200<span> UAH</span></li>
                                </ul>
                                <br />
                                <form method="POST" className='w-100 p-2' action="https://www.liqpay.ua/api/3/checkout"
                                      accept-charset="utf-8">
                                    <input type="hidden" className="w-100" name="data" value="eyAidmVyc2lvbiIgOiAzLCAicHVibGljX2tleSIgOiAieW91cl9wdWJsaWNfa2V5IiwgImFjdGlvbiIgOiAicGF5IiwgImFtb3VudCIgOiAxLCAiY3VycmVuY3kiIDogIlVTRCIsICJkZXNjcmlwdGlvbiIgOiAiZGVzY3JpcHRpb24gdGV4dCIsICJvcmRlcl9pZCIgOiAib3JkZXJfaWRfMSIgfQ=="/>
                                    <input type="hidden" className='w-100' name="signature" value="QvJD5u9Fg55PCx/Hdz6lzWtYwcI="/>
                                    <a href="http://www.jquery2dotnet.com" className="btn btn-success btn-block font-weight-bolder" role="button">PAY</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </p>
        )
    }
}

export default VISA;