import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import phone from '../../img/phone.png'
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../img/shop.png';
import useStyles from './styles';
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar className={classes.appBar} position='fixed' color='inherit'>
                <Toolbar>
                    <Typography component={Link} to="/" variant='h6' color='inherit' className={classes.title}>
                        <img src={logo} alt='commerce' height='25px' className={classes.image} /> Clothing Shop
                    </Typography>

                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                            <Typography component={Link} to="/contact" variant='h6' color='inherit' className={classes.contact}>
                                <img src={phone} alt='commerce' height='25px' className={classes.image} />
                            </Typography>
                            <IconButton component={Link} to="/cart" aria-label="show cart items" color='inherit'>
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart />
                                </Badge>

                            </IconButton>
                        </div>
                    )}

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
