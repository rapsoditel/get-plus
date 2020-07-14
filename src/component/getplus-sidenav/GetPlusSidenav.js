import React from 'react'
import './GetPlusSidenav.scss'
import { NavLink } from "react-router-dom";
import {
    AccountCircleOutlined,
    StorefrontOutlined,
    VolumeUpOutlined,
    LoyaltyOutlined,
    ShoppingBasketOutlined,
    PeopleAltOutlined,
    AcUnitOutlined,
    HistoryOutlined,
    SettingsOutlined
} from '@material-ui/icons';

const Sidenav = () => {
    return (
        <React.Fragment>
            <div className='sidenav'>
                <NavLink exact to='/my-getplus' >
                    <AccountCircleOutlined />
                    <span>My GetPlus</span>
                </NavLink>
                <NavLink exact to='/merchants' >
                    <StorefrontOutlined />
                    <span>Merchants</span>
                </NavLink>
                <NavLink exact to='/promo' >
                    <VolumeUpOutlined />
                    <span>Promo</span>
                </NavLink>
                <NavLink exact to='/' >
                    <LoyaltyOutlined />
                    <span>Deals</span>
                </NavLink>
                <NavLink exact to='/my-order' >
                    <ShoppingBasketOutlined />
                    <span>My Orders</span>
                </NavLink>
                <NavLink exact to='/group-points' >
                    <PeopleAltOutlined />
                    <span>Group Points</span>
                </NavLink>
                <NavLink exact to='/pool-points' >
                    <AcUnitOutlined />
                    <span>Pool Points</span>
                </NavLink>
                <NavLink exact to='/history' >
                    <HistoryOutlined />
                    <span>History</span>
                </NavLink>
                <NavLink exact to='/setting' >
                    <SettingsOutlined />
                    <span>Settings</span>
                </NavLink>
            </div>
        </React.Fragment>
    )
}

export default Sidenav