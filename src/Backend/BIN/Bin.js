import React from 'react';
import {Component} from 'react';
import './Bin.scss'

import {Link} from 'react-router-dom'


import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage} from "mdbreact";

class Bin extends React.Component  {




    render() {
        return (
            <div className='position-absolute z-index-5 bin m-0 p-0 mt-0'>
                    <div className='card m-0 p-0'>
                        <form className='text-center border border-light p-5' action="#!">
                            <div>
                                <MDBRow className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-1 w-responsive">
                                    <MDBCol className='col-2 p-0'>
                                        <img src={require('./../../Image/categories/volosia/IMG_4.JPG')} className="img-fluid w-100" alt="Responsive image" />
                                    </MDBCol>
                                    <MDBCol className='col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 py-2 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-2'>
                                        <p className='order-item w-100'>Назва товару(Для 2х строк). Інформація із баз данних, яка потрапляє у це віконце</p>
                                    </MDBCol>
                                    <MDBCol className='col-2 px-0 py-3 mx-0'>
                                        <form>
                                            <input className='input-bin' type='number' min='1' value='1'></input>
                                        </form>
                                    </MDBCol>
                                    <MDBCol className='col-2 p-0 mx-0'>
                                        <p className='price px-lg-2 px-xl-2 px-md-2 px-sm-0 px-0 py-3'>1500<span>грн</span></p>
                                    </MDBCol>
                                    <MDBCol className='col-1 p-1 py-2'>
                                        <button type="button" className="btn btn-x px-xl-4 px-lg-4 px-md-4 px-sm-3 px-2  py-2 m-0 text-center bg-transparent border-0 z-depth-0">
                                            <i className="fas fa-times mr-2"></i>
                                        </button>
                                    </MDBCol>
                                </MDBRow>
                            </div>
                            <div className='d-inline-flex w-100'>
                                <div className='w-50 float-left'>
                                    <p className='align-content-center text-left font-weight-bold font-weight-bold py-2 my-4'>До сплати: <span>1500</span> грн</p>
                                </div>
                                <div className='w-50 float-right m-0'>
                                    <Link to='/Order'>
                                        <button className="btn btn-bin-choice my-4 m-0" type="submit">ПРИДБАТИ</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='w-100'>
                                <p>Ще не авторизовані?
                                    <a href="#" className='pl-3'>Авторизуватися</a>
                                </p>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}

export default Bin;