import { RECEIVE_ITEMS, REQUEST_ITEMS, ADD_TO_CART,IS_ORDER_PAGE,
  QTY_INCREASE,QTY_DECREASE } from '../actions';
const INITIAL_STATE = {
  json1:[],
  addtocart:[],
  recentaddcart:[],
  isOrderPage:false,
  totalprice:0,
  totaldiscount:0

}
const reducer = (state =INITIAL_STATE , action) => {
  switch (action.type) {
    case REQUEST_ITEMS:
      return { ...state, loading: true };
    case RECEIVE_ITEMS:
      return { ...state, json1: action.json1, loading: false };
    case IS_ORDER_PAGE:
      return { ...state, isOrderPage: action.isOrderPage };  
    case ADD_TO_CART:
      let  tempCart=state.addtocart;
      let tempTotal
      let tempDiscount
      if(state.addtocart && action.addtocart.price){
        tempTotal=state.totalprice+ action.addtocart.price;
      }
      if(state.addtocart && action.addtocart.price){
        tempDiscount =state.totaldiscount + (action.addtocart.price*action.addtocart.discount)/100;
      }
      action.addtocart.qty=1;// add quantity field for initaial
      tempCart.push(action.addtocart);
      return { ...state, 
        addtocart:tempCart,
        recentaddcart:action.addtocart,
        totalprice:tempTotal,
        totaldiscount:tempDiscount
      };
    case QTY_INCREASE:
        let id= action.addtocart.id
        let obj =state.addtocart
        //let qty =action.addtocart.qty+1;
        // iterate over each element in the array
        for (let i = 0; i < obj.length; i++){
          if (obj[i].id == id){
            obj[i].qty =obj[i].qty + 1;
            //console.log("find it")
            //console.log(obj)
          }
        }
        console.log(obj)
      return { ...state, addtocart:obj};
    case QTY_DECREASE:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
