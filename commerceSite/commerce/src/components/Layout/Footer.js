import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        height: 200,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        marginTop: 20,
        marginBottom: 20
    }
  });
const Footer = () => {
    const classes = useStyles();

    return (
        <div className = {classes.root}>
            <Typography variant = 'body1' color = 'textSecondary' className = {classes.footerText}>
            This site was developed by Owen McEvoy using React and Material UI. It serves as a basic front-end skeleton for an online store. Find the source code on my Github.
        </Typography>
        </div>
        
    )
}

export default Footer;