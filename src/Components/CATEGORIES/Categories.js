import React, { Component } from 'react';
import './Categories.scss'
import {MDBCol, MDBRow, MDBIcon} from "mdbreact";
import { Link } from 'react-router-dom';


class Categories extends React.Component {
    render() {
        return(
            <div className='container'>
                <div className='p-2 py-5'>
                    <MDBRow className='p-2 pt-2'>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10 category p-2 flex-wrap d-inline-flex'>
                                <Link to='./products'>
                                    <div className="view zoom position-relative img-wrap">
                                        <img
                                            src={require('./../../Image/categories/1/hair.jpg')}
                                            className="img-fluid w-100 h-100"
                                            alt=""
                                        />
                                        <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                            <a className='mb-5 pb-3 font-weight-bold'>ДЛЯ ВОЛОССЯ</a>
                                           </p>
                                    </div>
                                </Link>
                        </MDBCol>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10  category p-2'>
                                <Link to='./products'>
                                    <div className="view zoom position-relative img-wrap">
                                        <img
                                        src={require('./../../Image/categories/1/body.JPG')}
                                        className='w-100 h-100'
                                        />
                                        <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                            <a className='mb-5 pb-3 font-weight-bold'>ДЛЯ ТІЛА</a>
                                        </p>
                                    </div>
                                </Link>
                        </MDBCol>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10  category p-2'>
                            <Link to='./products'>
                                <div className="view zoom position-relative img-wrap">
                                    <img
                                        src={require('./../../Image/categories/1/face.JPG')}
                                        className='w-100 h-100'
                                    />
                                    <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                        <a className='mb-5 pb-3 font-weight-bold'>ДЛЯ ОБЛИЧЧЯ</a>
                                    </p>
                                </div>
                            </Link>
                        </MDBCol>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10  category p-2'>
                            <Link to='./products'>
                                <div className="view zoom position-relative img-wrap">
                                    <img
                                        src={require('./../../Image/categories/1/goodfood.JPG')}
                                        className='w-100 h-100'
                                    />
                                    <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                        <a className='mb-5 pb-3 font-weight-bold'>ДОБРА ЇЖА</a>
                                    </p>
                                </div>
                            </Link>
                        </MDBCol>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10  category p-2'>
                            <Link to='./products'>
                                <div className="view zoom position-relative img-wrap">
                                    <img
                                        src={require('./../../Image/categories/index/dobavki.JPG')}
                                        className='w-100 h-100'
                                    />
                                    <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                        <a className='mb-5 pb-3 font-weight-bold'>ФІТОКОМПЛЕКСИ</a>
                                    </p>
                                </div>
                            </Link>
                        </MDBCol>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10  category p-2'>
                            <Link to='./products'>
                                <div className="view zoom position-relative img-wrap">
                                    <img
                                        src={require('./../../Image/categories/index/greanmax.JPG')}
                                        className='w-100 h-100'
                                    />
                                    <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                        <a className='mb-5 pb-3 font-weight-bold'>ДЛЯ ДОМУ</a>
                                    </p>
                                </div>
                            </Link>
                        </MDBCol>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10  category p-2'>
                            <Link to='./products'>
                                <div className="view zoom position-relative img-wrap">
                                    <img
                                        src={require('./../../Image/categories/1/child.JPG')}
                                        className='w-100 h-100'
                                    />
                                    <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                        <a className='mb-5 pb-3 font-weight-bold'>ДЛЯ ДІТЕЙ</a>
                                    </p>
                                </div>
                            </Link>
                        </MDBCol>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10  category p-2'>
                            <Link to='./products'>
                                <div className="view zoom position-relative img-wrap">
                                    <img
                                        src={require('./../../Image/categories/progr/IMG_3668.JPG')}
                                        className='w-100 h-100'
                                    />
                                    <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                        <a className='mb-5 pb-3 font-weight-bold'>ФІТОКОМПЛЕКСИ ДЛЯ СЕРЦЯ</a>
                                    </p>
                                </div>
                            </Link>
                        </MDBCol>
                        <MDBCol className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10  category p-2'>
                            <Link to='./products'>
                                <div className="view zoom position-relative img-wrap">
                                    <img
                                        src={require('./../../Image/categories/progr/IMG_3682.JPG')}
                                        className='w-100'
                                    />
                                    <p className='text-center pb-4 pt-xl-3 pt-lg-3 pt-md-2 pt-sm-2 pt-3 mb-0 h-25'>
                                        <a className='mb-5 pb-3 font-weight-bold'>ФІТОКОМПЛЕКСИ АНТИПАРАЗИТ</a>
                                    </p>
                                </div>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                 </div>
            </div>
        )
    }
}

export default Categories;