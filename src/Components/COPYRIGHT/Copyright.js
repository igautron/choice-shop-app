import React from 'react';
import {Component} from 'react';
import './Copyright.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {MDBCol, MDBRow} from "mdbreact";


class Copyright extends React.Component  {
    render() {
        return (
            <div className='container-cr my-0'>
                <div className='justify-content-center m-auto py-0'>
                    <p className='text-center m-0 py-3 font-weight-bold'>Інтернет-магазин Choice. Усі права захищені. </p>
                </div>
            </div>
        )
    }
}

export default Copyright;