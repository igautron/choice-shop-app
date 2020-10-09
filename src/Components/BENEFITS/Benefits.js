import React from 'react';
import {Component} from 'react';
import './Benefits.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';

import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBCardImage} from "mdbreact";

class Benefits extends React.Component  {
    render() {
        return (
          <div className='w-100 container-benefits'>
              <div className='container justify-content-center m-auto pb-3'>
                  <div className='d-inline-flex w-100 '>
                      <MDBCol className='benefits-col col-12 col-md-12 col-lg-8 col-xl-8 p-0 px-2 mb-3'>
                          <h2 className='font-weight-bold pt-5 pb-3'>Що робить нас лідерами?!</h2>
                          <h5><i className="fa fa-check pr-4 green-ic" aria-hidden="true"></i>Компанія отримала міжнародний патент пройшовши усі клінічні випробування на базі Інституту педіатрії, акушерства та гінекології АМН України</h5>
                          <h5><i className="fa fa-check pr-4 green-ic" aria-hidden="true"></i>Продукція створена на основі рослинної сировини, не містить нафтохімічних продуктів SLS і SLES, силіконів, парабенів, синтетичних ароматизаторів і барвників.</h5>
                          <h5><i className="fa fa-check pr-4 green-ic" aria-hidden="true"></i>«Добра Їжа» і «Макросорб» — це концентровані комплекси поживних речовин, підходять для дієтичного харчування</h5>
                          <h5><i className="fa fa-check pr-4 green-ic" aria-hidden="true"></i>Ми допомогли тисячам людям у боротьбі з тяжкими недугами, зберегти здоров'я та продовжити молодість.</h5>
                      </MDBCol>
                      <MDBCol className='benefits-col col-3 col-lg-3 col-xl-3 p-0 pt-3 pl-3 d-xl-block d-lg-block d-md-none d-sm-none d-none'>
                          <img className='benefits-img' src={require('./../../Image/vector/benefits.png')}/>
                      </MDBCol>
                  </div>
              </div>
          </div>
        )
    }
}

export default Benefits;




