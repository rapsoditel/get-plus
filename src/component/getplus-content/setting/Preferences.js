import React from 'react'
import { Button, SelectBox } from '../../global'
import data from './dataUser.json'

class Preferences extends React.Component {
    state = {
        language : data.LANGUAGE,
        data: [
            "English",
            "Arabic",
            "Chinnese",
            "Dutch",
            "French",
            "Indonesian",
            "Japan"
        ]

    }

    onChangePassword = () => {
        alert('Hi, this is dummy')
    }
    render() {
        return (
            <React.Fragment>
                <div className="preferences">
                    <SelectBox label="Language" data={this.state.data} value={this.state.language}/>
                    <Button text='Save Changes' onClick={this.onChangePassword} />
                </div>
            </React.Fragment>
        )
    }
}

export default Preferences