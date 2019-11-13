import React from 'react'
import { connect } from 'react-redux'


let ItemAddNoteBar = ({ recentaddcart,addtocartCount }) => {
    let addedItem ='';
    
    if(addtocartCount>0  ){
        
        addedItem = <p className="items-add-note-bar bg-success" role="alert">{recentaddcart.name} is added to cart</p>;
    }
    return (<div>
        {addedItem}
        </div>
    )}


const mapStateToProps = (state) => ({
    recentaddcart: state.recentaddcart,
    addtocartCount: state.addtocart.length
})

ItemAddNoteBar = connect(
    mapStateToProps
    
)(ItemAddNoteBar)

export default ItemAddNoteBar;