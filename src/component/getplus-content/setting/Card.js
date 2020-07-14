import React from 'react';
import { TextBox, Button } from '../../global';

class Card extends React.Component {
    state = {
        dataCard: [
            {
                cardNumber: "6094450088002163126",
                status: "Active",
                badge:"Silver"
            },
            {
                cardNumber: "6094450088002163126",
                status: "Active",
                badge:"Silver"
            },
            {
                cardNumber: "6094450088002163126",
                status: "Active",
                badge:"Silver"
            },
            {
                cardNumber: "6094450088002163126",
                status: "Active",
                badge:"Silver"
            }
        ],
        cardNumber: '',
        accessCode: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onAddCard = () => {
        const { cardNumber, dataCard } = this.state
        let arr = dataCard
        let data = { cardNumber, status: 'Active', badge:'Silver'}

        arr.push(data)

        this.setState({
            dataCard: arr
        }, () => {
            this.setState({
                cardNumber: '',
                accessCode: ''
            })
        })

    }

    render() {
        let { dataCard, cardNumber, accessCode } = this.state
        return (
            <React.Fragment>
                <div className='card'>
                    {
                        dataCard.length > 0 ?
                            dataCard.map((data, index) => {
                                return (
                                    <React.Fragment>
                                        <div key={index}>
                                            <div>{data.badge}</div>
                                            <div>{data.status}</div>
                                            <div>{data.cardNumber}</div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                            : <div>No Card</div>
                    }
                </div>

                <div>
                    <TextBox
                        id='cardNumber'
                        label='Card Number'
                        value={cardNumber}
                        onChange={this.onValueChange}
                    />
                    <TextBox
                        id='accessCode'
                        label='Access Code'
                        value={accessCode}
                        onChange={this.onValueChange}
                    />
                    <Button text='Add Card' onClick={this.onAddCard} />
                </div>
            </React.Fragment>
        )
    }
}

export default Card