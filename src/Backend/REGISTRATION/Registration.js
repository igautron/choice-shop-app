import React from 'react';
import {Component} from 'react';
import './Registration.scss'

import {Link} from 'react-router-dom'

import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage} from "mdbreact";

function fetchRegister(_this){
    const url = 'http://choice-server.loc/api/register';

    fetch(url, {
        method: 'POST', // или 'PUT'
        body: new URLSearchParams(_this.state.form).toString(), // данные могут быть 'строкой' или {объектом}!
        headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if(data.success === 'ok') {
            _this.setState({alert:''})
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            _this.props.changeModalBody('successRgistration')
        }else{
            _this.setState({alert:'Неверный логин или пароль'})
            if(data.errors) _this.setState({errors: _this.getErrorsList(data.errors)})
        }
    });
}




class Registration extends React.Component  {

     state= {
         form: {
             name: '',
             last_name: '',
             email: '',
             password: '',
             password_confirmation: 'password',
             phone: ''
         },
         alert: '',
         errors: [],
     }

    goToAuthorization = () => {
        this.props.changeModalBody('authorization')
    }

    changeInputHandler = (event) => {
         let formData = {...this.state.form}
         formData[event.target.name] = event.target.value
        this.setState({form: formData})
    }

    registerSubmit = () => {
        fetchRegister(this)
    }

    getErrorsList = (errors) => {
        let errorsList = []
        for(let error in errors){
            errorsList.push(errors[error])
        }
        return errorsList
    }

    render() {
        return (
            <div>
                <div className='w-100 position-absolute z-index-5 registration'>
                    <div className='card justify-content-center m-auto'>
                        <h5 className='card-header white-text text-center py-4'>
                            <strong>Реєстрація</strong>
                        </h5>
                        <form className="text-center border border-light p-5" action="#!">
                            <div className="form-row mb-4">
                                <div className="col">
                                    <input onChange={this.changeInputHandler} value={this.state.value.name} type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Ім'я" />
                                </div>
                                <div className="col">
                                    <input onChange={this.changeInputHandler} value={this.state.value.last_name}type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Фамілія" />
                                </div>
                             </div>
                             <input onChange={this.changeInputHandler} value={this.state.value.email} type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="Електронна пошта" />
                             <input onChange={this.changeInputHandler} value={this.state.value.phone} type="text" id="defaultRegisterPhonePassword" className="form-control mb-4" placeholder="Номер телефону" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
                             <input  type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
                             <input onChange={this.changeInputHandler} value={this.state.value.password} type="password" id="defaultRegisterFormPassword" className="form-control " placeholder="Пароль" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                             <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                 Щонайменше 8 літер латиницею
                             </small>
                            <a href='#' onClick={this.goToAuthorization} className='p-2 m-0 text-left w-100' >
                                Авторизуватися
                            </a>
                                <button onClick={this.registerSubmit} className="btn mb-2" type="submit">Реєстрація</button>
                                     <p className='mb-0'>В той час як ви натискаєте на<em> Реєстрація </em>, ви погоджуєтесь із
                                           <a href="" target="_blank"> політикою конфіденційності</a>
                                     </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;