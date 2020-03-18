import { FETCH_PRODUCTS,FETCH_PRODUCT } from './ActionTypes.js';

export const getProducts = () => 
dispatch =>
fetch('products.json')
.then(response => response.json())
.then(response => {
	dispatch({
		type:FETCH_PRODUCTS,
		payload:response.products,
	})
})

export const compare = product =>({
	type: FETCH_PRODUCT,
	 product
})