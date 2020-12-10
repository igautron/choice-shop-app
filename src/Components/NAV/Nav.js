import React from 'react';
import {Component} from 'react';
import './Nav.scss'
import {Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import {MDBCardImage, MDBRow, MDBCol, MDBFormInline, MDBCollapse, MDBNavbarNav, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn} from "mdbreact";

import ShopBin from "../../Backend/BIN/Bin"
import Autorization from "../../Backend/AUTORIZATION/Autorization";
import Registration from "../../Backend/REGISTRATION/Registration";
import Mobile from "../../Components/MOBILE/Mobile";
import  '../../Components/NAV/elements.css'
import '../../Backend/AUTORIZATION/Autorization.scss'

class Nav extends React.Component  {


    state = {
        isCartModalOpened: false,
        isLoginModalOpened: false,
        isSearchModalOpened: false,
        modalBody: 'authorization', // registration
        modalTitle: 'Авторизація',
        showProfileMenu: true,
    }



    loginModalToggle = () => {
        this.setState({
            isLoginModalOpened: !this.state.isLoginModalOpened
        });
    }

    changeModalBody = (where_to_go) => {
        this.setState({modalBody: where_to_go})

        if (where_to_go === 'authorization') {
            this.setState({modalTitle: 'Авторизація'})
        }else if(where_to_go === 'registration'){
            this.setState({modalTitle: 'Регистрація'})
        }
    }


    modalBody = () => {
        if (this.state.modalBody === 'authorization') {
            return <Autorization 
              changeModalBody={this.changeModalBody} 
              loginModalToggle={this.loginModalToggle}
              appState={this.props.appState}
              setUserData={this.props.setUserData} />
        }else if(this.state.modalBody === 'registration'){
            return <Registration 
              changeModalBody={this.changeModalBody} 
              loginModalToggle={this.loginModalToggle}
              appState={this.props.appState}
              setUserData={this.props.setUserData} />
        }else if(this.state.modalBody === 'successRgistration'){
            return <div>Вы успешно зарегистрированы!</div>
        }else{
            return <div>Error!</div>
        }
    }



    cartModalToggle = () => {
          this.setState( {
             isCartModalOpened: !this.state.isCartModalOpened
        })
    }


    searchHandleToggle = () => {
        this.setState( {
            isSearchModalOpened: !this.state.isSearchModalOpened
        })
    }


    profileMenu = () => {
        let user = localStorage.getItem('user', 1);
        if (user) {
            return (
                <ul className="profile-menu">
                    <li><NavLink to="/profile">Личный кабинет</NavLink></li>
                    <li><NavLink to="/myOrders">Заказы</NavLink></li>
                    <li>Избранное</li>
                    <li onClick={this.logout}>Выход</li>
                </ul>
            )
        } else {
            return false
        }
    }


    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setState({showProfileMenu: false})
    }




    render() {
        return (
              <div className='container h-100'>
                  <MDBRow className='z-index-0 w-100 m-0'>
                      <MDBCol className='float-left col-xl-4 col-lg-4 col-md-4 col-sm-5 col-6 pl-0'>
                          <div className='px-2'>
                              <MDBCardImage src={require('./../../Image/logo/logo.png')} className="img-fluid nav-logo py-4 my-2 z-index-2" alt="Responsive image" />
                          </div>
                      </MDBCol>
                      <MDBCol className='d-inline-flex col-xl-4 col-lg-4 col-md-4 col-sm-3 col-1 d-lg-flex justify-content-between my-5 px-0'>
                          <div className='d-lg-flex d-xl-flex d-md-flex d-sm-none d-xs-none d-none'>
                              <div>
                                  <Link to='/' className='font-weight-bold px-3'>
                                      ГОЛОВНА
                                  </Link>
                              </div>
                              <div>
                                  <Link to='/products' className='font-weight-bold px-3'>
                                      ПРОДУКТИ
                                  </Link>
                              </div>
                              <div>
                                  <Link to='/contacts' className='font-weight-bold px-3'>
                                      КОНТАКТИ
                                  </Link>
                              </div>
                          </div>
                      </MDBCol>
                      <MDBCol className='float-right  text-right p-0 col-xl-4 col-lg-4 col-xl-4 col-md-4 col-sm-4 col-5  px-0 pr-0 ml-xl-0 pl-lg-0 ml-md-0 ml-sm-0'>
                          <div className='m-auto d-inline-flex align-items-center pt-4'>
                              <button className='text-right p-3 py-4 brown-ic border-0 bg-transparent' onClick={this.searchHandleToggle}><i className="fas fa-search"></i></button>
                              <MDBModal className='z-depth-0 pt-3 w-100 p-0 modal-search' isOpen={this.state.isSearchModalOpened} toggle={this.searchHandleToggle} >
                                  <MDBModalBody className='h-100 modal-body z-depth-0'>
                                      <form className="form-inline d-inline-flex w-100 py-5 form-search">
                                          <input className="form-control form-control-sm ml-3 w-75 input-search justify-content-center mx-auto" type="text"
                                                 placeholder="Search"
                                                 aria-label="Search" />
                                      </form>
                                  </MDBModalBody>
                              </MDBModal>
                              <button className='text-right p-3 py-4 brown-ic border-0 bg-transparent login-button ' onClick={this.loginModalToggle}>
                                 <i className="far fa-user"></i>
                              </button>
                              <MDBModal className='z-depth-0 modal-login pt-3' isOpen={this.state.isLoginModalOpened} toggle={this.loginModalToggle} >
                                  <MDBModalHeader className='card-header text-center justify-content-center mb-0'>{this.state.modalTitle}
                                      <MDBBtn className='btn-aut m-2 p-2 border-0 position-absolute z-depth-0' color="secondary" onClick={this.loginModalToggle}><i className="fas fa-times mr-2 brown-ic"></i></MDBBtn>
                                  </MDBModalHeader>
                                  <MDBModalBody className='h-100 modal-body z-depth-0'>
                                      {this.modalBody()}
                                  </MDBModalBody>
                              </MDBModal>
                              {this.profileMenu()}
                              <button className='text-right p-3 py-4 brown-ic border-0 bg-transparent cart-button' onClick={this.cartModalToggle}>
                                  <i className="fas fa-shopping-cart"></i>
                              </button>
                                  <MDBModal className='modal-bin justify-content-center mx-auto' isOpen={this.state.isCartModalOpened} toggle={this.cartModalToggle} >
                                      <MDBModalHeader className='card-header text-center justify-content-center mb-0'>Корзина
                                          <MDBBtn className='btn-cart m-2 p-2 border-0 position-absolute z-depth-0' color="secondary" onClick={this.cartModalToggle}><i className="fas fa-times mr-2 brown-ic"></i></MDBBtn>
                                      </MDBModalHeader>
                                      <MDBModalBody className='px-0 py-3'>
                                          <ShopBin />
                                      </MDBModalBody>
                                  </MDBModal>
                          </div>
                      </MDBCol>
                  </MDBRow>
                  <div>
                      <Mobile />
                  </div>
              </div>
        )
    }
}

export default Nav;