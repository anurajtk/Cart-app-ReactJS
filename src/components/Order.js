import React from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'
import OrderList from './OrderList';
import Total from './Total';



let Orders = (addtocart ) => {
    let topProducts = "";
        topProducts = addtocart.map((e, index) =>
            ( <tr key={`order${e.id}`}>
                <OrderList  items={e} />
               </tr> 
            )
        )
    
    return (topProducts)
}

let Order = ({ isOrderPage,addtocart}) => (
    <div style={{ display: isOrderPage ? 'block' : 'none' }} className="row">

        <h1>Order Summery</h1>
        <div className="col-md-8">
        <table className="table table-striped order-table-list">
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Qty</th>
                    <th>Price</th>
                   
                </tr>
            </thead>
            <tbody>
                {Orders(addtocart)}
            </tbody>
        </table>
        
        </div>
        <div className="col-md-4">
            <Total/>
        </div>

    </div>
);



const mapStateToProps = (state) => ({
    isOrderPage: state.isOrderPage,
    addtocart: state.addtocart

})


Order = connect(
    mapStateToProps,
     

)(Order)

export default Order;