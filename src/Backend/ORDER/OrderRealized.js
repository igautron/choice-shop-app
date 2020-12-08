import React from 'react';
import {Component} from 'react';


class OrderRealized extends React.Component {


    render() {
        return (
            <div className="my-5">
                <h3 className="text-center font-weight-bold py-5 mt-5">Дякуємо за замовлення!</h3>
                <h4 className="text-center font-weight-normal pb-5 mb-5">Наш менеджер зв'яжеться з Вами у найближчий час!</h4>
            </div>
        )
    }
}

export default OrderRealized;