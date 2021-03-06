import React from 'react';
import {Component} from 'react';
import './About.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {MDBCol, MDBRow, MDBIcon } from 'mdbreact'

class About extends React.Component  {
    render() {
        return (
            <section className="mb-5 mt-3 container">
                <h2 className="h2-responsive font-weight-bold text-center py-sm-5 py-3 about-text m-0">
                    ПРО КОМПАНІЮ
                </h2>
                <h5 className="black-text about-text pb-3 p-2 w-responsive w-100">
                    Компанія «CHOICE» являється лідером у виробництві натуральних косметичних
                    засобів та фітокомплексів лікувального призначення, заснована у місті Києві
                    у 2004 році. Фітокомплекси мають вміст лише натурального характеру та
                    призначені для оздоровлення організму вцілому, регенерації клітин та
                    очистки організму. Більш того, компанія виробляє косметичні засоби
                    торгівельної марки «White Mandarin» по догляду за тілом, обличчям та волоссям,
                    які ціняться своїм унікальним вмістом. Нещодавно у компанії з'явились миючі засоби
                    «Green Max» по догляду за домівкою. Ідеальна продукція збагачена органічними компонентами.
                </h5>
                <MDBRow className='m-0'>
                    <MDBCol lg="6" className="text-center text-lg-left justify-content-center m-auto px-0 m-0 p-2">
                        <img
                            className="img-fluid"
                            src={require('./../../Image/pictures/IMG_3252.png')}
                            alt=""
                        />
                    </MDBCol>
                    <MDBCol lg="6" className="col text-center text-lg-left justify-content-center p-2">
                                <h2 className="h2-responsive font-weight-bold text-center py-sm-5 py-3 about-text m-0">Наша місія</h2>
                                <h5 className="black-text about-text text-left">
                                    Продукція компанії <span className='green-ic font-weight-bold'>Choice</span> - це результат сумлінної праці на благо оздоровлення організму продукцією створеною на основі виключно натуральних та корисних компонентів, збереження здоров'я організму та дотримання високих стандартів. Наша місія повсякчас залишається незмінною: створювати найкращі харчові добавки до їжі, що досягається завдяки винаходу найкращого співвідношення натуральної сировини. Наш головний принцип заключається в тому, щоб уникнути використання хімікатів та фарбниців у продукції. Продукція вироблена на Україні. Залишимо красоту та молодість наодинці з природою Коли говоримо про Choice, ми творимо Здоров'я.
                                </h5>
                    </MDBCol>
                </MDBRow>
            </section>
        )
    }
}

export default About;