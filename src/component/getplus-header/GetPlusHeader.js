import React from 'react';
import './GetPlusHeader.scss'
import Badge from '../../assets/img/badge.svg'
import PhotoProfile from '../../assets/img/0.jpg'
import { thousandSeparator } from '../../config';

const GetPlusHeader = ({ user, badge, activePoint, groupPoint, pendingPoint, expirePoint }) => {
    return (
        <React.Fragment>
            <div className='header-container'>
                <div className='header-name'>

                    <img src={PhotoProfile} alt='Profile' />

                    <div className='name'>
                        {user}
                        <div className='badge'>
                            <img src={Badge} alt='Badge' />
                            <span>{badge}</span>
                        </div>
                    </div>
                </div>
                <div className='header-point'>
                    <div className='active'>
                        <span>Active Points</span>
                        <span>{thousandSeparator(activePoint)} pts</span>
                    </div>
                    <div className='group'>
                        <span>Group Points</span>
                        <span>{thousandSeparator(groupPoint)} pts</span>
                    </div>
                    <div className='pending'>
                        <span>Pending Points</span>
                        <span>{thousandSeparator(pendingPoint)} pts</span>
                    </div>
                    <div className='expire'>
                        <span>Expired Points</span>
                        <span>{thousandSeparator(expirePoint)} pts</span>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

GetPlusHeader.defaultProps = {
    user: 'GetPlus User',
    badge: 'Unranked',
    activePoint: 0,
    groupPoint: 0,
    pendingPoint: 0,
    expirePoint: 0
}

export default GetPlusHeader