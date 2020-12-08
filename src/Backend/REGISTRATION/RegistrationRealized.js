import React from 'react';
import {Component} from 'react';
import './Registration.scss'


import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage} from "mdbreact";

class RegistrationRealized extends React.Component  {
    render() {
        return (
            <div>
                <div className='w-100 my-5'>
                    <div className='container justify-content-center m-auto py-5 my-5'>
                        <h5 className='text-center p-3 font-weight-bold'>Дякуємо за реєстрацію!</h5>
                        <h5 className='text-center w-75 justify-content-center m-auto py-3'>Для підтвердження реєстрації перевірте будь-ласка електронну адресу та перейдіть за посиланням!</h5>
                        <h5 className='text-center p-3 font-weight-bold'>Щясливих вам покупок!</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationRealized;