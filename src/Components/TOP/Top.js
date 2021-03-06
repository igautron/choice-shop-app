import React from 'react';
import {Component} from 'react';
import './Top.scss'
import './top.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
} from 'mdbreact';

class Top extends React.Component  {
    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    render() {
        return (
            <div className='top-container h-100'>
                <div className='container justify-content-center h-100'>
                    <div className='d-xl-block d-lg-block d-md-block d-sm-none d-none'>
                        <div className='d-inline float-left p-2'>
                            <div className='d-inline-flex pr-3 text-white text-decoration-none font-weight-normal'><a href='https://www.instagram.com/choice_cosmetics/' className='white-ic'><i className='fab fa-instagram pr-2 text-white'></i>choice_cosmetics</a></div>
                        </div>
                        <div className='d-inline float-right p-2'>
                            <div className='d-inline-flex pr-3 text-white text-decoration-none font-weight-normal'><a href='tel:+380671088799' className='white-ic'><i className='fas fa-mobile-alt px-2 text-white'></i>+38 (067) 108 87 99</a></div>
                            <div className='d-inline-flex text-white text-decoration-none font-weight-normal'><Link to='/writetous' className='white-ic'><i className='far fa-envelope px-2 text-white'></i>ianagautron@gmail.com</Link></div>
                        </div>
                    </div>
                    <div className='d-xl-none d-lg-none d-md-none d-sm-block d-block'>
                        <MDBNavbar
                            className='z-depth-0 w-100 pt-sm-0 pt-md-2 pb-sm-0 pb-md-0 pt-0 pb-0 px-0'
                        >
                            <MDBContainer className='m-0 justify-content-center w-100'>
                                <MDBNavbarToggler
                                    className='bg-transparent'
                                    onClick={this.toggleCollapse('navbarCollapse1')}
                                />
                                <MDBNavbarNav right className=' nav-hidden d-inline-block px-xl-0 px-lg-3 px-md-0 m-0'>
                                    <div className='float-right p-0'>
                                        <div className='pr-3 text-white text-decoration-none font-weight-normal py-0 m-0 nav-logo-tell'><a href='tell:+380671088799' className='white-ic'><i className='fas fa-mobile-alt px-2 text-white'></i>+38 (067) 108 87 99</a></div>
                                    </div>
                                </MDBNavbarNav>
                                <MDBCollapse
                                    id='navbarCollapse1'
                                    isOpen={this.state.collapseID}
                                    navbar
                                    className='shop-nav-navbar'
                                >
                                    <MDBNavbarNav left className='d-block py-1'>
                                        <MDBNavItem className='py-2 font-weight-bold white-ic' active>
                                            <Link onClick={this.toggleCollapse('navbarCollapse1')} to='/' className='white-ic px-4'>ГОЛОВНА</Link>
                                        </MDBNavItem>
                                        <MDBNavItem className='py-2 font-weight-bold white-ic'>
                                            <Link onClick={this.toggleCollapse('navbarCollapse1')} to='./products' className='white-ic px-4'>ПРОДУКЦІЯ</Link>
                                        </MDBNavItem>
                                        <MDBNavItem className='py-2 font-weight-bold white-ic'>
                                            <Link onClick={this.toggleCollapse('navbarCollapse1')} to='./contacts' className='white-ic px-4'>КОНТАКТИ</Link>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top;