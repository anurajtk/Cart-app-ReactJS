
import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'


let Total = ({ totaldiscount,totalprice}) => {
 

    return (
        <div className="bs-example total" data-example-id="simple-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Items<span className="total-span">:</span></td>
                        <td>${totalprice}</td>
                    </tr>
                    <tr>
                        <td>Discount<span className="total-span">:</span></td>
                        <td>${totaldiscount}</td>
                    </tr>
                    <tr>
                        <td>Type Discount<span className="total-span">:</span></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Order Total<span className="total-span">:</span></td>
                        <td>${totalprice -totaldiscount}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

const mapStateToProps = (state) => ({
    totaldiscount: state.totaldiscount,
    totalprice: state.totalprice,
})

Total = connect(
    mapStateToProps,
    null
)(Total)

export default Total;



