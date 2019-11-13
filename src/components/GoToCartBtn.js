import React from 'react'
import { connect } from 'react-redux';
import {isOrderPage} from '../actions/index'


let GoToCartBtn = ({ addtocartCount, onClick }) => (
    <button className="btn btn-primary" type="button" onClick={onClick}>
        Go to Cart <span className="badge cart-count-badge">{addtocartCount}</span>
    </button>
)


const mapStateToProps = (state) => ({
    addtocartCount: state.addtocart.length
})
const mapDispatchToProps = (dispatch) => ({
    
    onClick: () => {
        dispatch(isOrderPage(true));
    }
})

GoToCartBtn = connect(
    mapStateToProps,
    mapDispatchToProps
    
)(GoToCartBtn)

export default GoToCartBtn;