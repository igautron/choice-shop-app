import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBLink,
    MDBTable,
    MDBTableHead,
    MDBCard, MDBCardImage, MDBCardBody
} from 'mdbreact';

import './Profile.scss'
import {Link} from "react-router-dom";
import Autorization from './../AUTORIZATION/Autorization'

class Profile extends Component {

    state = {
        tabIndex: '1',
        changePasswordError: '',
        passwordInputs:{
            old:'',
            new:'',
            confirm:'',
        },
        items: {
            content: ''
        }
    }

    togglePills = tab => () => {
        const { activePills } = this.state;
        if (activePills !== tab) {
            this.setState({
                tabIndex: tab
            });
        }
    };

    componentDidMount() { // получение данных с сервера
        console.log(this.props)
        this.setState({user:this.props.appState.user});
    }

    componentDidUpdate(prevProps) { // получение новых пропсов
        if(prevProps.tabIndex !== this.props.tabIndex){
            let items = { ...this.state.items };
            items.content = this.props.tabIndex
            this.setState({items});
        }
    }

    changeInputHandler = (event) => {
        let userData = {...this.props.appState.user}
        userData[event.target.name] = event.target.value
        this.props.setUserData({user: userData})
    }

    changeInputHandler = (event) => {
        let userData = {...this.props.appState.user}
        userData[event.target.name] = event.target.value
        this.props.setUserData({user: userData})
    }

    changePasswordInputHandler = (event) => {
        let passwordInputs = {...this.state.passwordInputs}
        passwordInputs[event.target.name] = event.target.value
        this.setState({passwordInputs})
    }


