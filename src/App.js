import React from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';





import Top from './Components/TOP/Top'
import Nav from '../src/Components/NAV/Nav'
import Slide from './Components/SLIDE/Slide'
import About from '../src/Components/ABOUT/About'
import Benefits from '../src/Components/BENEFITS/Benefits'
import Production from '../src/Components/PRODUCTION/Production'
import Categories from '../src/Components/CATEGORIES/Categories'
import Info from '../src/Components/INFO/Info'

import Label from '../src/Components/LABEL/Label'
import Footer from '../src/Components/FOOTER/Footer'
import Copyright from '../src/Components/COPYRIGHT/Copyright'


import Products from '../src/Components/NAV/PRODUCTS/Products';
import Contacts from './Components/NAV/CONTACTS/Contacts'



function App() {

  return (
        <Router>
            <Top />
            <Nav />
            <Slide />
            <Switch>
                <Route path='/' exact>
                    <About />
                    <Benefits />
                    <Production />
                    <Info />
                    <Categories />
                    <Label />
                </Route>
                <Route path='/Products'>
                    <Products />
                </Route>
                <Route path='/Contacts'>
                    <Contacts />
                </Route>
            </Switch>
            <Footer />
            <Copyright />
        </Router>
  );
}

export default App;
