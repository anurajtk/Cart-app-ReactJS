import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { qtyIncrease, qtyDecrease } from '../actions'

let OrderList = ({ items, onClickDecrease, onClickIncrease }) => (
    <Fragment>
      <th scope="row">
      <div className="itemsx" style={{padding:"10px", border:"1px solid #ddd"}}>
        <img alt="100%x200" data-src="holder.js/100%x200" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MSAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTZlNTUyNDc2MjkgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNmU1NTI0NzYyOSI+PHJlY3Qgd2lkdGg9IjI0MSIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS4zNTE1NjI1IiB5PSIxMDUuNDA0Njg3NSI+MjQxeDIwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true" 
      
        className="small-image"
        />
      <span style={{marginLeft:"10px"}}>
          {items.name}
      </span>
      <span className="close-btn glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
      </div>
      </th>
      <td  className="table-cell">
        <a href="#" className="btn btn-default qty-change-btn" onClick={onClickDecrease} role="button" >-</a>
        <span className="qty-content">{items.qty}</span>
        <a href="#" className="btn btn-default qty-change-btn" onClick={onClickIncrease}  role="button" >+</a>
      </td>
      <td className="table-cell">${(items.price)*(100- items.discount)*items.qty/100}</td>    
    </Fragment>
  );


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickDecrease: () => {
       dispatch(qtyIncrease(ownProps.items));
    },
    onClickIncrease: () => {
        dispatch(qtyIncrease(ownProps.items));
    }
  });
  
  
  
const mapStateToProps = (state) => ({

    addtocart: state.addtocart
    

})

OrderList = connect(
    undefined,
    mapDispatchToProps

)(OrderList)

export default OrderList;