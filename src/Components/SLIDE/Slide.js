import React from 'react';
import {Component} from 'react';
import './Slide.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";

class Slide extends React.Component  {
    render() {
        return (
        <div>
                <MDBCarousel
                    activeItem={1}
                    length={6}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-3 w-100 slider"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block h-100 w-100"
                                    src={require('../../Image/slider/slider6.png')}
                                    alt="First slide"
                                />
                                <MDBMask overlay="light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive font-weight-bold slide-text pink-ic">НАТУРАЛЬНІ КОСМЕТИЧНІ ЗАСОБИ</h3>
                                <p className="font-weight-bold slide-info pink-ic">Від української компанії CHOICE</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block h-100 w-100"
                                    src={require('../../Image/slider/slider10.png')}
                                    alt="Second slide"
                                />
                                <MDBMask overlay="light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive font-weight-bold slide-text">ШИРОКИЙ АСОРТИМЕНТ ТОВАРІВ ДЛЯ КРАСИ</h3>
                                <p className="font-weight-bold slide-info">Торгова марка White Mandarin випускає унікальні засоби</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block h-100 w-100"
                                    src={require('../../Image/slider/pano4.jpg')}
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive font-weight-bold slide-text">ЛИШЕ НАТУРАЛЬНІ КОМПОНЕНТИ</h3>
                                <p className="font-weight-bold slide-info">Ніяких сульфатів, барвників та консервантів</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                            <MDBView>
                                <img
                                    className="d-block h-100 w-100"
                                    src={require('../../Image/slider/pano3.jpg')}
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive font-weight-bold slide-text">СКРАБИ ТА ПІЛІНГИ ДЛЯ ТІЛА</h3>
                                <p className="font-weight-bold slide-info">На основі натуральних олій та масел</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="5">
                            <MDBView>
                                <img
                                    className="d-block h-100 w-100"
                                    src={require('../../Image/slider/slide3234.jpg')}
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive font-weight-bold slide-text">УНІКАЛЬНИЙ СКЛАД ПРОДУКЦІЇ</h3>
                                <p className="font-weight-bold slide-info">Запатентоване виробництво міжнародного рівня</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="6">
                            <MDBView>
                                <img
                                    className="d-block h-100 w-100"
                                    src={require('../../Image/slider/pano1356.jpg')}
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive font-weight-bold slide-text">ПОДАРУНКИ ДЛЯ ТЕБЕ ТА БЛИЗЬКИХ</h3>
                                <p className="font-weight-bold slide-info">Ідеальне рішення для будь-якого свята</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
        </div>
        )
    }
}

export default Slide;