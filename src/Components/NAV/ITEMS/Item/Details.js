import {
    MDBCol,
    MDBIcon,
    MDBNav,
    MDBNavItem,
    MDBNavLink, MDBRow,
    MDBTabContent, MDBTable, MDBTableBody,
    MDBTabPane
} from "mdbreact";
import React from "react";

import './../Details.scss'

import Item from '../../ITEMS/Item/Item';
import Lightbox from "react-image-lightbox";



class Details extends React.Component {
    state = {
        collapseID: '',
        value: 0,
        items: {
            default: '1',
        },

        product:{
            image: '',
            articul: '',
            title: '',
            kind: '',
            brand: '',
            amount: '',
            appointment: '',
            type: '',
            descr2: '',
            components: '',
            price: '',
            descr3: '',
            composition: '',
            sposib: '',
        },

        gender_arr: 'defaul!!!'
    }


    togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = { ...this.state.items };
            items[type] = tab;
            this.setState({
                items
            });
        }
    };


    decrease = () => {
        this.setState ({value: this.state.value - 1 })
    }

    increase = () => {
        this.setState ({value: this.state.value + 1 })
    }

    componentDidMount(props) {
        const itemId = window.location.pathname.split('/').pop()
        fetch('http://yvonne-server.loc/products/'+itemId)
            .then(response => response.json())
            .then(product => {
              this.setState({product: product.data})
              this.get_appo(product.data)
            })

        const data = {
            "status": "ok",
            "product": {
                "image": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "articul": "vwebertbtml",
                "title": "super product 1",
                "kind": "vwebertbtml",
                "brand": "Davines",
                "amount": "vwebertbtml",
                "appointment": "vwebertbtml",
                "type": "Шампунь",
                "descr2": "vwebertbtml",
                "components": "vwebertbtml",
                "price":"11.99",
                "gender": "vwebertbtml",
                "composition": "vwebertbtml",
                "sposib": "vwebertbtml",

            },
        };
        this.setState({product: data.product});
    }



    get_appo(product) {
        let gender_app = []
        if(product.woman) gender_app.push('для жінок')
        if(product.man)   gender_app.push('для чоловіків')
        if(product.child) gender_app.push('для дітей')
        if(product.molod) gender_app.push('для молоді')
        this.setState({gender_app: gender_app.join(', ')})
    }






    render() {
        let image, articul, title, kind, brand, amount, appointment, type, sfera, descr2, components, price, descr3, composition, sposib, country ;

        if (this.state.product) {
            image = this.state.product.image;
            articul = this.state.product.articul;
            title = this.state.product.title;
            kind = this.state.product.kind;
            brand = this.state.product.brand;
            amount = this.state.product.amount;
            appointment = this.state.product.appointment;
            type = this.state.product.type;
            sfera = this.state.product.sfera;
            descr2 = this.state.product.descr2;
            components = this.state.product.components;
            price = this.state.product.price;
            descr3 = this.state.product.descr3;
            composition = this.state.product.composition;
            sposib = this.state.product.sposib;
            country = this.state.product.country;

        }
        return (
            <div>
                <div className='container'>
                    <div className='pt-3'>
                        <button type="button" className="btn btn-link float-left w-100 border-danger"><MDBIcon icon="arrow-left" className='text-left float-left '/></button>
                        <div className='d-inline-flex '>
                            <MDBCol sm='6' md='6' lg='6' xl='5' className='m-0'>
                                <div className='p-1 m-0 p-2'>
                                    <img className='m-auto w-100 justify-content-center d-block' src={image} />
                                </div>
                            </MDBCol>
                            <MDBCol sm='6' md='6' lg='6' xl='7' className='p-2 m-0'>
                                <div className='p-2'>
                                    <h3 className='font-weight-normal'>{title}</h3>
                                    <p className='font-weight-bold py-1 m-0 grey-text'>Артикул:<span className='font-weight-normal'>{articul}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Вид товару: <span className='font-weight-normal'>{kind}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Торгівельна марка: <span className='font-weight-normal'>{brand}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Об'єм: <span className='font-weight-normal'>{amount}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Призначення: <span className='font-weight-normal'>{appointment}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Тип: <span className='font-weight-normal'>{type}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Сфера застосування: <span className='font-weight-normal'>{sfera}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Опис: <span className='font-weight-normal'>{descr2}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Активні компоненти: <span className='font-weight-normal'>{components}</span></p>
                                    <p className='bg-white p-0 green-text py-1 m-0'><span className='font-weight-bold'><i className="fas fa-check green-text font-weight-bold p-2"></i>В наявності</span></p>
                                    <p className='font-weight-bold py-1 m-0 price'>Ціна: <span className='font-weight-bold py-1 m-0'>{price}</span></p>
                                    <div className='d-inline-flex flex-wrap text-center w-100 py-4 m-0'>
                                        <button className='float-left m-0 item-to-cart white-text border-0 z-depth-1 mr-5'>В КОРЗИНУ</button>
                                        <button className='float-left m-0 item-to-cart white-text border-0 z-depth-1'>КУПИТИ</button>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <MDBNav pills className='item-pills'>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    link
                                    className='white-text font-weight-normal px-1 py-3 discription-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '1'}
                                    onClick={this.togglePills('default', '1')}
                                >
                                    ОПИС
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    link
                                    className='white-text font-weight-normal  px-1 py-3 discription-link text-center'
                                    to='#'
                                    active={this.state.items['default'] === '2'}
                                    onClick={this.togglePills('default', '2')}
                                >
                                    ДЕТАЛІ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    link
                                    className='white-text font-weight-normal discription-link px-1 py-3 text-center'
                                    to='#'
                                    active={this.state.items['default'] === '3'}
                                    onClick={this.togglePills('default', '3')}
                                >
                                    СХОЖІ ТОВАРИ
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='w-25'>
                                <MDBNavLink
                                    link
                                    className='white-text font-weight-normal discription-link px-1 py-3 text-center'
                                    to='#'
                                    active={this.state.items['default'] === '4'}
                                    onClick={this.togglePills('default', '4')}
                                >
                                    ДОСТАВКА
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.items['default']} className='m-2 mb-5'>
                            <MDBTabPane tabId='1' className='mt-4'>
                                <p className='font-weight-bold'>
                                    Детальний опис товару:
                                </p>
                                <div className='item-method-of-use'>
                                    {descr3}
                                </div>
                                <p className='font-weight-bold m-0 py-3'>
                                    Склад:
                                </p>
                                <div className='item-about-makeup'>
                                    {composition}
                                </div>
                                <p className='font-weight-bold m-0 py-3'>
                                    Спосіб використання:
                                </p>
                                <div className='item-about-makeup'>
                                    {sposib}
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId='2'  className='mt-4'>
                                <MDBTable>
                                    <MDBTableBody>
                                        <tr>
                                            <td>Артикул товару:</td>
                                            <td>{articul}</td>
                                        </tr>
                                        <tr>
                                            <td>Назва товару:</td>
                                            <td>{title}</td>
                                        </tr>
                                        <tr>
                                            <td>Об'єм:</td>
                                            <td>{amount}</td>
                                        </tr>
                                        <tr>
                                            <td>Тип товару:</td>
                                            <td>{kind}</td>
                                        </tr>
                                        <tr>
                                            <td>Країна виробник:</td>
                                            <td>{country}</td>
                                        </tr>
                                        <tr>
                                            <td>Торгівельна марка:</td>
                                            <td>{brand}</td>
                                        </tr>
                                        <tr>
                                            <td>Призначення:</td>
                                            <td>{appointment}</td>
                                        </tr>
                                        <tr>
                                            <td>Категорія:</td>
                                            <td>{this.state.gender_arr}</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBTabPane>
                            <MDBTabPane tabId='3' className='m-1'>
                                <MDBRow className='mt-4 p-0'>
                                    <MDBCol lg='4' md='4' xl='3' className='pb-5 p-2' >
                                        <Item />
                                    </MDBCol>
                                    <MDBCol lg='4' md='4' xl='3' className='pb-5 p-2' >
                                        <Item />
                                    </MDBCol>
                                    <MDBCol lg='4' md='4' xl='3' className='pb-5 p-2' >
                                        <Item />
                                    </MDBCol>
                                    <MDBCol lg='4' md='4' xl='3' className='pb-5 p-2' >
                                        <Item />
                                    </MDBCol>
                                </MDBRow>
                            </MDBTabPane>
                            <MDBTabPane tabId='4'  className='mt-4 m-1'>
                                <p className='font-weight-bold'>
                                    Доставка
                                </p>
                                <MDBTable>
                                    <MDBTableBody>
                                        <p className='pl-0 w-100'>Відправлення товарів відбувається одразу ж після отримання замовлення.</p>
                                        <tr>
                                            <td><a href='#'>Самовивіз із салону ІВОН (вул. Данченко 32)</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='https://novaposhta.ua/'>Самовивіз із НОВОЇ ПОШТИ</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='www.ukrposhta.ua'>Самовивіз із УКРПОШТИ</a></td>
                                            <td className='text-green'>Безкоштовно</td>
                                        </tr>
                                        <tr>
                                            <td><a href='#'>Доставка кур'єром (м. Київ)</a></td>
                                            <td className='text-green'>50 грн</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                <p className='font-weight-bold'>
                                    Оплата
                                </p>
                                <p className='pl-0'>Оплата товарів відбувається  через передплату на карту Приват Банка, також наложеним платежем</p>
                                <div className='item-payment mb-5'>
                                    <p>
                                        <a href='https://www.privat24.ua/' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../Image/shipment/privat.png')} /></span>
                                            PRIVAT 24
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.visa.com.ua/uk_UA' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../Image/shipment/Visa.jpg')}/></span>
                                            VISA
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.mastercard.ua/uk-ua.html' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../Image/shipment/MasterCard.png')} /></span>
                                            MASTERCARD
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.liqpay.ua/uk' className='font-weight-bold black-text'>
                                            <span><img className='item-payment-img pr-3' src={require('../../../../Image/shipment/liqpay.png')} /></span>
                                            LIQPAY
                                        </a>
                                    </p>
                                </div>
                                <p className='font-weight-bold'>
                                    Гарантія
                                </p>
                                <div>
                                    <span className='font-weight-bold'>Повернення замовлених товарів неможливе згідно із Законом України 'Про захист справ споживачів'.</span>
                                    (Відповідно до Постанови Кабінету Міністрів України від 19 березня 1994 р. № 172 "Про реалізацію окремих положень Закону України "Про захист прав споживачів", затверджено перелік товарів належної якості, що не підлягають обміну (поверненню): Парфюмерно-косметичні вироби. )
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
                    </div>
                </div>
            </div>
        )
    }
}


export default Details;