    saveUserData = () => {
        this.setState({alertTab1: ''})
        fetch('http://choice-server.loc/api/userUpdate', {
            method: 'POST', // или 'PUT'
            // body: new URLSearchParams(this.props.appState.user).toString(),
            body: JSON.stringify(this.props.appState.user),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.props.appState.token
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.success && data.success === 'ok') {
                this.setState({alertTab1: 'Данные успешно сохранены'})
                localStorage.setItem('user', JSON.stringify(data.user)); // объект user преобразовуем в строку (JSON.stringify)
            }else{
                this.setState({alertTab1: 'Error!'})
            }
        });
    }

    changePassword = () => {
        fetch('http://choice-server.loc/api/changePassword', {
            method: 'POST', // или 'PUT'
            // body: new URLSearchParams(this.props.appState.user).toString(),
            body: JSON.stringify(this.state.passwordInputs),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.props.appState.token
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.success && data.success === 'ok') {
                this.setState({passwordInputs:{old:'',new:'',confirm:''}})
                this.setState({changePasswordError:'Success'})
            }else{
                this.setState({changePasswordError:data.message})
            }
        });
    }


    render() {
        let tabIndex = this.state.items.content || this.props.tabIndex || '1'
        let user = this.props.appState.user
        if (!user) {
            return (
                <React.Fragment>
                    <h1>Вы не авторизованы!</h1>
                    <div style={{'max-width': '350px', margin: 'auto'}}>
                        <Autorization changeModalBody={() => {
                        }}
                                      loginModalToggle={() => {
                                      }}
                                      appState={this.props.appState}
                                      setUserData={this.props.setUserData}/>
                    </div>
                </React.Fragment>
            )
            return (
                <div className='container py-2'>
                    <h2 className="h2-responsive font-weight-bold text-center pt-5 pb-3 about-text">
                        Особиста сторінка
                    </h2>
                    <MDBRow className='w-100 justify-content-center m-0'>
                        <MDBCol md='12' className='col p-0'>
                            <MDBContainer header='Basic example'>
                                <MDBNav className='nav-pills m-auto justify-content-center'>
                                    <MDBNavItem className='mx-3 my-5'>
                                        <MDBNavLink className='btn-outline-light-green btn-pills font-weight-bold' to='#'
                                                 active={tabIndex === '1'} onClick={this.togglePills("content", '1')} link>
                                            Профіль
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className='m-3 my-5'>
                                        <MDBNavLink className='btn-outline-light-green btn-pills font-weight-normal' to='#'
                                                 active={tabIndex === '2'} onClick={this.togglePills("content", "2")} link>
                                            Замовлення
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className='m-3 my-5'>
                                        <MDBNavLink className='btn-outline-light-green btn-pills font-weight-normal' to='#'
                                                 active={tabIndex === '3'} onClick={this.togglePills("content", '3')} link>
                                            Сподобалось
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNav>
                                <MDBTabContent activeItem={tabIndex}>
                                    <MDBTabPane tabId='1' className='p-2 '>
                                        <p>
                                            <div className='container border-light'>
                                                <div className='d-inline-flex flex-wrap w-100 '>
                                                    <div
                                                        className="border-light col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 text-center p-xl-5 p-lg-5 p-lg-5 p-md-5 p-sm-5 p-3 px-5"
                                                        action="#!">
                                                        <p>Інформація профілю</p>
                                                        <div>
                                                            <MDBTable>
                                                                <MDBTableHead>
                                                                    <tr>
                                                                        <th>Ім'я</th>
                                                                        <td>Яна</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Фамілія</th>
                                                                        <td>Кеух</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Ел.адреса</th>
                                                                        <td>ianagautron@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Телефон</th>
                                                                        <td>+380671088799</td>
                                                                    </tr>
                                                                </MDBTableHead>
                                                            </MDBTable>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className='col-12 col-xl-7 col-lg-7 col-md-6 col-sm-12 text-center'>
                                                        <div
                                                            className="text-center border border-light  p-xl-5 p-lg-5 p-lg-5 p-md-5 p-sm-5 p-5"
                                                            action="#!">
                                                            <p className='pb-3'>Внести зміни</p>
                                                            <div className='image'></div>
                                                            <input onChange={this.changeInputHandler} value={user.name} type="text" className="form-control mb-4" placeholder="Ім'я"/>
                                                            <input onChange={this.changeInputHandler} value={user.thirname} type="text" className="form-control mb-4" placeholder="Фамілія"/>
                                                            <input onChange={this.changeInputHandler} value={user.email} type="email" className="form-control mb-4" placeholder="Електронна пошта"/>
                                                            <input onChange={this.changeInputHandler} value={user.phone} type="text" className="form-control mb-4" placeholder="Номер телефону" aria-describedby="defaultRegisterFormPhoneHelpBlock"/>
                                                            <input type="checkbox" className="custom-control-input"/>
                                                                <input onChange={this.changePasswordInputHandler} name="old" value={this.state.passwordInputs.old} type="password" className="form-control " placeholder="Старий пароль" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                                                                <input onChange={this.changePasswordInputHandler} name="new" value={this.state.passwordInputs.new} type="password" className="form-control " placeholder="Новий пароль" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                                                                <input onChange={this.changePasswordInputHandler} name="confirm" value={this.state.passwordInputs.confirm} type="password" className="form-control " placeholder="Новий пароль" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
                                                            <button onClick={this.changePassword} className='bg-transparent border-0 m-2'>Змінити пароль</button>
                                                            <small id="defaultRegisterFormPasswordHelpBlock"
                                                                   className="form-text text-muted mb-4">
                                                                Щонайменше 8 літер латиницею
                                                            </small>
                                                            <button onClick={this.saveUserData}
                                                                    className="btn btn-light-green mb-2 w-100"
                                                                    type="submit">ЗБЕРЕГТИ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </p>
                                    </MDBTabPane>
                                    <MDBTabPane tabId='2' className='p-2'>
                                        <p>
                                            <form className='text-center border border-light p-5' action="#!">
                                                <div>
                                                    <MDBRow
                                                        className="form-input d-inline-flex flex-sm-wrap-reverse flex-wrap w-100 py-1 w-responsive">
                                                        <MDBCol className='col-2 p-0'>
                                                            <img
                                                                src={require('./../../Image/categories/volosia/IMG_4.JPG')}
                                                                className="img-fluid w-100" alt="Responsive image"/>
                                                        </MDBCol>
                                                        <MDBCol
                                                            className='col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 py-2 font-smaller px-xl-3 px-lg-3 px-md-3 px-sm-2'>
                                                            <p className='order-item w-100'>Назва товару(Для 2х строк).
                                                                Інформація із баз данних, яка потрапляє у це віконце</p>
                                                        </MDBCol>
                                                        <MDBCol className='col-2 px-0 py-3 mx-0 w-25'>
                                                            <form>
                                                                <input className='input-profile' type='number' min='1'
                                                                       value='1'></input>
                                                            </form>
                                                        </MDBCol>
                                                        <MDBCol className='col-2 p-0 mx-0'>
                                                            <p className='price px-lg-2 px-xl-2 px-md-2 px-sm-0 px-0 py-3'>1500<span>грн</span>
                                                            </p>
                                                        </MDBCol>
                                                        <MDBCol className='col-1 p-1 py-2'>
                                                            <button type="button"
                                                                    className="btn btn-x px-xl-4 px-lg-4 px-md-4 px-sm-3 px-2  py-2 m-0 text-center bg-transparent border-0 z-depth-0">
                                                                <i className="fas fa-times mr-2"></i>
                                                            </button>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </div>
                                                <div className='d-inline-flex w-100'>
                                                    <div className='w-50 float-left'>
                                                        <p className='payment align-content-center text-left font-weight-bold font-weight-bold py-2 my-4'>До
                                                            сплати: <span>1500</span> грн</p>
                                                    </div>
                                                    <div className='w-50 float-right m-0'>
                                                        <Link to='/Order'>
                                                            <button
                                                                className="btn btn-profile btn-light-green w-100 my-4 m-0"
                                                                type="submit">ПРИДБАТИ
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </p>
                                    </MDBTabPane>
                                    <MDBTabPane tabId='3' className='p-2'>
                                        <p>
                                            <MDBCol lg='3' md='3' xl='3' className='pb-5 p-2'>
                                                <MDBCard className='border-0'>
                                                    <MDBLink
                                                        className='text-white text-center align-items-center p-0'>
                                                        <MDBCardImage
                                                            src={require('../../Image/categories/volosia/1.2.jpg')}
                                                            className='img-fluid w-100 prod-img'
                                                            alt=''>
                                                        </MDBCardImage>
                                                        <MDBCardBody className='w-responsive w-100 m-0 p-0 '>
                                                            <p className='prod-name text-left font-weight-bold pl-0 pb-0 mb-2 mt-3 w-100'> ШАМПУНЬ
                                                                ЯЄЧНИЙ, White Mandarin, Інтенсивне зволоження волосся,
                                                                250ml</p>
                                                            <MDBLink
                                                                color='primary'
                                                                href='!#'
                                                                style={{marginBottom: '1rem'}}
                                                                className='text-left p-0 pb-0 mb-2'
                                                            >
                                                                <p className='prod-describe black-text m-0 '>На основі
                                                                    яєчного масла, гідролізату кератину, олії вербени.
                                                                    Для сухого та пошкодженого волосся.
                                                                </p>
                                                            </MDBLink>
                                                            <p className='prod-price black-text py-1 text-left'>Ціна: <span>100 </span>грн
                                                            </p>
                                                            <div>
                                                                <button
                                                                    className='prod-btn white-text z-depth-1 p-2 border-0 justify-content-center m-0 align-content-center'>В
                                                                    КОРЗИНУ
                                                                </button>
                                                            </div>
                                                        </MDBCardBody>
                                                    </MDBLink>
                                                </MDBCard>
                                            </MDBCol>
                                        </p>
                                    </MDBTabPane>
                                </MDBTabContent>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </div>
            );
        }
    }
}

export default Profile;