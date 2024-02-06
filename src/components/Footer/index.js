import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles();
    
    return (
        <footer className={classes.footer_Footer}>
            <Container maxWidth='xl'>
                <Grid 
                    container 
                    className={classes.footerContainer_Footer} 
                    justifyContent='center' 
                    alignItems='center' 
                >
                    <Grid item>
                        <Grid container className={classes.linksContainer_Footer}>
                            <a href='https://github.com/Xavy-Romeo' target='_blank' rel='noopener noreferrer'>
                                <FaGithub className={classes.icon_Footer} />
                            </a>
                            <a href='https://www.linkedin.com/in/javier-romeo-vazquez/' target='_blank' rel='noopener noreferrer'>
                                <FaLinkedin className={classes.icon_Footer} />
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction='column'>
                            <Typography className={classes.copyText_Footer} variant='caption'>
                                &copy; {new Date().getFullYear()} Xavy Romeo 
                            </Typography>
                            <Typography variant='caption'>
                                All Rights Reserved
                            </Typography>
                        </Grid>                   
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
