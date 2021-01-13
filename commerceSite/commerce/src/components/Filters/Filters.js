import React, { useContext}  from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterList from './FilterList';
import PriceList from './PriceList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function Filters() {
  const {products} = useContext(GlobalContext);
  let companies = products.map((product) => (product.company))
  let types = products.map((product) => (product.type))
  const classes = useStyles();


  return (
    <div className = {classes.root}>
      <Accordion default>
        <AccordionSummary expandIcon = {<ExpandMoreIcon />} aria-controls = 'panel1c-content' id = 'panel1c-header'>
          <div className = {classes.column} />
            
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Filters</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className = {classes.details}>
          <div className = {classes.column}>
            <Typography className={classes.secondaryHeading}>Company</Typography>
            <FilterList filterChoices = {companies} filterType = 'company'/>
          </div>
          <divider />
          <div className = {classes.column}>
            <Typography className={classes.secondaryHeading}>Product Type</Typography>
            <FilterList filterChoices = {types} filterType = 'type'/>
          </div>
          <divider />
          <div className = {classes.column}>
            <Typography className={classes.secondaryHeading}>Price</Typography>
            <PriceList />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}