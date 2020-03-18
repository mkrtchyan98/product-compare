import React  from 'react'
import Product from './Product';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
	root: {
		display:"flex",
		justifyContent:"center",
		gap:"15px",
		flexWrap:"wrap"
        
	},
});


function Productlist  ({products,compare}){
const classes = useStyles();

return ( 
<div className={classes.root}>
	{products.map(product =>
		<Product key={product.id} product={product} compare={compare} />
	 )}
	</div>
);
}
export default Productlist;