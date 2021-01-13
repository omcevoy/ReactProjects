import React, {useEffect, useContext}  from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import ProductDialog from './ProductDialog';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    gridDiv: {
        width: '100%'
    }
  });
export default function ProductGrid () {
    const {products, GetProducts, companyFilters, typeFilters, priceFilters} = useContext(GlobalContext);
    const classes = useStyles();

    useEffect(() => { GetProducts() }, []);

    
    let filteredProducts = products;
    let priceFiltered;
    let productMarkup;

    switch(priceFilters) {
        case "0-100":
            priceFiltered = filteredProducts.filter(product => product.price < 100);
            break;
        case "100-200":
            priceFiltered = filteredProducts.filter(product => product.price >= 100 && product.price < 200)
            break;
        case "200":
            priceFiltered = filteredProducts.filter(product => product.price >= 200);
            break;
        default:
            priceFiltered = filteredProducts;
            break;
    }
    // Really ugly filtering logic...
    if (companyFilters.length) {
        filteredProducts = priceFiltered.filter(function(item, index) {
                return companyFilters.includes(item.company)
        })
        if (typeFilters.length){
            let doubleFilter = priceFiltered.filter(function(item, index) {
                return typeFilters.includes(item.type)
            })
            productMarkup = doubleFilter.map((product, index) => (
                <ProductDialog product = {product} key = {index} />
            ))
        } else {
            productMarkup = filteredProducts.map((product, index) => (
                <ProductDialog product = {product} key = {index} />
            ))
        }
    } else {
        if (typeFilters.length){
            let doubleFilter = priceFiltered.filter(function(item, index) {
                return typeFilters.includes(item.type)
            })
                productMarkup = doubleFilter.map((product, index) => (
                    <ProductDialog product = {product} key = {index} />
                ))
            } else {
                productMarkup = priceFiltered.map((product, index) => (
                    <ProductDialog product = {product} key = {index} />
                ))
            }
    }
   
    return (
        <div className = {classes.gridDiv}>
             <Grid container className={classes.root} direction = 'row' justify = 'center' alignItems = 'baseline' spacing = {4}>
                    {productMarkup.map((product, index) => (
                        <Grid key = {index} item>
                            {product}
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}