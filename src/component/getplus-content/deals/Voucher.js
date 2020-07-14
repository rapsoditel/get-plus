import React from 'react'
import data from './DealsData.json'
import voucherImage from '../../../assets/deals/voucher.PNG'
import { thousandSeparator } from '../../../config'

class Voucher extends React.Component {
    state = {
        dataVoucher: data.voucher
    }
    render() {
        let { dataVoucher } = this.state
        if (dataVoucher.length > 0) {
            return (
                <React.Fragment>
                    {
                        dataVoucher.map(data => {
                            return (
                                <React.Fragment key={data.id}>
                                    <div className='deals-card'>
                                        <img src={voucherImage} alt='Images'/>
                                        <div>
                                            <span>{data.title}</span>
                                            <span>{thousandSeparator(data.point)} points</span>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    <div>No Voucher</div>
                </React.Fragment>
            )
        }

    }
}

export default Voucher