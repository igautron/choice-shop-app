import React from 'react';
import {Component} from 'react';
import './Order.scss'

import {Link} from 'react-router-dom'

import {
    MDBBtn,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBContainer,
    MDBInput,
    MDBSelect,
    MDBCollapse, MDBCardImage

} from 'mdbreact';


import PRIVAT from './PAYMENTS/PRIVAT/Privat'
import LIQPAY from './PAYMENTS/LIQPAY/Liqpay'
import VISA from './PAYMENTS/VISA/Visa'
import SHIPMENT from './PAYMENTS/SHIPMENT/Shipment'
import OrderRealized from './OrderRealized';


class Order extends React.Component  {

    state = {
        radio: 0
    }

    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }))
    }


    onClick = nr => () => {
        this.setState({
            radio: nr
        })


    }

    render() {
        return (
            <div>
                <div className='container p-2'>
                    <h1 className='h1-responsive font-weight-bolder m-0 pt-2 py-xl-5 py-lg-5 py-md-5 py-sm-5 py-5'>Форма замовлення</h1>
                    <p className='w-75 justify-content-center m-auto text-center w-responsive pb-5'>Для оформлення онлайн-замовлення заповніть будь-ласка форму, яка наведена нижче. Після обробки заявки наш спеціаліст зв'яжеться з вами за номером телефону, який ви надаєте.</p>
                    <div className='my-2'>
                        <MDBCard className='mt-xl-2 mt-lg-2 mt-md-2 mt-sm-2 mt-2 border-0 z-index-0 bg-transparent'>
                            <p className='font-weight-bold'>Список замовлених товарів</p>
                            <div className='w-100'>
                                <p>Тут зявляються товари із корзини</p>
                            </div>
                        </MDBCard>
                        <MDBCard className='mt-xl-4 mt-lg-4 mt-md-4 mt-sm-3 mt-2 border-0 z-index-0 bg-transparent'>
                            <p className='font-weight-bold'>Контактна інформація</p>
                            <MDBRow className='d-inline-flex m-0 pt-0 pl-3'>
                                <MDBCol className='d-inline'>
                                    <MDBCol className='col-10 d-flex flex-column mb-3 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0 pl-0'>
                                        <label htmlFor="fname"><i className="fa fa-user pr-3"></i>Ім'я</label>
                                        <input className='w-100 order pl-2' type="text" id="fname" name="firstname" placeholder="Анастасія" />
                                    </MDBCol>
                                    <MDBCol className='col-10 d-flex flex-column mb-3 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0 pl-0'>
                                        <label htmlFor="email"><i className="fa fa-user pr-3"></i>Фамілія</label>
                                        <input className='w-100 order pl-2' type="text" id="email" name="email" placeholder="Іванова" />
                                    </MDBCol>
                                </MDBCol>
                                <MDBCol className='d-inline'>
                                    <MDBCol className='col-10 d-flex flex-column mb-3 pr-4 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-0'>
                                        <label htmlFor="fname"><i className="far fa-envelope pr-3"></i>Email</label>
                                        <input className='w-100 order pl-2' type="text" id="fname" name="email" placeholder="john@example.com" />
                                    </MDBCol>
                                    <MDBCol className='col-10 d-flex  flex-column mb-3 pr-4 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-0'>
                                        <label htmlFor="email"><i className="fas fa-map-marked-alt pr-3"></i>Місто</label>
                                        <input className='w-100 order pl-2' type="text" id="email" name="city" placeholder="Київ" />
                                    </MDBCol>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='m-0 pt-0 pb-xl-4 pb-lg-0 pb-md-0 pb-sm-0 pb-0 pl-3'>
                                <MDBCol className='d-inline'>
                                    <MDBCol className='col-10 d-flex flex-column mb-3 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0 pl-0'>
                                        <label htmlFor="fname"><i className="fa fa-user pr-2 pr-3"></i>По-батькові</label>
                                        <input className='w-100 order pl-2' type="text" id="fname" name="firstname" placeholder="Віталіївна" />
                                    </MDBCol>
                                    <MDBCol className='col-10 d-flex  flex-column mb-3 pr-xl-4 pr-lg-4 pr-md-4 pr-sm-4 pr-0 pl-0'>
                                        <label htmlFor="email"><i className="fas fa-phone-alt pr-3"></i>Телефон</label>
                                        <input className='w-100 order pl-2' type="text" id="email" name="" placeholder="+380671010109" />
                                    </MDBCol>
                                </MDBCol>
                                <MDBCol className='d-inline'>
                                    <MDBCol className='col-10 d-flex flex-column mb-3 pr-4 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-0'>
                                        <label htmlFor="adr"><i className="fas fa-map-marker-alt pr-3"></i>Вулиця</label>
                                        <input className='w-100 order pl-2' type="text" id="adr" name="address" placeholder="вулиця Данченко" />
                                    </MDBCol>
                                    <MDBCol className='col-10 d-flex  flex-column mb-3 pr-4 pl-xl-4 pl-lg-4 pl-md-4 pl-sm-4 pl-0'>
                                        <label htmlFor="city"><i className="fas fa-house-user pr-3"></i>Будинок</label>
                                        <input className='w-100 order pl-2' type="text" id="city" name="address" placeholder="32" />
                                    </MDBCol>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                        <MDBCard className='mt-xl-2 mt-lg-2 mt-md-2 mt-sm-3 mt-2 border-0 z-index-0 bg-transparent'>
                            <MDBRow className='m-0 py-xl-2 py-lg-0 py-md-0 py-sm-0 py-0 flex-column'>
                                <p className='font-weight-bold font-weight-bold'>Спосіб доставки</p>
                                <p className=''>Оберіть найзручніший для Вас спосіб доставки</p>
                                <SHIPMENT />
                                <p className='blue-grey-ic text-wrap font-smaller pt-4'>Як тільки ми отримаємо заявку на замовлення, одразу ж відправляємо товари на вказану Вами адресу. Після того, як товар прибуде на відділення, Вам обов'язково прийде повідомлення. Обіцяємо реалізувати замовлення якісно та швидко.</p>
                            </MDBRow>
                        </MDBCard>
                        <MDBCard className='mt-xl-2 mt-lg-2 mt-md-2 mt-sm-3 mt-2 pb-0 border-0 z-index-0 bg-transparent'>
                            <MDBRow className='m-0 py-xl-4 py-lg-0 py-md-0 py-sm-0 py-0 flex-column'>
                                <p className='font-weight-bold font-weight-bold'>Інформація про оплату товарів</p>
                                <p>Оберість найзручніший для Вас спосіб оплати. Оплату можливо здійснити наступним чином: </p>
                                <MDBCol>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="radio1" name="materialExampleRadios" />
                                        <label className="form-check-label" htmlFor="materialUnchecked">Оплата при отриманні товару готівкою кур'єру</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="radio2" name="materialExampleRadios" />
                                        <label className="form-check-label" htmlFor="materialUnchecked">Оплата наложеним платежем (оплатіть при отриманні замовлення)</label>
                                    </div>
                                    <div className="form-check">
                                        <input onClick={this.toggleCollapse("basicCollapse")} checked={this.state.radio===3 ? true : false} type="radio" className="form-check-input" id="radio3" name="materialExampleRadios" />
                                        <label className="form-check-label" htmlFor="materialUnchecked">Оплата картою Visa/Mastercard</label>
                                    </div>
                                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                                            <VISA />
                                        </MDBCollapse>
                                    <div className="form-check">
                                        <input onClick={this.toggleCollapse("basicCollapse")} checked={this.state.radio===4 ? true : false} type="radio" className="form-check-input" id="radio4" name="materialExampleRadios" />
                                        <label className="form-check-label" htmlFor="materialUnchecked">Оплата LiqPay</label>
                                    </div>
                                    <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                                        <LIQPAY />
                                    </MDBCollapse>
                                    <div className="form-check">
                                        <input onClick={this.onClick=(5)} checked={this.state.radio===5 ? true : false} type="radio" className="form-check-input" id="radio5" name="materialExampleRadios" />
                                        <label className="form-check-label" htmlFor="materialUnchecked">Оплата Privat24</label>
                                    </div>
                                    <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                                        <PRIVAT />
                                    </MDBCollapse>
                                </MDBCol>
                                <p className='blue-grey-ic text-wrap font-smaller pt-4'>Внесені Вами дані збережено успішно. Поставте галочку давши згоду на обробку персональних даних та натисніть на кнопку замовити. Після того, як ми отримаємо Ваше замовлення, ми зв'яжемось із Вами. Дякуэмо за замовлення!</p>
                            </MDBRow>
                        </MDBCard>
                        <MDBCard className='mt-0 border-0 z-index-0 bg-transparent pb-5'>
                            <MDBRow className='pl-3 m-0 pt-0'>
                                <div className='d-inline-block mt-4 w-100'>
                                    <div className='private-policy-text mb-0'>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="materialChecked2" checked />
                                            <label className="form-check-label" htmlFor="materialChecked2">Я ознайомлений з правилами та даю згоду на обробку персональних данних згідно положень Політики Конфіденційності</label>
                                        </div>
                                    </div>
                                </div>
                            </MDBRow>
                        </MDBCard>
                        <form method="POST" className='w-25 justify-content-center m-auto pb-5 my-5' action="https://www.liqpay.ua/api/3/checkout"
                              accept-charset="utf-8">
                            <input type="hidden" className="w-100" name="data" value="eyAidmVyc2lvbiIgOiAzLCAicHVibGljX2tleSIgOiAieW91cl9wdWJsaWNfa2V5IiwgImFjdGlvbiIgOiAicGF5IiwgImFtb3VudCIgOiAxLCAiY3VycmVuY3kiIDogIlVTRCIsICJkZXNjcmlwdGlvbiIgOiAiZGVzY3JpcHRpb24gdGV4dCIsICJvcmRlcl9pZCIgOiAib3JkZXJfaWRfMSIgfQ=="/>
                            <input type="hidden" className='w-100' name="signature" value="QvJD5u9Fg55PCx/Hdz6lzWtYwcI="/>
                            <Link to='/orderRealized'>
                                <a href="http://www.jquery2dotnet.com" className='btn-light-green px-2 px-sm-2 px-md-2 px-lg-4 px-xl-2 py-3 w-75 btn btn-block font-weight-bolder" role="button"'>ЗАМОВИТИ</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order;