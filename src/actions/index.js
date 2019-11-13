
export const REQUEST_ITEMS = 'REQUEST_ITEMS'; // cart
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'; // cart
export const ADD_TO_CART = 'ADD_TO_CART'; // cart
export const IS_ORDER_PAGE = 'IS_ORDER_PAGE'; // cart
export const QTY_INCREASE = 'QTY_INCREASE'; // cart
export const QTY_DECREASE = 'QTY_DECREASE'; // cart


export const qtyIncrease = (addtocart) => ({
  type: QTY_INCREASE,
  addtocart
});
export const qtyDecrease = addtocart => ({
  type: QTY_DECREASE,
  addtocart,
});
export const isOrderPage = (isOrderPage) => ({
  type: IS_ORDER_PAGE,
  isOrderPage:isOrderPage
});
export const addToCart = addtocart => ({
  type: ADD_TO_CART,
  addtocart,
});

export const receivedItems = json1 => ({
  type: RECEIVE_ITEMS,
  json1: json1,
});

export const requestItems = () => ({
  type: REQUEST_ITEMS,
});

export function fetchItems(channel) {
  return function (dispatch) {
    dispatch(requestItems());
    return fetch(`https://api.myjson.com/bins/qhnfp`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedItems(json));
      },
    );
  };
}



