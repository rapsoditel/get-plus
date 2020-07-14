import React from 'react';
import './Setting.scss';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Profile from './Profile';
import Card from './Card';
import Preferences from './Preferences';
import ChangesPassword from './ChangesPassword';

class Setting extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='setting'>
                    <h3 className='page-title'>Settings</h3>
                    <Router>
                        <div className='button-control'>
                            <NavLink exact to='/setting'>Profile</NavLink>
                            <NavLink exact to='/preferences'>Preferences</NavLink>
                            <NavLink exact to='/card'>Card</NavLink>
                            <NavLink exact to='/change-password'>Change Password</NavLink>
                        </div>
                        <div className='setting-content'>
                            <div className='content-item'>
                                <Route exact path='/setting' component={Profile}/>
                                <Route path='/preferences' component={Preferences}/>
                                <Route path='/card' component={Card}/>
                                <Route path='/change-password' component={ChangesPassword}/>
                            </div>
                        </div>
                    </Router>
                </div>
            </React.Fragment>
        )
    }
}

export default Setting