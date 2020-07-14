import React from 'react'
import { TextBox, Button } from '../../global'

class ChangesPassword extends React.Component {
    state = {
        currentPass: '',
        newPass: '',
        confirmPass: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onChangePassword = () => {
        alert('Hi, this is dummy')
    }
    render() {
        let { currentPass, newPass, confirmPass } = this.state
        return (
            <React.Fragment>
                <div className='changes-password'>
                    <TextBox
                        id='currentPass'
                        label='Current Password'
                        value={currentPass}
                        onChange={this.onValueChange}
                    />
                    <TextBox
                        id='newPass'
                        label='New Password'
                        value={newPass}
                        onChange={this.onValueChange}
                        type='password'
                    />
                    <TextBox
                        id='confirmPass'
                        label='Confirm Password'
                        value={confirmPass}
                        onChange={this.onValueChange}
                        type='password'
                    />
                    <Button text='Save Changes' onClick={this.onChangePassword} />
                </div>
            </React.Fragment>
        )
    }
}

export default ChangesPassword