import React from 'react';
import './compare.css';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles({
  root : {
    backgroundColor:'#fff',
    borderRadius:' 5px',
    overflow:' hidden',
    boxShadow: '0 13px 21px -5px rgba(0,0,0,0.5)',
    border: '1px solid #eee',
    fontSize: '18px',
    tableLayout:'fixed'
  },
  bgRed : {
    backgroundColor :'red'
  },
  bgGreen : {
    backgroundColor :'green'
  },
  bgBlue : {
    backgroundColor :'blue'
  },

});

function Compare({products}) {
  const classes = styles();
return (
  <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
 className={classes.root}>

        <Grid item xs>
          <table className="table">
        <thead className="thead-default">
          <tr>
            <td />
           <th>Price</th>
           <th>Condition</th>
          </tr>
        </thead>
        <tbody>
        <tr>
        <th>
             {products.map(product =>
              <p key={product.id}>
                {product.name}
              </p>
             )}
             </th>

            <td>
            {products.map(product =>
              <p key={product.id} className="text-center">{product.price}</p>
            )}
            </td>
            <td>
            {products.map(product =>
              <p key={product.id} className={product.condition === "Frozen" ? classes.bgRed : classes.bgGreen}>
                {product.condition}
              </p>
            )}
            </td>
          </tr>
        </tbody>
      </table>
    </Grid>
  </Grid>)};

export default Compare;