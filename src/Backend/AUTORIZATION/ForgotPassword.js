import React from 'react';
import {Component} from 'react';
import './Autorization.scss'

import {Link} from 'react-router-dom'


import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage} from "mdbreact";

class ForgotPassword extends React.Component  {
    render() {
        return (
            <div>
                <div className='w-100 h-100 position-absolute z-index-5 autorization'>
                    <div className='card justify-content-center m-auto'>
                        <h5 className='card-header white-text text-center py-4'>
                            <strong>Відновлення паролю</strong>
                        </h5>
                        <form className='text-center border border-light p-5' action="#!">
                            <p className='text-left'>Для відновлення паролю введіть будь-ласка електронну адресу</p>
                            <input type='email' className="form-control mb-4" placeholder="Електронна пошта" />
                            <button className="btn mb-4 mt-0" type="submit">Відправити</button>
                            <p>Ще не зареєстровані?
                                <Link to='./registration'><a href="" className='pl-3'>Зареєструватись</a></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;