import { FETCH_PRODUCTS,FETCH_PRODUCT } from './ActionTypes.js';
 
const INITIAL_DATA = {
	products: []
};

export default function (state = INITIAL_DATA,action) {
	switch(action.type) {
		case FETCH_PRODUCTS:
		return {
			...state,products: action.payload.map(product =>
				({...product,compare:false})
				)
		};

		case FETCH_PRODUCT:
		return {
			...state,products:state.products.map(product => 
				product.id === action.product.id ?
				({...product,compare: !product.compare})
				: product
				)
		};
		default:
		return state
	}
}