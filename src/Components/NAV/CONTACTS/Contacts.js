import React from 'react';
import {Component} from 'react';
import './Contacts.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {MDBRow, MDBCol} from "mdbreact";


class Contacts extends React.Component  {
    render() {
        return (
             <div>
                 <div className='container mb-5 mt-3'>
                     <h2 className="h2-responsive font-weight-bold text-center py-5 about-text m-0">
                         КОНТАКТИ
                     </h2>
                     <MDBRow className='flex-wrap py-0 p-2'>
                         <MDBCol className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-xl-5 py-lg-5 py-md-0 py-sm-0 py-0'>
                             <h4 className='px-2 pb-4 font-weight-bold'>Контактна інформація</h4>
                             <p className='font-weight-normal px-2 py-1 contact-text'><i className='fas fa-map-marker-alt pl-1 pr-4 item-contact'></i>м. Київ, вул. Данченко 32, салон краси та магазин YVONNE</p>
                             <p className='font-weight-normal px-2 py-1 contact-text'><i className='fas fa-phone pr-4 item-contact'></i>+38 (067) 998 40 42</p>
                             <p className='font-weight-normal px-2 py-1 contact-text'><i className='fas fa-phone pr-4 item-contact'></i>+38 (067) 108 87 99</p>
                             <p className='font-weight-normal px-2 py-1 contact-text'><i className='far fa-envelope pr-4 item-contact'></i>ianagautron@gmail.com</p>
                             <p className='font-weight-normal px-2 py-1 contact-text'><i className='fab fa-instagram pr-4 item-contact'></i>choice</p>
                             <p className='font-weight-normal px-2 py-1 contact-text'><i className='fab fa-facebook pr-4 item-contact'></i>choice</p>
                         </MDBCol>
                         <MDBCol className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pt-4'>
                             <div
                                 id="map-container"
                                 className="rounded z-depth-1-half map-container"
                                 style={{ height: "400px" }}
                             >
                                 <iframe
                                     src="https://www.google.com.ua/maps/place/YVONNE+-+%D1%81%D0%B0%D0%BB%D0%BE%D0%BD+%D0%BA%D1%80%D0%B0%D1%81%D0%B8+%D1%82%D0%B0+%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/@50.4974115,30.4394755,17z/data=!4m5!3m4!1s0x40d4cd26390dd4b3:0xa853edd3a950b1e9!8m2!3d50.4975548!4d30.4397551"
                                     title="This is a unique title"
                                     width="100%"
                                     height="100%"
                                     frameBorder="0"
                                     style={{ border: 0 }}
                                 />
                             </div>
                         </MDBCol>
                     </MDBRow>
                 </div>
             </div>
        )
    }
}

export default Contacts;