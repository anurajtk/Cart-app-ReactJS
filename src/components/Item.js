import React from 'react';
import { connect } from 'react-redux'
import { addToCart,getChannel } from '../actions'

const price =(items)=>{
  let tag ='';
  if(items.discount >0 )
  {
    tag = <p><strike className="red">${items.price}</strike>  <b>${(items.price)*(100- items.discount)/100} </b> </p>

  }
  else{
    tag = <p><b>${items.price}</b></p>
  }
  return (<div>
    {tag}
    </div> 
  )
}

let Item = ({ items, onClick }) => (
  <div className="col-md-3 col-sm-6">
    <div className="thumbnail">
    {items.discount!==null && items.discount!==0 ?<span className="label label-success">{items.discount}%</span>:<span className="label label-success" style={{visibility:'hidden'}}>{items.discount}%</span>} 
    <span>
    <img alt="100%x200" data-src="holder.js/100%x200" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MSAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTZlNTUyNDc2MjkgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNmU1NTI0NzYyOSI+PHJlY3Qgd2lkdGg9IjI0MSIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS4zNTE1NjI1IiB5PSIxMDUuNDA0Njg3NSI+MjQxeDIwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true" 
    style={{height:"200px", width: "80%", display: "block"}}
    />
   
    </span>
			<div className="caption">
        <div className="row">
          <div className="col-md-6">
            <h3>{items.name}</h3>
            {price(items)}
          </div>
          <div className="col-md-6 add-to-cart-wrapper">
            <p onClick={onClick} >
              <a href="#" className="btn btn-default btn-cart "  role="button" >Add to Cart</a>
            </p>
          </div>
        </div>
				
			</div>
		</div>
  </div>
);


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
        dispatch(addToCart(ownProps.items));
  }
});

Item = connect(
  undefined,
  mapDispatchToProps
  
)(Item)

export default Item;