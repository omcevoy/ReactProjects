import React, {useState, useContext}  from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import CartItem from './CartItem';

const useStyles = makeStyles({
  popover: {
    maxHeight: 345,
    width: 1000
  },
  orderBtn: {
    left: '60%',
    marginTop: -50
  },
  empty: {
    textAlign: 'center',
    marginTop: 10
  },
  total: {
    marginTop: 40,
    marginLeft: 5
  }
});


export default function ShoppingCart () {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const {cart} = useContext(GlobalContext);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        console.log(cart);
        setAnchorEl(null);
      };
    let cartTotal = cart.reduce((prev, next) => prev + next.price, 0)
    let cartMarkup = cart.length ? (
                        cart.map((item, index) => (
                          <CartItem product = {item} key = {index} />
                        )))
                      : (
                          <Typography variant = 'h4' component = 'h4' className = {classes.empty}>
                            {'Your cart is empty'}
                          </Typography>
                      );
    let cartOptions = cartTotal > 0 ? (
                <div>
                  <Typography className = {classes.total} variant = 'h5' component = 'h5'>
                    Total: ${cartTotal}
                  </Typography>
                  <Button className = {classes.orderBtn}>
                    Order now
                  </Button>
                </div>
                  
    ) : (
      <br />
    )
        
    
    return (
        <div>
              <IconButton
                aria-label="Shopping Cart"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Badge badgeContent = {cart.length}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Popover  open={open} PaperProps={{
                                                  style: { width: 300},
                                                }}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleClose}
              disableRestoreFocus>
                  {cartMarkup}
                  {cartOptions}
              </Popover>
            </div>
    )
}