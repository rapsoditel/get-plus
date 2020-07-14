import React from 'react';
import { TextBox, SelectBox, Button } from '../../global';
import data from './dataUser.json'

class Profile extends React.Component {
    state = {
        dataPrefix: ['Mr', 'Ms', 'Mrs'],
        dataCountry: ['Indonesia', 'New Zealand'],
        userId: data.USER_ID,
        prefix: data.PREFIX,
        givenName: data.GIVEN_NAME,
        familyName: data.FAMILY_NAME,
        dob: data.DOB,
        phone: data.PHONE,
        email: data.EMAIL,
        address: data.ADDRESS,
        suburb: data.SUBURB,
        city: data.CITY,
        country: data.COUNTRY,
        postCode: data.POSTCODE
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSaveClick = () =>{
        alert('Hello, this is dummy')
    }

    render() {
        let { dataPrefix, dataCountry, userId, prefix, givenName, familyName, dob, phone, email, address, suburb, city, country, postCode } = this.state
        return (
            <React.Fragment>
                <div className='profile'>
                    <div className='container'>
                        <TextBox
                            id='userId'
                            label='Membership Number'
                            value={userId}
                            onChange={this.onValueChange}
                            disabled={true}
                        />
                        <SelectBox label='Prefix' data={dataPrefix} value={prefix}/>
                        <TextBox
                            id='givenName'
                            label='Given Name'
                            value={givenName}
                            onChange={this.onValueChange}
                        />
                        <TextBox
                            id='familyName'
                            label='Family Name'
                            value={familyName}
                            onChange={this.onValueChange}
                        />
                        <TextBox
                            id='dob'
                            label='Date of Birth'
                            type='date'
                            value={dob}
                            onChange={this.onValueChange}
                        />
                        <TextBox
                            id='phone'
                            label='Phone'
                            value={phone}
                            onChange={this.onValueChange}
                        />
                        <TextBox
                            id='email'
                            label='Email'
                            value={email}
                            onChange={this.onValueChange}
                        />
                        <TextBox
                            id='address'
                            label='Address'
                            value={address}
                            onChange={this.onValueChange}
                        />
                        <TextBox
                            id='suburb'
                            label='Suburb'
                            value={suburb}
                            onChange={this.onValueChange}
                        />
                        <TextBox
                            id='city'
                            label='City/State'
                            value={city}
                            onChange={this.onValueChange}
                        />
                        <SelectBox label='Country' data={dataCountry} value={country}/>
                        <TextBox
                            id='postCode'
                            label='Postcode'
                            value={postCode}
                            onChange={this.onValueChange}
                        />
                    </div>
                    <div className='footer'>
                        <Button text='Save Changes' onClick={this.onSaveClick}/>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Profile