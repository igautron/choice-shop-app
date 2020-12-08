import React from 'react';
import {Component} from 'react';
import './Autorization.scss'
import './../../Components/NAV/elements.css'

import {Link} from 'react-router-dom'

import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage, MDBModalBody, MDBModal} from "mdbreact";


function doLogin(_this){
    const url = 'http://choice-server.loc/api/login'; // урл UserController->login

    // получение данных с сервера
    fetch(url, {
        method: 'POST', // или 'PUT'
        body: new URLSearchParams(_this.state.form).toString(), // отправляем данные из формы
        headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        if(data.success === 'ok') {
            _this.setState({alert:''}) // очищаем alert
            localStorage.setItem('token', data.token); // сохраняем данные в localStorage
            localStorage.setItem('user', JSON.stringify(data.user)); // объект user преобразовуем в строку (JSON.stringify)
            _this.props.setUserData(data) // сохраняем данные в App.state
            _this.props.loginModalToggle() // скрываем модальное окно
        }else{
            _this.setState({alert:'Неверный логин или пароль'}) // выводим сообщение об ошибке
        }
    });
}


class Autorization extends React.Component  {

    state = {
        form: {
            email: 'kluettgen@example.com',
            password: 'password',
            device_name: 'chrome'
        },
        alert: '',
    }



    changeEmailHandler = (event) => {
        let formData = {...this.state.form}
        formData.email = event.target.value
        this.setState({form: formData})
    }

    changePasswordHandler = (event) => {
        let formData = {...this.state.form}
        formData.password = event.target.value
        this.setState({form: formData})
    }

    loginSubmit = () => {
        doLogin(this)
    }


    goToRegistration = () => {
        // cl('registration')
        this.props.changeModalBody('registration')
    }

    render() {
        return (
            <div>
                <div className='z-index-5 autorization m-0 p-0'>
                    <div className='card justify-content-center m-0'>
                        <form className='text-center border border-light p-5' action="#!">
                            <p style={{color:'red'}}>
                                {this.state.alert}
                            </p>
                                    <input onChange={this.changeEmailHandler} value={this.state.form.email} type='email' className="form-control mb-4" placeholder="Електронна пошта" />
                                    <input onChange={this.changePasswordHandler} value={this.state.form.password}type='password' className="form-control mb-4" placeholder="Пароль" />
                                    <div className="d-flex justify-content-around">
                                        <div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                                <label className="custom-control-label py-1" htmlFor="defaultLoginFormRemember">Запам'ятати мене</label>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='/forgotPassword'>
                                                <a href="" className='py-1'>Забули пароль?</a>
                                            </Link>
                                        </div>
                                    </div>
                                            <button onClick={this.loginSubmit} className="btn my-4" type="submit">Авторизація</button>
                                        <p>Ще не зареєстровані?
                                            <a href="" className='pl-3' onClick={this.goToRegistration} >Зареєструватись</a>
                                        </p>
                           </form>
                    </div>
                </div>
               </div>
        )
    }
}

export default Autorization;