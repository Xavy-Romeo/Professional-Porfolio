import { useEffect } from 'react';
import gsap, { Power4 } from 'gsap';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MdWavingHand } from 'react-icons/md';
import { VscFoldDown } from 'react-icons/vsc';

import useStyles from './styles';
import ProfilePic from '../../assets/images/profile.jpg';


const Top = () => {
    const classes = useStyles();

    useEffect(() => {
        const tl = gsap.timeline();
        tl
            .fromTo('.welcome', 
                {y:100, opacity: 0}, 
                {y: 0, opacity: 1, delay: 4.5, duration: 2.5},
            )
            .fromTo('.hi-title', 
                {y:100, opacity: 0}, 
                {y: 0, opacity: 1, duration: 2.5},
                '-=2.5'
            )
            .fromTo('.web-dev-title', 
                {y:100, opacity: 0}, 
                {y: 0, opacity: 1, duration: 2.5},
                '-=2.5'
            )
            .fromTo('.top-p', 
                {opacity: 0},
                {opacity: 1, duration: 2},
                '-=1'
            )
            .fromTo('.say-hi-link', 
                {opacity: 0},
                {opacity: 1, duration: 2},
                '-=2'
            )
            .fromTo('.square', 
                {opacity: 0},
                {opacity: 1, duration: 2},
                '-=2'
            )
            .fromTo('.profile-img', 
                {y: -400, height:0, opacity: 0}, 
                {y: 0, height:'100%', opacity: 1, duration: 1.2},
                '-=1.2'
            )
            .fromTo('.profile-img-div', 
                {boxShadow: 'none'}, 
                {boxShadow: '0px 6px 6px -3px rgba(0,0,0,.2), 0px 10px 14px 1px rgba(0,0,0,.14), 0px 4px 18px 3px rgba(0,0,0,.12)', 
                    duration:.5, ease: Power4.easeInOut
                }
            )
            .fromTo('.scroll-down', 
                {opacity: 0}, 
                {opacity: 1, color: 'rgb(246,79,89)', borderColor: 'rgb(246,79,89)', duration: 1.5},
                '-=1'
            )
            .to('.scroll-down', 
                {y: 50, duration: 1.5, repeat: -1, yoyo: true}
            )
            .fromTo('.profile-img-back', 
                {opacity: 0}, 
                {opacity: 1, 
                    duration: 1
                },
                '-=3'
            )
        ;
    }, []); 

    return (
        <section className={classes.topSection_Top} id='home'>
            <Grid container className={classes.mainGrid_Top} justifyContent='space-between' alignItems='center'>
                <Grid item className={classes.infoGrid_Top} xs={12} md={7}>
                    <Grid container direction='column' justifyContent='center'>
                        <Typography className={`${classes.welcome_Top} welcome`} variant='subtitle2'>
                            Welcome
                        </Typography>    
                        <Typography className={`${classes.hiTitle_Top} hi-title`} variant='h2'>
                            Hi, I'm Xavy Romeo
                        </Typography>
                        <Typography className={`${classes.webDevTitle_Top} web-dev-title`} variant='h2'>
                            {/* Front End  */}
                            Web Developer
                        </Typography>
                        <Typography className={`${classes.info_Top} top-p`}>
                            I develop and build web applicatons specific to your needs. Click Say Hi below to let me know how my skills can work for you.
                        </Typography>
                        <a href='#contact' className={classes.sayHiLink_Top}>
                            <Typography className={`${classes.sayHiLinkSpan_Top} say-hi-link`} variant='subtitle2' component='span'>
                                Say Hi 
                                <MdWavingHand className={classes.handWave_Top} />
                            </Typography>
                        </a>
                        {/* <Typography variant='h3' className={`${classes.signature_Top} text-theme`}>
                            Xavy Romeo
                        </Typography> */}
                    </Grid>
                </Grid>
                <Grid item className={classes.imageGrid_Top} xs={12} md={5}>
                    <Grid container className={classes.imageContainer_Top} alignItems='center' justifyContent='flex-end'>
                        <Box className={`${classes.imageDiv_Top} profile-img-div`}>
                           <img 
                                src={ProfilePic}
                                className={`${classes.image_Top} profile-img`} 
                                alt='profile' 
                                width='100%'
                                height='100%'
                            />
                        </Box>
                        <Box className={`${classes.imageBack_Top} profile-img-back`} />
                    </Grid>
                </Grid>
                <Box className={classes.scrollDownBox_Top}>
                    <Typography className={`${classes.scrollDown_Top} scroll-down`}>
                        <VscFoldDown className={classes.scrollIcon_Top} />
                        Scroll Down
                    </Typography>
                </Box>
                <Box className={`${classes.square_Top} square`} />
            </Grid>
        </section>
    );
};

export default Top;