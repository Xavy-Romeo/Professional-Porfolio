import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PulseLoader from "react-spinners/PulseLoader";

import useStyles from './styles';
import Logo from '../../assets/images/xr-logo.png';

const Loader = () => {
    const classes = useStyles();

    const [ loader, setLoader ] = useState(true);
    // const [ fade, setFade ] = useState(false);
    const [ fade, ] = useState(false);

    useEffect(() => {
        // apply fade to loader
        // setTimeout(() => {
        //     setFade(true);
        // }, 500);

        // remove loading screen
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

    return (
        <Box className={loader ? `${classes.loadingPage_Loader} fade-out-page` : classes.loaded_Loader}>
            <Grid 
                container 
                className={!fade ? `${classes.loaderContainer_Loader} fade-out` : classes.loaded_Loader}
                direction='column'
                alignItems='center'
            >
                <Typography className={classes.loadingTitle_Loader} variant='h1'>
                    Xavy Romeo
                </Typography>
                <Box>
                    <PulseLoader size={15} color='rgb(255, 35, 35)' />
                </Box>
                <Box>
                    <img src={Logo} className={classes.loadingLogo_Loader} alt='loading logo'/>  
                </Box>
            </Grid>
            <Box className={classes.rightEffects_Loader} />
            <Box className={classes.leftEffects_Loader} />
        </Box>
    );

};

export default Loader;