import React from 'react';
import {Component} from 'react';
import './Nav.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {MDBCardImage, MDBRow, MDBCol, MDBFormInline, MDBCollapse, MDBNavbarNav} from "mdbreact";


class Nav extends React.Component  {


    render() {
        return (
              <div className='container h-100'>
                  <MDBRow className='z-index-0'>
                      <MDBCol className='float-left col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5'>
                          <div className='px-2'>
                              <MDBCardImage src={require('./../../Image/logo/logo.png')} className="img-fluid nav-logo py-4 my-2 z-index-2" alt="Responsive image" />
                          </div>
                      </MDBCol>
                      <MDBCol className='d-inline-flex col-xl-4 col-lg-4 col-md-4 col-sm-0 col-2 d-lg-flex justify-content-between my-5'>
                          <div className='d-lg-flex d-xl-flex d-md-flex d-sm-none d-xs-none d-none'>
                              <div>
                                  <Link to='/' className='font-weight-bold px-2'>
                                      ГОЛОВНА
                                  </Link>
                              </div>
                              <div>
                                  <Link to='/products' className='font-weight-bold px-2'>
                                      ПРОДУКТИ
                                  </Link>
                              </div>
                              <div>
                                  <Link to='/contacts' className='font-weight-bold px-2'>
                                      КОНТАКТИ
                                  </Link>
                              </div>
                          </div>
                      </MDBCol>
                      <MDBCol className='float-right  text-right col-xl-4 col-lg-4 col-xl-4 col-md-4 col-sm-3 col-5  px-0 pr-3 ml-xl-0 pl-lg-0 ml-md-0 ml-sm-5'>
                          <div className='m-auto d-inline-flex align-items-center pt-4'>
                            <div className='text-right p-3 py-4 brown-ic'><i className="fas fa-search"></i></div>
                             {/*<MDBFormInline className="md-form mr-auto m-0">*/}
                             {/*   <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />*/}
                             {/*</MDBFormInline>*/}
                            <div className='text-right p-3 py-4 brown-ic'><i className="far fa-user"></i></div>
                            <div className='text-right p-3 py-4 brown-ic'><i className="fas fa-shopping-cart"></i></div>
                          </div>
                      </MDBCol>
                  </MDBRow>
              </div>
        )
    }
}

export default Nav;