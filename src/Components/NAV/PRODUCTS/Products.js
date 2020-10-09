import React from 'react';
import {Component} from 'react';
import './Products.css'
import { Scrollbars } from 'react-custom-scrollbars';

import {
    MDBRow,
    MDBInput,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
    MDBCardImage,
    MDBLink,
    MDBCardFooter,
    MDBCollapse,
    MDBContainer,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBIcon,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBNavbarToggler,
    MDBBtn,
    MDBFilter
} from 'mdbreact';

import $ from 'jquery';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';


class Products extends React.Component  {
    state = {
        collapseID: ''
    }


    state = {
        value: 0
    }

    state = {
        items: {
            default: '1',
        }
    };


    togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = { ...this.state.items };
            items[type] = tab;
            this.setState({
                items
            });
        }
    };


    decrease = () => {
        this.setState ({value: this.state.value - 1 })
    }

    increase = () => {
        this.setState ({value: this.state.value + 1 })
    }



    render() {
        return (
              <div>
                  <div className='mb-5 mt-3'>
                      <div className='container pl-1 pr-3 px-sm-2 px-md-2 px-lg-1 px-xl-1'>
                          <h2 className='h2-responsive pt-5 mb-0 pb-3 pb-md-5 pb-xl-5 pb-lg-5 font-weight-bold text-center'>
                              ПРОДУКЦІЯ
                          </h2>
                          <MDBRow className='d-inline-flex w-responsive w-100 pb-5'>
                              <MDBCol className='col-xl-3 col-lg-4 col-md-4 col-sm-5 h-100 w-responsive p-2 pl-3'>
                                  <h4 className='font-weight-bold pt-4 pb-4 p-2'>Фільтри</h4>
                                  <div className='filter filter-basic'>
                                      <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                          <p className='m-2 mb-3 font-weight-bold'>ВИД ПРОДУКЦІЇ</p>
                                          <MDBInput label='Шампуні' type='checkbox' id='shampoo' className='check-item'/>
                                          <MDBInput label='Кондиціонери' type='checkbox' id='conditioner' className='check-item'/>
                                          <MDBInput label='Маски' type='checkbox' id='mask' className='check-item'/>
                                          <MDBInput label='Гелі для душу' type='checkbox' id='gel' className='check-item'/>
                                          <MDBInput label='Молочко для тіла' type='checkbox' id='milk' className='check-item'/>
                                          <MDBInput label='Догляд за обличчям' type='checkbox' id='face' className='check-item'/>
                                          <MDBInput label='Фітокомплекси' type='checkbox' id='fito' className='check-item'/>
                                          <MDBInput label='Добра їжа' type='checkbox' id='food' className='check-item'/>
                                          <MDBInput label='Засоби для дому' type='checkbox' id='house' className='check-item'/>
                                          <MDBInput label='Догляд за дітьми' type='checkbox' id='child' className='check-item'/>
                                      </div>
                                      <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                          <p className='m-2 mb-3 font-weight-bold'>ТОРГОВА МАРКА</p>
                                          <MDBInput label='White Mandarin' type='checkbox' id='wm' className='check-item'/>
                                          <MDBInput label='Good Food' type='checkbox' id='gf' className='check-item'/>
                                          <MDBInput label='Green Max' type='checkbox' id='gm' className='check-item'/>
                                      </div>
                                      <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                          <p className='m-2 font-weight-bold'>СЕРІЯ</p>
                                          <MDBInput label='Медова' type='checkbox' id='honey' className='check-item'/>
                                          <MDBInput label='Цитрус' type='checkbox' id='citrus' className='check-item'/>
                                          <MDBInput label='Сакська глина' type='checkbox' id='glina' className='check-item'/>
                                          <MDBInput label='Цілющі трави' type='checkbox' id='grass' className='check-item'/>
                                          <MDBInput label='Lik' type='checkbox' id='lik' className='check-item'/>
                                          <MDBInput label='Дитяча серія' type='checkbox' id='child' className='check-item'/>
                                      </div>
                                      <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                          <p className='m-2 mb-3 font-weight-bold'>ПРИЗНАЧЕННЯ</p>
                                          <MDBInput label='Лікувальна косметика' type='checkbox' id='health' className='check-item'/>
                                          <MDBInput label='Лікування волосся' type='checkbox' id='health' className='check-item'/>
                                          <MDBInput label='Лікування із середини' type='checkbox' id='protection' className='check-item'/>
                                          <MDBInput label='Очищення домівки' type='checkbox' id='houseclean' className='check-item'/>
                                      </div>
                                      <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                                          <p className='m-2 mb-3 font-weight-bold'>КАТЕГОРІЯ</p>
                                          <MDBInput label='Для жінок' type='checkbox' id='female' className='check-item'/>
                                          <MDBInput label='Для дітей' type='checkbox' id='child' className='check-item'/>
                                          <MDBInput label='Для чоловіків' type='checkbox' id='male' className='check-item'/>
                                      </div>
                                  </div>
                              </MDBCol>

                              {/*products list*/}

                              <MDBCol className='col-xl-9 col-lg-8 col-md-8 col-sm-7 d-inline-block p-2 pl-xl-0  '>
                                  <div>
                                      <h4 className='text-center p-4 font-weight-bold'>Шампуні</h4>
                                      <MDBRow className='p-0 m-2 ml-0 border-0'>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/volosia/1.2.jpg')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'> ШАМПУНЬ ЯЄЧНИЙ, White Mandarin, Інтенсивне зволоження волосся, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>На основі яєчного масла, гідролізату кератину, олії вербени. Для сухого та пошкодженого волосся.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/volosia/IMG_2.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ШАМПУНЬ Серії Медова, White Mandarin, Живлення і зміцнення, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Містить у складі настоянку розмарину, олію авокаду та екстракт меду. Для всіх типів волосся.</p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/volosia/IMG_3.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'> ШАМПУНЬ Серії Цитрус, White Mandarin, Сяйво і блиск волосків, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>На основі води розмарину, олії макадамського горіха,олії грейпфрута. Для сухого та ламкого волосся.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/volosia/IMG_5.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ШАМПУНЬ серії Цілющі трави, White Mandarin, Зміцнення і ріст, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Містить екстракт пророщених зерен, вівса, пшениці, кукурузи, ячменю, дикого калгану, ладану. Для усіх типів волосся.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/volosia/IMG_7.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>МАСКА Серії Цілющі трави, White Mandarin, Сила і здоров'я, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>На основі житнього солоду, олії реп'яху, гірчиці, відвар бамбука. Для щоденного застосування.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/volosia/IMG_6.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>БАЛЬЗАМ Серії Цілющі трави, White Mandarin, Зволоження і зріст, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>На основі олії рисових висівок, екстракту шишок хмелю, гелю алое вера, олії маной де таїті. Для всіх типів волосся.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/volosia/IMG_4.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>БАЛЬЗАМ Серії Цитрус, White Mandarin, Відновлення і зріст, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>На основі настоянки гвоздики, олії зародків пшениці, олії ши. Ідеально для тонкого і ослабленого волосся.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/tilo/gel-medova.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ГЕЛЬ ДЛЯ ДУШУ Серії Медова, White Mandarin, М'яка і бархатиста шкіра, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>На основі олії макадамії, ефірної олії герані, меду. Ідеально використовувати кожного дня.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/tilo/gel-saksk.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ГЕЛЬ ДЛЯ ДУШУ Серії Сакська Глина, White Mandarin, Пружна і гладка шкіра, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Містить у складі біоль сакської грязі, олію авокадо, настоянку шавлії. Рекомендовано використовувати кожного дня.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/tilo/intim-citrus.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ГЕЛЬ ДЛЯ ІНТИМНОЇ ГІГІЄНИ Серії Цитрус, White Mandarin, Делікатний догляд, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>На основі алантоїну, настоянки гвоздики,ефірної олії лемонграсу. Ідеально на кожен день.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/tilo/milk-travi.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>МОЛОЧКО ДЛЯ РУК І ТІЛА Серії Цілющі трави, White Mandarin, М'ягка і бархатиста шкіра, 250ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Містить екстракт пророщених зерен, вівса, пшениці, кукурузи, ячменю, олії таману, гелю алое вера та олії ши.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/tilo/piling-med.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>СКРАБ ДЛЯ ТІЛА Серії Медова, White Mandarin, Еластичність і омолодження шкіри, 300ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для пом'якшення і живлення шкіри, еластичності та розгладження шкірного покрову. На основі натуральних масел.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/tilo/piling-saksk.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ПІЛІНГ ДЛЯ ТІЛА Сакська глина, White Mandarin, Еластичність і омолодження, 300ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Створений на основі Сакської глини видобутої із Сакського озера, насичений мінералами іла та солей із дна.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/tilo/scrub-tsitrus.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>СКРАБ ДЛЯ ТІЛА Серії Цитрус, White Mandarin, Еластичність і омолодження шкіри, 300ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Містить масло апельзина, який відновлює водний баланс усіх слоїв епітелія.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/1.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ФІТОМУС ДЛЯ ВМИВАННЯ Cерії LIK, Морські водорості, White Mandarin, 200ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Ніжне очищення шкіри обличчя пінкою із вмістом екстракту волошки, екстракт гамамелісу, календули та водоростей.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/2.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ФІТОТОНІК Серії LIK, Пророщені зерна, White Mandarin, Еластичність і омолодження шкіри, 200ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для чутливої та сухої шкіри обличчя, без спирту на основі екстракту бузини, екстракту арніки та води герані.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/3.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ГЕЛЬ-МУСС Серії Youth, White Mandarin, для проблемної  шкіри, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Позбавляє шкіру жирного блиску, запобігає виникненню висипань.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/4.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>МІЦЕЛЯРНИЙ ФЛЮЇД, White Mandarin, Очищення шкіри обличчя, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Натуральні міцели із бавовняної олії, для очищення, живлення та зволоження шкіри обличчя.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/5.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ТОНІК ЗАСПОКІЙЛИВИЙ Серії Youth, White Mandarin, Догляд за проблемною шкірою, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для зволоження шкіри та зменшення запальних процесів.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/6.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ПЕПТІДНИЙ ДЕННИЙ КРЕМ, Серії Пророщені зерна, White Mandarin, Активна регенерація, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для відновлення втомленої шкіри - Anti Age, містить масло манго, екстракт рожкового дерева, сок нони.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/7.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>НІЧНИЙ КРЕМ Серії Lik, White Mandarin, Відновлення шкіри, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для відновлення шкіри створений крем на основі натуральних компонентів.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/9.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ГЕЛЬ ЛІФТИНГ Серії Lik, White Mandarin, Для контура глаз та губ, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Зволоження із вмістом хітозану, кон'яка манан, екстраку манжетки.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/10.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>СИВОРОТКА Серії Lik, Морські водорості, White Mandarin, Вітамінний концентрат та Ліфтинг еффект, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Масло аргани, екстракт чорниці та шиповинки підтягують шкіру та збагачують вітамінами.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/11.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ПЕПТИДНА СИВОРОТКА Серії Lik, Пророщені зерна, White Mandarin, Інтенсивна регенерація, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>За регенерацію дбають масла буранчика, протеїни горошка та сну, пророщені зерна зернових.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/13.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ПЕПТИДНИЙ НІЧНИЙ КРЕМ Серії Lik, Пророщені зерна, White Mandarin, Активна регенерація, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Масло авокадо, екстракт софори, коензим Q10.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/14.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>КРЕМ МІКРОЕМУЛЬСІЯ Серії Lik, Пророщені зерна, White Mandarin, Активна регенерація, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для контура глаз та губ, містить масло камелії, коензим Q10, екстракт іглиці понтійської.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/15.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>МАСКА ГІДРОГЕЛЬ Серії Lik, White Mandarin, Ліфтинг ефект, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для усіх типів шкіри, зволоження та збагачення шкіри обличчя.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/16.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ПЕПТИДНА КРЕМ МАСКА Серії Lik, White Mandarin, Мультивітамінний коктель, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для усіх типів шкіри, містить масла, які регенерують шкіру.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/17.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>КРЕМ МАСКА ВІДБІЛЮЮЧА Серії Lik, White Mandarin, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Для усіх типів шкіри, служить для відбілювання та надання блиску шкірі обличчя.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/18.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>АЛЬГІНАТНА КРЕМ МАСКА Серії Lik, White Mandarin, Антистрес, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Швидко усуває сліди втоми та стресу, виводить токсини та мінералізує шкіру, містить пептиди проросших зерен, коензим Q10, хондроїтин.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/19.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>КРЕМ З МАТОВИМ ЕФЕКТОМ Серії youth, White Mandarin, Для проблемної шкіри, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Заспокоює шкіру та вирівнює тон обличчя.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/20.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>КРЕМ ГЛИБОКЕ ОЧИЩЕННЯ Серії Lik, White Mandarin, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Глибоко очищає пори та виздоровлює шкіру обличчя.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/litso/21.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>СИВОРОТКА АНТИ-АКНЕ, Серії Youth, White Mandarin, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Протизапальна та антимікробна сиворотка для проблемної шкіри.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/child/shampoo1.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ДИТЯЧА ШАМПУНЬ, Серії Дитяча, White Mandarin, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Шампунь та гель для душа для дітей без хімікатів та лише натуральній основі.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/child/protectcream5.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ЗАХИСНИЙ КРЕМ, Серії Дитяча, White Mandarin, Для захисту шкіри, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>На основі бджолиного воску, масло манго та масло какао ніжно та дбайливо захищає дитячу шкіру.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/child/bodymilk3.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>МОЛОЧКО ДЛЯ ТІЛА, Серії Дитяча, White Mandarin, Для захисту дитячої шкіри ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Протизапальна та антимікробна сиворотка для проблемної шкіри.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/greanmax/IMG_3295.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ЕКО КОНЦЕНТРАТ, Green Max, Для дбайливого прання, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Натуральний кисневмісний для відбілювання та виведення стійких забруднень, на основі дії активного кисню..
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/greanmax/IMG_3303.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ЕКО ЗАСІБ НАТУРАЛЬНИЙ ДЛЯ МИТТЯ ПОСУДУ, Green Max, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Концентрована формула із вмістом граната та грейпфрута, містить антибактеріальний комплекс, для миття овочів та фруктів.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/greanmax/IMG_3307.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ЕКО ЗАСІБ НАТУРАЛЬНИЙ ДЛЯ ОЧИЩЕННЯ ВАННОЇ КІМНАТИ, Green Max, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Створений на основі фруктових кислот, ідеально підходить для всіх видів поверхонь ванної кімнати.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                          <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                              <MDBCard className='border-0' >
                                                  <MDBLink
                                                      className='text-white text-center align-items-center p-0'>
                                                      <MDBCardImage
                                                          src={require('../../../Image/categories/greanmax/IMG_3314.JPG')}
                                                          className='img-fluid w-100 prod-img'
                                                          alt=''>
                                                      </MDBCardImage>
                                                      <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                          <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ЕКО МОЛОЧКО НАТУРАЛЬНЕ ДЛЯ ОЧИЩЕННЯ ПОВЕРХОНЬ, Green Max, ml</p>
                                                          <MDBLink
                                                              color='primary'
                                                              href='!#'
                                                              style={{marginBottom: '1rem'}}
                                                              className='text-left p-0 pb-0 mb-2'
                                                          >
                                                              <p className='prod-describe black-text m-0 '>Створений на основі натурального каоліну та мармурової пудри, містить антибактеріальний комплекс.
                                                              </p>
                                                          </MDBLink>
                                                          <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                          <div>
                                                              <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                          </div>
                                                      </MDBCardBody>
                                                  </MDBLink>
                                              </MDBCard>
                                          </MDBCol>
                                      </MDBRow>
                                  </div>
                                  <MDBPagination color='dark'>
                                      <MDBPageItem disabled>
                                          <MDBPageNav aria-label='Previous'>
                                              <span aria-hidden='true'>&laquo;</span>
                                              <span className='sr-only'>Previous</span>
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem active>
                                          <MDBPageNav>
                                              1 <span className='sr-only'>(current)</span>
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              2
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              3
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              4
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              5
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              &raquo;
                                          </MDBPageNav>
                                      </MDBPageItem>
                                  </MDBPagination>


                                  {/*products detail*/}

                                  <div className='container'>
                                      <div className='ml-4'>
                                          <MDBCard className='pt-3'>
                                              <button type="button" className="btn btn-link float-left w-100 border-danger"><MDBIcon icon="arrow-left" className='text-left float-left '/></button>
                                              <div className='d-inline w-100'>
                                                  <MDBCol sm='12' md='12' lg='12' xl='12' className='p-0 m-0'>
                                                      <div className='item-image p-1 m-0 p-2'>
                                                          <img className='item-img m-auto justify-content-center d-block' src={require('../../../Image/prod-categories/волосы/IMG_2473.JPG')} />
                                                      </div>
                                                  </MDBCol>
                                                  <MDBCol sm='12' lg='12' xl='12' className='p-2 m-0'>
                                                      <div className='item-description p-2'>
                                                          <h2>ProdName</h2>
                                                          <p className='font-weight-normal'>Артикул:<span className='item-articule font-weight-light'> 1234567</span></p>
                                                          <h6  className='font-weight-normal'>Вид товару: <span className='item-type font-weight-light'>Шампунь</span></h6>
                                                          <h6  className='font-weight-normal'>Виробник: <span className='item-brand font-weight-light'>ProfiStyle</span></h6>
                                                          <h6  className='font-weight-normal'>Об'єм: <span className='item-brand font-weight-light'>100</span>  ml</h6>
                                                          <h6  className='font-weight-normal'>Призначення: <span className='item-brand font-weight-light'>лікування пошкодженого волосся</span></h6>
                                                          <p className='item-text p-0 mb-2'>Опис:</p>
                                                          <p className='item-text p-0 font-weight-light'>Шампунь зроблена із найновітніших технологій поширених Шампунь зроблена із найновітніших технологій поширених ших технологій поширених зроблена із найновітніших технологій поширених ших технологій поширених</p>
                                                          <p className='p-0 mb-2 pt-2'>Склад:</p>
                                                          <p className='item-text p-0 font-weight-light'>найновітніших технологій поширених Шампунь зроблена із найновітніших</p>
                                                          <p className='item-present bg-white p-0 green-text m-0'><span className=' font-small'><i className="fas fa-check green-text font-weight-bolder p-2"></i>В НАЯВНОСТІ</span></p>
                                                          <p className='item-text p-0 mb-2 mt-3'>Ціна:</p>
                                                          <h3 className='price font-weight-normal mb-4'><span className='item-price'>1500</span> грн</h3>
                                                          <div className='d-inline-flex flex-wrap text-center'>
                                                                 <button className='float-left m-0 item-to-cart white-text border-0 z-depth-1 mb-5 mr-5'>В КОРЗИНУ</button>
                                                                 <button className='float-left m-0 item-to-cart white-text border-0 z-depth-1 mb-4'>КУПИТИ</button>
                                                          </div>
                                                      </div>
                                                  </MDBCol>
                                              </div>
                                          </MDBCard>
                                      </div>
                                  </div>
                                  <MDBContainer>
                                      <div className='ml-4'>
                                          <MDBNav pills className='item-pills'>
                                              <MDBNavItem className='w-25'>
                                                  <MDBNavLink
                                                      link
                                                      className='white-text font-weight-normal px-1 py-3 discription-link text-center'
                                                      to='#'
                                                      active={this.state.items['default'] === '1'}
                                                      onClick={this.togglePills('default', '1')}
                                                  >
                                                      ОПИС
                                                  </MDBNavLink>
                                              </MDBNavItem>
                                              <MDBNavItem className='w-25'>
                                                  <MDBNavLink
                                                      link
                                                      className='white-text font-weight-normal  px-1 py-3 discription-link text-center'
                                                      to='#'
                                                      active={this.state.items['default'] === '2'}
                                                      onClick={this.togglePills('default', '2')}
                                                  >
                                                      ДЕТАЛІ
                                                  </MDBNavLink>
                                              </MDBNavItem>
                                              <MDBNavItem className='w-25'>
                                                  <MDBNavLink
                                                      link
                                                      className='white-text font-weight-normal discription-link px-1 py-3 text-center'
                                                      to='#'
                                                      active={this.state.items['default'] === '3'}
                                                      onClick={this.togglePills('default', '3')}
                                                  >
                                                      СХОЖІ ТОВАРИ
                                                  </MDBNavLink>
                                              </MDBNavItem>
                                              <MDBNavItem className='w-25'>
                                                  <MDBNavLink
                                                      link
                                                      className='white-text font-weight-normal discription-link px-1 py-3 text-center'
                                                      to='#'
                                                      active={this.state.items['default'] === '4'}
                                                      onClick={this.togglePills('default', '4')}
                                                  >
                                                      ДОСТАВКА
                                                  </MDBNavLink>
                                              </MDBNavItem>
                                          </MDBNav>
                                          <MDBTabContent activeItem={this.state.items['default']} className='m-2'>
                                              <MDBTabPane tabId='1' className='mt-4'>
                                                  <p className='font-weight-bold'>
                                                      Детальний опис товару:
                                                  </p>
                                                  <div className='item-method-of-use'>

                                                  </div>
                                                  <p className='font-weight-bold'>
                                                      Склад:
                                                  </p>
                                                  <div className='item-about-makeup'>

                                                  </div>
                                                  <p className='font-weight-bold'>
                                                      Спосіб використання:
                                                  </p>
                                                  <div className='item-about-makeup'>

                                                  </div>
                                              </MDBTabPane>
                                              <MDBTabPane tabId='2'  className='mt-4'>
                                                  <MDBTable>
                                                      <MDBTableBody>
                                                          <tr>
                                                              <td>Артикул товару:</td>
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td>Назва товару:</td>
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td>Об'єм:</td>
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td>Тип товару:</td>
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td>Країна виробник:</td>
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td>Торгівельна марка:</td>
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td>Серія:</td>
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td>Призначення:</td>
                                                          </tr>
                                                          <tr>
                                                              <td>Категорія:</td>
                                                          </tr>
                                                      </MDBTableBody>
                                                  </MDBTable>
                                              </MDBTabPane>
                                              <MDBTabPane tabId='3' className='m-1'>
                                                  <MDBRow className='mt-4 p-0'>
                                                      <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                                          <MDBCard className='border-0' >
                                                              <MDBLink
                                                                  className='text-white text-center align-items-center p-0'>
                                                                  <MDBCardImage
                                                                      src={require('../../../Image/prod-categories/волосы/IMG_2473.JPG')}
                                                                      className='img-fluid w-100'
                                                                      alt=''>
                                                                  </MDBCardImage>
                                                                  <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                                      <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>БАЛЬЗАМ Серії Цілющі трави, White Mandarin, Відновлення і зріст, 250ml</p>
                                                                      <MDBLink
                                                                          color='primary'
                                                                          href='!#'
                                                                          style={{marginBottom: '1rem'}}
                                                                          className='text-left p-0 pb-0 mb-2'
                                                                      >
                                                                          <p className='prod-describe black-text m-0 '>На основі настоянки гвоздики, олії зародків пшениці, олії ши. Ідеально для тонкого і ослабленого волосся.
                                                                          </p>
                                                                      </MDBLink>
                                                                      <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                                      <div>
                                                                          <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                                      </div>
                                                                  </MDBCardBody>
                                                              </MDBLink>
                                                          </MDBCard>
                                                      </MDBCol>
                                                      <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                                          <MDBCard className='border-0' >
                                                              <MDBLink
                                                                  className='text-white text-center align-items-center p-0'>
                                                                  <MDBCardImage
                                                                      src={require('../../../Image/prod-categories/волосы/IMG_2473.JPG')}
                                                                      className='img-fluid w-100'
                                                                      alt=''>
                                                                  </MDBCardImage>
                                                                  <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                                      <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'> ШАМПУНЬ Серії Цитрус, White Mandarin, Сяйво і блиск волосків, 250ml</p>
                                                                      <MDBLink
                                                                          color='primary'
                                                                          href='!#'
                                                                          style={{marginBottom: '1rem'}}
                                                                          className='text-left p-0 pb-0 mb-2'
                                                                      >
                                                                          <p className='prod-describe black-text m-0 '>На основі води розмарину, олії макадамського горіха,олії грейпфрута. Для сухого та ламкого волосся.
                                                                          </p>
                                                                      </MDBLink>
                                                                      <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                                      <div>
                                                                          <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                                      </div>
                                                                  </MDBCardBody>
                                                              </MDBLink>
                                                          </MDBCard>
                                                      </MDBCol>
                                                      <MDBCol lg='6' md='6' xl='4' className='pb-5 p-2' >
                                                          <MDBCard className='border-0' >
                                                              <MDBLink
                                                                  className='text-white text-center align-items-center p-0'>
                                                                  <MDBCardImage
                                                                      src={require('../../../Image/prod-categories/волосы/IMG_2473.JPG')}
                                                                      className='img-fluid w-100'
                                                                      alt=''>
                                                                  </MDBCardImage>
                                                                  <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                                      <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'>ГЕЛЬ ДЛЯ ІНТИМНОЇ ГІГІЄНИ Серії Цитрус, White Mandarin, Делікатний догляд, 250ml</p>
                                                                      <MDBLink
                                                                          color='primary'
                                                                          href='!#'
                                                                          style={{marginBottom: '1rem'}}
                                                                          className='text-left p-0 pb-0 mb-2'
                                                                      >
                                                                          <p className='prod-describe black-text m-0 '>На основі алантоїну, настоянки гвоздики,ефірної олії лемонграсу. Ідеально на кожен день.
                                                                          </p>
                                                                      </MDBLink>
                                                                      <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн</p>
                                                                      <div>
                                                                          <button className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В КОРЗИНУ</button>
                                                                      </div>
                                                                  </MDBCardBody>
                                                              </MDBLink>
                                                          </MDBCard>
                                                      </MDBCol>
                                                  </MDBRow>
                                              </MDBTabPane>
                                              <MDBTabPane tabId='4'  className='mt-4 m-1'>
                                                  <p className='font-weight-bold'>
                                                      Доставка
                                                  </p>
                                                  <MDBTable>
                                                      <MDBTableBody>
                                                          <p className='pl-0 w-100'>Відправлення товарів відбувається одразу ж після отримання замовлення.</p>
                                                          <tr>
                                                              <td><a href='#'>Самовивіз із салону ІВОН (вул. Данченко 32)</a></td>
                                                              <td className='text-green'>Безкоштовно</td>
                                                          </tr>
                                                          <tr>
                                                              <td><a href='https://novaposhta.ua/'>Самовивіз із НОВОЇ ПОШТИ</a></td>
                                                              <td className='text-green'>Безкоштовно</td>
                                                          </tr>
                                                          <tr>
                                                              <td><a href='www.ukrposhta.ua'>Самовивіз із УКРПОШТИ</a></td>
                                                              <td className='text-green'>Безкоштовно</td>
                                                          </tr>
                                                          <tr>
                                                              <td><a href='#'>Доставка кур'єром (м. Київ)</a></td>
                                                              <td className='text-green'>50 грн</td>
                                                          </tr>
                                                      </MDBTableBody>
                                                  </MDBTable>
                                                  <p className='font-weight-bold'>
                                                      Оплата
                                                  </p>
                                                  <p className='pl-0'>Оплата товарів відбувається  через передплату на карту Приват Банка, також наложеним платежем</p>
                                                  <div className='item-payment mb-5'>
                                                      <p>
                                                          <a href='https://www.privat24.ua/' className='font-weight-bold black-text'>
                                                              <span><img className='item-payment-img pr-3' src={require('../../../Image/shipment/privat.png')} /></span>
                                                              PRIVAT 24
                                                          </a>
                                                      </p>
                                                      <p>
                                                          <a href='https://www.visa.com.ua/uk_UA' className='font-weight-bold black-text'>
                                                              <span><img className='item-payment-img pr-3' src={require('../../../Image/shipment/Visa.jpg')}/></span>
                                                              VISA
                                                          </a>
                                                      </p>
                                                      <p>
                                                          <a href='https://www.mastercard.ua/uk-ua.html' className='font-weight-bold black-text'>
                                                              <span><img className='item-payment-img pr-3' src={require('../../../Image/shipment/MasterCard.png')} /></span>
                                                              MASTERCARD
                                                          </a>
                                                      </p>
                                                      <p>
                                                          <a href='https://www.liqpay.ua/uk' className='font-weight-bold black-text'>
                                                              <span><img className='item-payment-img pr-3' src={require('../../../Image/shipment/liqpay.png')} /></span>
                                                              LIQPAY
                                                          </a>
                                                      </p>
                                                  </div>
                                                  <p className='font-weight-bold'>
                                                      Гарантія
                                                  </p>
                                                  <div>
                                                      <span className='font-weight-bold'>Повернення замовлених товарів неможливе згідно із Законом України 'Про захист справ споживачів'.</span>
                                                      (Відповідно до Постанови Кабінету Міністрів України від 19 березня 1994 р. № 172 "Про реалізацію окремих положень Закону України "Про захист прав споживачів", затверджено перелік товарів належної якості, що не підлягають обміну (поверненню): Парфюмерно-косметичні вироби. )
                                                  </div>
                                              </MDBTabPane>
                                          </MDBTabContent>
                                      </div>
                                  </MDBContainer>
                              </MDBCol>
                          </MDBRow>
                      </div>
                  </div>
              </div>
        )
    }
}

export default Products;