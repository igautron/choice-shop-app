import React from 'react';
import {Component} from 'react';
import './Autorization.scss'
import './../../Components/NAV/elements.css'
import axios from "axios";

import {Link} from 'react-router-dom'

import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage, MDBModalBody, MDBModal} from "mdbreact";


function getCsrf(form) {
	const url = 'http://choice-server.loc/sanctum/csrf-cookie'; // урл UserController->login

	// получение данных с сервера
	axios.get('http://choice-server.loc/sanctum/csrf-cookie').then(response => {
		axios.post('http://choice-server.loc/api/login', form)
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	})
}


function doLogin(_this){
	// getCsrf(_this.state.form)
	// return;
	const url = 'http://choice-server.loc/api/login'; // урл UserController->login

	// получение данных с сервера
	fetch(url, {
		method: 'POST', // или 'PUT'
		// mode: 'cors', // no-cors, *cors, same-origin
		// credentials: 'include',
		// redirect: 'follow',
		// body: new URLSearchParams(_this.state.form).toString(), // отправляем данные из формы
		body: JSON.stringify(_this.state.form),
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
			//'X-XSRF-TOKEN': 'eyJpdiI6IlFHemkyT2FBVWY5Ym44ODd5TTB3eWc9PSIsInZhbHVlIjoidFJUSjU1SWtnU3ZsOEQ5aVM4bHRDUDVTWDVUY2FxUUNYVU4rczNQY3pscTQwd1pFeUxDZU02NHlzSkNZTzRwNzNJRnQ2S21MUVZrdEFaSWh4d0FSZ0RzT2NjWDdTNWdBVWFEOWhiTXZnZEFBYU1hMXZIWXlaUWppMUlHVGN4VFEiLCJtYWMiOiI3ZjkzYjBlMGE1MjMzOWU4MTIwOWViYTA4OGU0MzU2OTI4ZWFkZWJjMDYzZmM0YjA2M2Q5MjExZGQ0MmI0MTVhIn0%3D',
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
			email: 'Введіть пошту',
			password: 'Введіть пароль',
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
						<form className='text-center border border-light py-5 px-3 px-sm-5' action="#!">
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
											<button onClick={this.loginSubmit} className="btn my-4" type="button">Авторизація</button>
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