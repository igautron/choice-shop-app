import React from 'react';
import {Component} from 'react';
import './Info.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';

import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage} from "mdbreact";

class Info extends React.Component  {
    render() {
        return (
            <div className='w-100 container-info'>
                <div className='container justify-content-center m-auto'>
                    <div className='d-inline-flex flex-wrap w-100'>
                        <MDBCol className='col-6 col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                            <img className='w-100 m-5 z-depth-3' src={require('../../Image/logo/1014085.jpeg')} />
                        </MDBCol>
                        <MDBCol className='col-6 col-xl-7 col-lg-7 col-md-7 col-sm-7 p-5'>
                            <h1 className='text-white font-weight-bold text-left pl-4'> У складі продукції містяться унікальні компоненти  <span className='green-ic'><br/> - проросші зерна 5-ти злаків:</span><br/>
                            Просо, пшоно, овес ...
                            </h1>
                        </MDBCol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;




