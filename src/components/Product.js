import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
	root: {
		maxWidth: 300,

	},

});

 function Product({product, compare}) {
const classes = useStyles();
return(
    <Card key={product.id} className={classes.root}>
    		<CardActionArea>
    		<CardMedia component="img" 
    					alt="Produxct"
    					height="240"
    					image={product.image}
    					title={product.name}
    					/>
    					<CardContent>
    					<Typography gutterButton variant="h5" component="h2">
    					 {product.name}
    					 </Typography>
    					  <Typography variant="body2" color="textSecondary" component="p">
    					  {product.price}
    					  </Typography>
                           <Typography variant="subtitle" color="textSecondary" component="p">
                          {product.description}
                          </Typography>
    					 </CardContent>
    					 </CardActionArea>
    					 <CardActions>
    					 <Button size="small" color="primary"  onClick={() => compare(product)}>
    					               {product.compare ? "Remove" : "Compare"}
    					 </Button>
            				</CardActions>
            				</Card>
          );
      }

export default Product
	