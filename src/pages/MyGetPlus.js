import React from 'react';
import './MyGetPlus.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetPlusHeader from '../component/getplus-header/GetPlusHeader';
import Sidenav from '../component/getplus-sidenav/GetPlusSidenav';
import Deals from '../component/getplus-content/deals/Deals';
import Setting from '../component/getplus-content/setting/Setting';
import data from '../component/getplus-content/setting/dataUser.json'

class MyGetPlus extends React.Component{
    state={
        user : `${data.GIVEN_NAME} ${data.FAMILY_NAME}`,
        badge : data.BADGE,
        activePoint : data.ACTIVE_POINT, 
        groupPoint : data.GROUP_POINT, 
        pendingPoint : data.PENDING_POINT, 
        expirePoint : data.EXPIRE_POINT
    }
    render(){
        let {user, badge, activePoint, groupPoint, pendingPoint, expirePoint} = this.state
        return(
            <React.Fragment>
                <div className='my-getplus'>
                    <div className='getplus-header'>
                        <GetPlusHeader
                            user={user}
                            badge={badge}
                            activePoint={activePoint}
                            groupPoint={groupPoint}
                            pendingPoint={pendingPoint}
                            expirePoint={expirePoint}
                        />
                    </div>
                    <Router>
                        <div className='getplus-container'>
                            <div className='getplus-sidenav'>
                                <Sidenav/>
                            </div>
                            <div className='getplus-content'>
                                <Route exact path='/' component={Deals}/>
                                <Route path ='/setting' component={Setting}/>
                            </div>
                        </div>
                        
                    </Router>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default MyGetPlus