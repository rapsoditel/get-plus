import React from 'react';
import './Deals.scss'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Voucher from './Voucher';
import Product from './Product';

class Deals extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='deals'>
                    <h3 className='page-title'>Deals</h3>
                    <Router>
                        <div className='button-control'>
                            <NavLink exact to='/'>Voucher</NavLink>
                            <NavLink exact to='/deals-product'>Product</NavLink>
                        </div>
                        <div className='deals-content'>
                            <div className='content-item'>
                                <Route exact path='/' component={Voucher}/>
                                <Route path='/deals-product' component={Product}/>
                            </div>
                        </div>
                    </Router>
                </div>
            </React.Fragment>
        )
    }
}

export default Deals