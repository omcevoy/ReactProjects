import React, { useContext}  from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 50,
    marginLeft: 25
  }
});

export default function ProductCard(props) {
  const {product, onClick} = props;
  const classes = useStyles();
 
  return (
      <Card className={classes.root} onClick = {onClick}>
        <CardActionArea>
          <CardMedia alt = {product.name} component = 'img' height = '300' src = {product.imageUrl}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {product.name}
            </Typography>
             {product.quantity < 10 ? (
                                      <Typography variant="body2" style = {{color : 'red'}} component="p">
                                          Only {product.quantity} left!
                                      </Typography>) : ( <br /> )}
          </CardContent>
          <Typography variant = 'h3' component = 'h1'>
            ${product.price}
          </Typography>
        </CardActionArea>
      </Card>
  );
}