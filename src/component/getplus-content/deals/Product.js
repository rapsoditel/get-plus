import React from 'react'
import data from './DealsData.json'
import productImage from '../../../assets/deals/product.PNG'
import { thousandSeparator } from '../../../config'

class Product extends React.Component {
    state = {
        dataProduct: data.product
    }
    render() {
        let { dataProduct } = this.state
        if (dataProduct.length > 0) {
            return (
                <React.Fragment>
                    {
                        dataProduct.map(data => {
                            return (
                                <React.Fragment key={data.id}>
                                    <div className='deals-card'>
                                        <img src={productImage} alt='Images'/>
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
                    <div>No Product</div>
                </React.Fragment>
            )
        }

    }
}

export default Product