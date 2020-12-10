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

import Hair from './Components/CATEGORIES/HAIR/Hair'
import Body from './Components/CATEGORIES/BODY/Body'
import Face from './Components/CATEGORIES/FACE/Face'
import Goodfood from './Components/CATEGORIES/GOODFOOD/Goodfood'
import Fito from './Components/CATEGORIES/FITO/Fito'
import Home from './Components/CATEGORIES/HOME/Home'
import Child from './Components/CATEGORIES/CHILD/Child'
import Program1 from './Components/CATEGORIES/PROGRAM1/Program1'
import Program2 from './Components/CATEGORIES/PROGRAM2/Program2'

import Autorization from './Backend/AUTORIZATION/Autorization'
import Profile from './Backend/PROFILE/Profile'
import ForgotPassword from './Backend/AUTORIZATION/ForgotPassword'
import Registration from './Backend/REGISTRATION/Registration'
import RegistrationRealized from './Backend/REGISTRATION/RegistrationRealized'
import Bin from './Backend/BIN/Bin'
import Order from './Backend/ORDER/Order'
import OrderRealized from './Backend/ORDER/OrderRealized'
import Mobile from './Components/MOBILE/Mobile'


import Details from './Components/NAV/ITEMS/Item/Details'

class App extends React.Component {

    state = {
        token: '',
        user: ''
    }

    setUserData = (data) => {
        this.setState(data)
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({ user, token });
    }



    render() {
        return (
            <Router>
                <Top appState={this.state} setUserData={this.setUserData}/>
                <Nav appState={this.state} setUserData={this.setUserData}/>
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
                    <Route path='/profile'>
                        <Profile appState={this.state} setUserData={this.setUserData} tabIndex="1" />
                    </Route>
                    <Route path='/myOrders'>
                        <Profile appState={this.state} setUserData={this.setUserData} tabIndex="2" />
                    </Route>
                    <Route path='/products'>
                        <Products appState={this.state} setUserData={this.setUserData}/>
                    </Route>
                    <Route path='/Contacts'>
                        <Contacts />
                    </Route>
                    <Route path='/hair'>
                        <Hair />
                    </Route>
                    <Route path='/body'>
                        <Body />
                    </Route>
                    <Route path='/face'>
                        <Face />
                    </Route>
                    <Route path='/goodfood'>
                        <Goodfood />
                    </Route>
                    <Route path='/fito'>
                        <Fito />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/child'>
                        <Child />
                    </Route>
                    <Route path='/program1'>
                        <Program1 />
                    </Route>
                    <Route path='/program2'>
                        <Program2 />
                    </Route>
                    <Route path='/autorization'>
                        <Autorization />
                        <About />
                        <Benefits />
                        <Production />
                        <Info />
                        <Categories />
                        <Label />
                    </Route>
                    <Route path='/profile'>
                        <Profile appState={this.state} setUserData={this.setUserData} tabIndex="1" />
                    </Route>
                    <Route path='/myOrders'>
                        <Profile appState={this.state} setUserData={this.setUserData} tabIndex="2" />
                    </Route>
                    <Route path='/forgotPassword'>
                        <ForgotPassword />
                        <About />
                        <Benefits />
                        <Production />
                        <Info />
                        <Categories />
                        <Label />
                    </Route>
                    <Route path='/registration'>
                        <Registration />
                        <About />
                        <Benefits />
                        <Production />
                        <Info />
                        <Categories />
                        <Label />
                    </Route>
                    <Route path='/registrationRealized'>
                        <RegistrationRealized />
                    </Route>
                    <Route path='/bin'>
                        <Bin />
                        <About />
                        <Benefits />
                        <Production />
                        <Info />
                        <Categories />
                        <Label />
                    </Route>
                    <Route path='/order'>
                        <Order />
                    </Route>
                    <Route path='/orderRealized'>
                        <OrderRealized />
                    </Route>
                    <Route path='/details'>
                        <Details />
                    </Route>
                    <Route path='/mobile'>
                        <Mobile />
                    </Route>
                </Switch>
                <Footer />
                <Copyright />
            </Router>
        );
    }
}

export default App;
