import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    image: {
        height: 500, 
    },
    formControl: {
        minWidth: 120,
    },
    title: {
        fontSize: '2.25em'
    },
    price: {
        marginLeft: 10,
    },
    cartButton: {
       marginTop: 12,
       fontSize: 16,
    },
    menuPaper: {
        maxHeight: 200,
        fontSize: 16
    }
  });

export default function ProductDialog(props) {
    const {product} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [sizeOpen, setSizeOpen] = React.useState(false);
    const [size, setSize] = React.useState('');
    const {AddToCart} = useContext(GlobalContext);

    const handleAdd = () => {
        AddToCart(product)
      }
    const handleClick = () => {
        setOpen(true);
      };
    
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }
    const handleSizeOpen = () => {
        setSizeOpen(true)
    }
    const handleSizeClose = () => {
        setSizeOpen(false)
    }
      const handleClose = () => {
          setOpen(false)
      };
    let selectSize = product.sizes.map((size, index) => (
        <MenuItem value = {size} key = {index}>{size}</MenuItem>
    ))
    return (
        <div className = {classes.root}>
            <ProductCard product = {product} onClick = {handleClick} /> 
            <Dialog open = {open} onClose = {handleClose} fullWidth = {true} maxWidth = {'sm'}>
                <DialogTitle>
                    <Typography variant = 'h2' className = {classes.title}>
                        {product.name}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing = {1} justify = 'center'>
                        <Grid item align = 'center'>
                             <img src = {product.imageUrl} className = {classes.image} />
                        </Grid>
                    </Grid> 
                </DialogContent>
                <DialogActions dividers>
                    <Grid container justify = 'center' spacing = {2}>
                        <Grid item xs className = {classes.price}>
                             <Typography variant = 'h3' color = 'textSecondary'>
                                    ${product.price}
                                </Typography>
                        </Grid>
                        <Grid item align = 'center' xs>
                            <FormControl className = {classes.formControl}>
                                <InputLabel>Select Size</InputLabel>
                                <Select open = {sizeOpen} onClose = {handleSizeClose} onOpen = {handleSizeOpen} 
                                        value = {size} onChange = {handleSizeChange} MenuProps = { { classes : {paper: classes.menuPaper} }}>
                                    <MenuItem value = ""/>
                                    {selectSize}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item align = 'center' xs>
                            <Button variant = 'outlined' onClick = {handleAdd} className = {classes.cartButton}>
                                Add to Cart
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>
        
    )
}


