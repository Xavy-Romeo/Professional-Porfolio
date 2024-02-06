import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FaQuoteLeft } from 'react-icons/fa';

import useStyles from './styles';

const Testimonials = () => {
    const classes = useStyles();
    
    return (
        <section className={`section border-top`} id='testimonials'>
            {/* <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    Testimonials
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    Kind Words
                </Typography>
            </Grid> */}
            <Grid container className={classes.sectionTitleContainer}>
                <Typography className={classes.sectionSubtitle} variant='body2'>
                    Testimonials
                </Typography>
                <Typography className={classes.sectionTitle} variant='h2'>
                    Kind Words
                </Typography>
            </Grid>
            <Grid 
                container 
                className={classes.testimonialsContainer_Testimonials}
                justifyContent='space-between' 
                spacing={5} 
            >
                <Grid item xs={12} lg={6}>
                    <Grid container className={classes.testimonialContainer_Testimonials}>
                        <FaQuoteLeft className={classes.quoteIcon_Testimonials} />
                        <Typography className={classes.quoteText_Testimonials} variant='caption'>
                            Javier and I were classmates at UCLA’s Full-Stack Coding Bootcamp and we worked together on several classroom assignments and a group project. 
                            Javier was always up to take on new challenges and did not give up in the face of new problems. We worked together creating Manage-it, a 
                            Full-Stack task manager application where Javi wrote the Front End Javascript logic. Javi was able to seamlessly create the functionality for 
                            our application and tie the Front End and Back End of our application together. Javi was a pleasure to work with and would be an asset to any 
                            company he is a part of. 
                        </Typography>
                        <Box className={classes.imgBox_Testimonials}>
                            <img 
                                src='https://avatars.githubusercontent.com/u/59941960?v=4' 
                                className={classes.img_Testimonials}
                                height='100%'
                                alt='Celina Profile'
                            />
                        </Box>
                        <Box className={classes.nameContainer_Testimonials}>
                            <Typography className={classes.name_Testimonials}>
                                Celina Louissaint
                            </Typography>
                            <Typography variant='body2'>
                                Manage-It Project
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container className={classes.testimonialContainer_Testimonials}>
                        <FaQuoteLeft className={classes.quoteIcon_Testimonials} /> 
                        <Typography className={classes.quoteText_Testimonials} variant='caption'>
                            Independent, efficient, and easy to work with. Xavy and I were in the UCLA Extension bootcamp together. Along with Celina, we worked together to 
                            create Manage It. Like a well oiled machine, Xavy worked on the api routes quickly and independently. Xavy was very good at communicating any 
                            issues he had as well as making time to meet up in order to resolve those pesky merge conflicts. 
                        </Typography>
                        <Box className={classes.imgBox_Testimonials}>
                            <img 
                                src='https://avatars.githubusercontent.com/u/78234270?v=4' 
                                className={classes.img_Testimonials}
                                height='100%'
                                alt='Blaze Profile'
                            />
                        </Box>
                        <Box className={classes.nameContainer_Testimonials}>
                            <Typography className={classes.name_Testimonials}>
                                Blaze Lim
                            </Typography>
                            <Typography variant='body2'>
                                Manage-It Project
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            
        </section>
    );
};

export default Testimonials;
