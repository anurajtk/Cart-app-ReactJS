import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'

import Item from './Item'

let Products = ({ products, loading }) => {
    let topProducts = "";
    if (products) {
        topProducts = products.map((e, index) =>
            (
                
                 <Item key={`${e.id}`} items={e} />
                
            )
        )
    }
    if (loading) {
        topProducts = <h3 className="loading-indicator">Loading ...</h3>
    }

    return (
        <div>
            {topProducts}
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.json1,
    loading: state.loading
})

Products = connect(
    mapStateToProps,
    null
)(Products)

export default Products;