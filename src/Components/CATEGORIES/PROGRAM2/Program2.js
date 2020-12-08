import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBLink, MDBRow} from "mdbreact";

import Item from './../../../Components/NAV/ITEMS/Item/Item'

class Program2 extends React.Component  {

    constructor(props) {
        super(props)


        this.state = {
            products: []
        }
    }


    render() {
        return (
            <div>
                <div className='mb-5 mt-3'>
                    <div className='container'>
                        <h2 className='h2-responsive pt-5 mb-0 pb-3 pb-md-5 pb-xl-5 pb-lg-5 font-weight-bold text-center'>
                            АНТИПАРАЗИТАРНА ФОРМУЛА
                        </h2>
                        <h5 className='pb-5 slogan-text'>Збалансований природній комплекс фітопрепаратів діють на благо організму людини завдяки позбавленню його від паразитів.</h5>
                        <MDBRow className='d-inline-flex w-responsive w-100 pb-5'>
                            {this.props.products.map((product) => (
                                <MDBCol key={product.id} lg='3' md='3' xl='3' className='pb-5 p-2' >
                                    <Item product={product}/>
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </div>
                </div>
            </div>
        )
    }
}

export default Program2;