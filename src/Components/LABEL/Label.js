import React from 'react';
import {Component} from 'react';
import './Label.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';

import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage} from "mdbreact";

class Info extends React.Component  {
    render() {
        return (
            <div className='w-100 container-label'>
                <div className='container justify-content-center m-auto'>
                    <div className='d-inline-flex flex-wrap w-100 pl-0'>
                        <MDBCol className='label-col col-3 p-0 py-4 py-sm-5'>
                            <img src={require('./../../Image/logo/unnamed.png')} className='w-100 px-1'/>
                        </MDBCol>
                        <MDBCol className='label-col col-3 p-0 py-4 py-sm-5'>
                            <img src={require('./../../Image/logo/origin_28.png')} className='w-100 px-1'/>
                        </MDBCol>
                        <MDBCol className='label-col col-3 p-0 py-4 py-sm-5'>
                            <img src={require('./../../Image/logo/GoodFoodLogoNew2015_final_round-1-300x300.png')} className='w-100 px-1'/>
                        </MDBCol>
                        <MDBCol className='label-col col-3 p-0 py-4 py-sm-5'>
                            <img src={require('./../../Image/logo/Daco_4500042.png')} className='w-100 px-1'/>
                        </MDBCol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;


