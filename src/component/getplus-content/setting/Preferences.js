import React from 'react'
import { Button, SelectBox } from '../../global'

class Preferences extends React.Component {
    state = {
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
                    <SelectBox data={this.state.data} />
                    <Button text='Save Changes' onClick={this.onChangePassword} />
                </div>
            </React.Fragment>
        )
    }
}

export default Preferences