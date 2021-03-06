import React from 'react';
import './Products.css'


import {
    MDBRow,
    MDBCol,
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
} from 'mdbreact';

import $ from 'jquery';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';



import Filters from '../PRODUCTS/Filters'
import Item from './../ITEMS/Item/Item'


class Products extends React.Component  {

  constructor(props) {
        super(props)


     this.state = {
        collapseID: '',
        value: 0,
        items: {
            default: '1',
        },
             products: [],
             filterSubtype: {},
             filterApp: {},
             filterBrand: {},
             filterSeria: {},
             filterGender: {}
    }

    this.setFilterSubtype = this.setFilterSubtype.bind(this)
    this.setFilterApp     = this.setFilterApp.bind(this)
    this.setFilterBrand   = this.setFilterBrand.bind(this)
    this.setFilterSeria   = this.setFilterSeria.bind(this)
    this.setFilterGender  = this.setFilterGender.bind(this)

  }

  filter = {
            price: {}
  }

componentDidMount(props) {
    fetch('http://choice-server.loc/api/products')
        .then(response => response.json())
        .then(data => this.setState( {products: data.products}));
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


    setFilterSubtype(subtype) {
        this.filter.subtype = subtype
        this.doAjax()
    }

    setFilterApp(apps) {
        this.filter.apps = apps
        this.doAjax()
    }

    setFilterBrand(brands) {
        this.filter.brands = brands
        this.doAjax()
    }

    setFilterSeria(serias) {
        this.filter.serias = serias
        this.doAjax()
    }

    setFilterGender(gender) {
        this.filter.gender = gender
        this.doAjax()
    }

    setFilterPrice = (min_or_max, price) => {
        this.filter.price[min_or_max] = price
        this.doAjax()
    }

    doAjax() {
        let url
        if (Object.keys(this.filter).length !== 0) {
            url = 'http://choice-server.loc/api/filter?filter='+encodeURIComponent(JSON.stringify(this.filter))
        }else{
            url = 'http://choice-server.loc/api/products'
        }
        fetch('http://choice.loc/api/products')
            .then(response => response.json())
            .then(data => this.setState({products: data.products}));
    }


    componentDidMount(props) {
        if (window.location.pathname.indexOf('/category') === 0) {
            const category = this.props.match.params.category
            this.setFilterApp(category)
        }else{
            fetch('http://choice-server.loc/api/products')
                .then(response => response.json())
                .then(data => this.setState({products: data.products}));
        }
    }

    componentDidUpdate(prevProps) {
        if (window.location.pathname.indexOf('/category') === 0) {
            if (prevProps.match.params.category !== this.props.match.params.category) {
                this.setFilterApp(this.props.match.params.category)
            }
        }
    }


    render() {
        return (
              <div>
                  <div className='mb-5 mt-3'>
                      <div className='container pl-1 pr-3 px-sm-2 px-md-2 px-lg-1 px-xl-1'>
                          <h2 className='h2-responsive pt-5 mb-0 pb-3 pb-md-5 pb-xl-5 pb-lg-5 font-weight-bold text-center'>
                              ПРОДУКЦІЯ
                          </h2>
                          <MDBRow className='d-inline-flex w-responsive w-100 pb-5'>

                              <MDBCol className='col-xl-3 col-lg-4 col-md-4 col-sm-5 h-100 w-responsive p-2 pl-3'>
                                  <h4 className='font-weight-bold pt-4 pb-4 p-2'>Фільтри</h4>
                                  <Filters
                                  setFilterSubtype = {this.setFilterSubtype}
                                  setFilterApp = {this.setFilterApp}
                                  setFilterBrand = {this.setFilterBrand}
                                  setFilterSeria = {this.setFilterSeria}
                                  setFilterGender = {this.setFilterGender}
                                  />
                              </MDBCol>
                              {/*products list*/}
                              <MDBCol className='col-xl-9 col-lg-8 col-md-8 col-sm-7 d-inline-block p-2 pl-xl-0  '>
                                  <div>
                                      <h4 className='text-center p-4 font-weight-bold'>Товари</h4>
                                      <MDBRow className='p-0 m-2 ml-0 border-0 products'>
                                          {this.state.products.map((product) => (
                                              <MDBCol key={product.id} lg='6' md='6' xl='4' className='pb-5 p-2'>
                                                  <Item product={product}/>
                                              </MDBCol>
                                          ))}
                                      </MDBRow>
                                  </div>
                                  <MDBPagination color='dark'>
                                      <MDBPageItem disabled>
                                          <MDBPageNav aria-label='Previous'>
                                              <span aria-hidden='true'>&laquo;</span>
                                              <span className='sr-only'>Previous</span>
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem active>
                                          <MDBPageNav>
                                              1 <span className='sr-only'>(current)</span>
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              2
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              3
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              4
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              5
                                          </MDBPageNav>
                                      </MDBPageItem>
                                      <MDBPageItem>
                                          <MDBPageNav>
                                              &raquo;
                                          </MDBPageNav>
                                      </MDBPageItem>
                                  </MDBPagination>
                              </MDBCol>
                          </MDBRow>
                      </div>
                  </div>
              </div>
        )
    }
}

export default Products;