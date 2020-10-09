import React from 'react';
import {Component} from 'react';
import './Top.scss'
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
                             <div className='d-inline-flex pr-3 text-white text-decoration-none font-weight-light'><a href='#' className='white-ic'><i className='fab fa-instagram pr-2 text-white'></i>choice</a></div>
                             <div className='d-inline-flex text-white text-decoration-none font-weight-light'><a href='#' className='white-ic'><i className='fab fa-facebook px-2 text-white'></i>choice</a></div>
                         </div>
                         <div className='d-inline float-right p-2'>
                             <div className='d-inline-flex pr-3 text-white text-decoration-none font-weight-light'><a href='#' className='white-ic'><i className='fas fa-mobile-alt px-2 text-white'></i>+38 (067) 108 87 99</a></div>
                             <div className='d-inline-flex text-white text-decoration-none font-weight-light'><a href='#' className='white-ic'><i className='far fa-envelope px-2 text-white'></i>ianagautron@gmail.com</a></div>
                         </div>
                     </div>
                     <div className='d-xl-none d-lg-none d-md-none d-sm-block d-block z-index-5'>
                         <MDBNavbar
                             color='lighten-4'
                             style={{ marginTop: '20px' }}
                             light
                             className='bg-transparent m-0'
                         >
                             <MDBNavbarToggler
                                 onClick={this.toggleCollapse('navbarCollapse1')}
                                 className='py-0'
                             />
                             <MDBCollapse
                                 id='navbarCollapse1'
                                 isOpen={this.state.collapseID}
                                 navbar
                                 className='rgba-brown-strong'

                             >
                                 <MDBNavbarNav left>
                                     <MDBNavItem className='py-2 px-2 font-weight-bold white-ic' active>
                                         <Link to='/' className='white-ic'>ГОЛОВНА</Link>
                                     </MDBNavItem>
                                     <MDBNavItem className='py-2 px-2 font-weight-bold white-ic'>
                                         <Link to='./products' className='white-ic'>ПРОДУКЦІЯ</Link>
                                     </MDBNavItem>
                                     <MDBNavItem className='py-2 px-2 font-weight-bold white-ic'>
                                         <Link to='./contacts' className='white-ic'>КОНТАКТИ</Link>
                                     </MDBNavItem>
                                 </MDBNavbarNav>
                             </MDBCollapse>
                         </MDBNavbar>
                     </div>
                 </div>
             </div>
        )
    }
}

export default Top;