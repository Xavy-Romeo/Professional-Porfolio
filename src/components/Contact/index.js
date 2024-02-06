import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { RiSendPlaneFill } from 'react-icons/ri';

import useStyles from './styles';
import CodingPic from '../../assets/images/coding-pic.jpg';

const Contact = () => {
    const classes = useStyles();

    return (
        <section className={`section border-top`} id='contact'>
            {/* <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    Contact Me
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    Get In Touch
                </Typography>
            </Grid> */}
            <Grid container className={classes.sectionTitleContainer}>
                <Typography className={classes.sectionSubtitle} variant='body2'>
                    Contact Me
                </Typography>
                <Typography className={classes.sectionTitle} variant='h2'>
                    Get In Touch
                </Typography>
            </Grid>
            <Box className={classes.contactContainer_Contact}>
                <Box>
                    <img src={CodingPic} className={classes.contactImg_Contact} width='100%' alt='laptop with code' />
                </Box>
                <Grid container className={classes.contactFormGrid_Contact} justifyContent='center'>
                    <form 
                        className={classes.contactForm_Contact}
                        name='contact'
                        method='post'
                    >
                        <input type='hidden' name='form-name' value='contact' />
                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel_Contact} variant='subtitle1'>
                                Name:
                            </Typography>
                            <input 
                                className={classes.contactFormInputs_Contact} 
                                type='text' 
                                placeholder='Your Name' 
                                required
                                name='Name'
                            />
                        </Grid>
                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel_Contact} variant='subtitle1'>
                                Email:
                            </Typography>
                            <input 
                                className={classes.contactFormInputs_Contact} 
                                type='email' 
                                placeholder='Your Email' 
                                required
                                name='Email'
                            />
                        </Grid>
                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel_Contact} variant='subtitle1'>
                                Message:
                            </Typography>
                            <textarea 
                                className={`${classes.contactFormInputs_Contact} ${classes.textArea_Contact}`} 
                                placeholder='Your Message Here' 
                                rows='5'
                                required
                                name='Message' 
                            />
                        </Grid>
                        <Box>
                            <button className={classes.sendMessageBtn_Contact} type='submit'>
                                <Typography className={classes.sendMessage_Contact}>
                                    Send Message
                                    <RiSendPlaneFill className={classes.sendIcon_Contact} />
                                </Typography>
                            </button>
                        </Box>
                    </form>
                </Grid>
            </Box>
        </section>
    );
};

export default Contact;