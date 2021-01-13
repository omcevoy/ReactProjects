import React, {useState, useContext}  from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    root: {
      maxHeight: 125,
      marginTop: 5
    },
    removeBtn: {
        left: '80%',
        marginTop: -25
    },
    cartText: {
        fontSize: '1.5em'
    }
  });

export default function CartItem (props) {
    const {product} = props;
    const {RemoveFromCart} = useContext(GlobalContext);
    const classes = useStyles();

    const handleRemove = () => {
        RemoveFromCart(product)
    }

    return (
        <Card className = {classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography variant = 'h5' component = 'h5' className = {classes.cartText}>
                        {product.name}
                    </Typography>
                </CardContent>
                <Tooltip title = 'Remove from cart'>
                    <IconButton tip = 'Remove from cart' onClick = {handleRemove} className = {classes.removeBtn}>
                        <RemoveShoppingCartIcon />
                    </IconButton>
                </Tooltip>
            </CardActionArea>
        </Card>
    )
}