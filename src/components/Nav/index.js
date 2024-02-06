import { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BiMenu } from 'react-icons/bi';

import useStyles from './styles';

const Nav = () => {
    const classes = useStyles();

    const navLinks = [
        {name: 'Home', href: '#home'},
        {name: 'About Me', href: '#about'},
        {name: 'Portfolio', href: '#portfolio'},
        // {name: 'Resume', href: '#resume'},
        {name: 'Testimonials', href: '#testimonials'},
        {name: 'Contact Me', href: '#contact'}
    ];

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const closeMenu = () => {
        setAnchorEl(null);
    };

    const setActiveSection = () => {
        const links = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');
        let length = sections.length;

        while(--length && window.scrollY + 80 < sections[length].offsetTop){}
        links.forEach(link => link.classList.remove('activeLink'));
        links[length].classList.add('activeLink');
    };

    useEffect(() => {
        window.addEventListener('scroll', setActiveSection);        
    }, []);

    return (
        <Box>
            <Hidden lgUp>
                <Box style={{display: 'flex', alignItems: 'center'}}>
                    <BiMenu onClick={openMenu} className={classes.menuIcon_Nav} />
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                    >
                        {navLinks.map((link, index) => (
                            <MenuItem className={classes.listItem_Nav} onClick={() => {setAnchorEl(null)}} key={index}>
                                <a 
                                    href={link.href}
                                    className={`${classes.navLink_Nav} nav-link`}
                                >
                                    <Typography className={`${classes.navLinkSpan_Nav} nav-link-span`} variant='caption' component='span'>
                                        {link.name}
                                    </Typography>
                                </a>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Hidden>
            <Hidden mdDown>
                <nav>
                    <Box className={classes.container_Nav}>
                        <ul>
                            <Grid container >
                                {navLinks.map((link, index) => (
                                    <li className={classes.listItem_Nav} key={index}>
                                        <a 
                                            href={link.href}
                                            className={`${classes.navLink_Nav} nav-link`}
                                        >
                                            <Typography className={`${classes.navLinkSpan_Nav} nav-link-span`} variant='caption' component='span'>
                                                {link.name}
                                            </Typography>
                                        </a>
                                    </li>
                                ))}
                            </Grid>
                        </ul>
                    </Box>
                </nav>
            </Hidden>
        </Box>
    );
};

export default Nav;