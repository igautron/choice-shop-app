import React from 'react';
import {Component} from 'react';
import './Footer.scss'
import {Link, BrowserRouter as Router, NavLink} from 'react-router-dom';
import {MDBBtn, MDBCol, MDBRow, MDBInput } from "mdbreact";


class Footer extends React.Component  {


    render() {
        return (
           <div>
               <div className='w-100 container-footer'>
                   <div className='container justify-content-center m-auto h-100'>
                       <div className='d-inline-flex w-100 h-100'>
                           <MDBRow className='flex-wrap w-100'>
                               <MDBCol className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 px-0 pl-xl-3 pl-lg-3 pl-md-3 pl-sm-3 pl-4'>
                                   <div className='footer-logo'>
                                       <img className='w-100 pt-5 pb-4' src={require('../../Image/logo/logo.png')} />
                                   </div>
                                   <p className='font-weight-normal white-text footer-slogan'>Інтернет магазин фітопрепаратів та засобі догляду за людиною та домом. Вітаміни для Вашого здоров'я та краси торгівельних марок White Mandarin, Green Max, Добра Їжа.</p>
                               </MDBCol>
                               <MDBCol className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 pt-5 pl-0 pl-sm-0 pl-md-5 pl-lg-5 pl-xl-5  pr-0'>
                                   <h4 className='font-weight-bold white-ic pl-5 py-3'>Товари</h4>
                                   <NavLink to='category/hair'>
                                       <p className='pl-5 py-1 m-0'><a href='#' className='white-text'>Догляд за волоссям</a></p>
                                   </NavLink>
                                   <NavLink to='category/body'>
                                       <p className='pl-5 py-1 m-0'><a href='#' className='white-text'>Догляд за тілом</a></p>
                                   </NavLink>
                                   <NavLink to='category/face'>
                                       <p className='pl-5 py-1 m-0'><a href='#' className='white-text'>Догляд за обличчям</a></p>
                                   </NavLink>
                                   <NavLink to='category/home'>
                                       <p className='pl-5 py-1 m-0'><a href='#' className='white-text'>Догляд за домівкою</a></p>
                                   </NavLink>
                                   <NavLink to='category/health'>
                                       <p className='pl-5 py-1 m-0'><a href='#' className='white-text'>Догляд за здоров'ям</a></p>
                                   </NavLink>
                               </MDBCol>
                               <MDBCol className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 py-5 pr-0 px-0  d-sm-block d-md-none d-lg-block d-xl-block'>
                                   <h4 className='font-weight-bold white-ic py-3 pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'>Співпраця</h4>
                                   <p className='white-text footer-work pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'>Продавайте разом з нами — отримуйте знижки. Зателефонуйте нам та підпишіть контракт.</p>
                                   <p className='green-ic font-weight-bold pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3 footer-tell'><i className="fas fa-phone pr-2"></i>+38 (067) 998 40 42</p>
                                   <p className='white-text pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'>Отримати контракт:</p>
                                   <div className='w-100 pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'>
                                       <MDBInput hint="Введіть e-mail" type="email" className='white-text w-50 pl-2 ml-0 ml-sm-0 ml-md-0 ml-lg-0 ml-xl-0 m-0 p-0 mt-0 w-50 d-inline-flex' >
                                            <MDBBtn className='align-items-center px-1 py-1 btn-footer mt-2 m-2 btn-green'>Send</MDBBtn>
                                       </MDBInput>
                                   </div>
                               </MDBCol>
                               <MDBCol className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 py-5 px-0'>
                                   <h4 className='font-weight-bold white-ic pl-5 py-3 pb-2'>Контакти</h4>
                                   <p className='white-ic font-weight-normal pl-5 footer-adress'><i className='fas fa-map-marker-alt pl-1 pr-3 text-white'></i>м. Київ, вул. Данченко 32, салон краси та магазин YVONNE</p>
                                   <p className='green-ic font-weight-bold pl-5 footer-tell'><i className="fas fa-phone pr-2 "></i>+38 (067) 998 40 42</p>
                                   <p className='green-ic font-weight-bold pl-5 footer-tell'><i className="fas fa-phone pr-2"></i>+38 (067) 108 87 99</p>
                                   <p className='white-ic font-weight-normal pl-5 footer-tell'><i className='far fa-envelope pr-2 text-white'></i>asbergint@gmail.com</p>
                                   <p className='white-ic font-weight-normal pl-5'><i className='fab fa-instagram pr-2 text-white'></i>choice</p>
                                   <p className='white-ic font-weight-normal pl-5'><i className='fab fa-facebook pr-2 text-white'></i>choice</p>
                               </MDBCol>
                           </MDBRow>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Footer;