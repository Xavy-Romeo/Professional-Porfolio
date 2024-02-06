import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

import useStyles from './styles';
import Profile2 from '../../assets/images/profile2.jpg';
// import Bootstrap from '../../assets/images/bootstrap.svg';
import Css from '../../assets/images/css.svg';
import Express from '../../assets/images/express.svg';
import Git from '../../assets/images/git.svg';
import GraphQL from '../../assets/images/graphql.svg';
import Html from '../../assets/images/html.svg';
import Java from '../../assets/images/java.svg';
// import Jquery from '../../assets/images/jquery.svg';
import Js from '../../assets/images/js.svg';
// import Litmus from '../../assets/images/litmus.svg';
// import Mailchimp from '../../assets/images/mailchimp.svg';
import MongoDB from '../../assets/images/mongo.svg';
// import Mui from '../../assets/images/mui.svg';
// import Php from '../../assets/images/php.svg';
import PostgreSQL from '../../assets/images/postgresql.svg';
import ReactIcon from '../../assets/images/react.svg';
import Sass from '../../assets/images/sass.svg';
import Spring from '../../assets/images/spring.svg';
// import WordPress from '../../assets/images/wordpress.svg';
import ResumePdf from '../../assets/files/resume.pdf';

const About = () => {
    const classes = useStyles();
    
    const skills = [
        {name: 'Java', image: Java},
        {name: 'Spring Boot', image: Spring},
        {name: 'React', image: ReactIcon},
        {name: 'JavaScript', image: Js},
        {name: 'Html', image: Html},
        {name: 'Css', image: Css},
        {name: 'PostgreSQL', image: PostgreSQL},
        {name: 'MongoDB', image: MongoDB},
        {name: 'Sass', image: Sass},
        // {name: 'JQuery', image: Jquery},
        // {name: 'Material-UI', image: Mui},
        // {name: 'Bootstrap', image: Bootstrap},
        {name: 'Express', image: Express},
        {name: 'GraphQL', image: GraphQL},
        {name: 'Git', image: Git},
        // {name: 'Php', image: Php},
        // {name: 'Mailchimp', image: Mailchimp},
        // {name: 'Litmus', image: Litmus},
        // {name: 'Wordpress', image: WordPress}
    ];

    return (
        <section className={`section border-top`} id='about'>
            {/* <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    About Me
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    Know Me More
                </Typography>
            </Grid> */}
            <Grid container className={classes.sectionTitleContainer}>
                <Typography className={classes.sectionSubtitle} variant='body2'>
                    About Me
                </Typography>
                <Typography className={classes.sectionTitle} variant='h2'>
                    Know Me More
                </Typography>
            </Grid>
            <Box className={classes.aboutTextContainer_About}>
                <Typography className={classes.aboutText_About} variant='body1'>
                    <span className={classes.aboutTextSpan_About}> I am Xavy Romeo, a Web Developer </span>
                    with a degree in Business Economics from UC Irvine and a 
                    Full Stack Web Development certificate from UCLA
                    Extension Boot Camps. I can help visions and ideas come to life.                             
                </Typography>   
            </Box>
            <Grid container spacing={2}>
                <Grid item className={classes.imgSection_About} xs={12} lg={5}>
                    <Box className={classes.profileImgContainer_About}>
                        <img src={Profile2} className={classes.profileImg_About} height='100%' alt='Xavy Smiling!'/>
                    </Box>
                    <Grid container className={classes.linkContainer_About} direction='column' alignItems='center'>
                    <Box className={`${classes.downloadContainer_About} blink`}>
                            <Box>
                                <a 
                                    download='Resume - Javier Romeo Vazquez'
                                    href={ResumePdf}
                                    className={`${classes.downloadResumeLink_About} view-project-link`}
                                    aria-label='download resume button'
                                >
                                    <Typography className={classes.downloadResume_About} variant='body2'>
                                        Download My Resume
                                        <FiDownload className={classes.downloadIcon_About} />
                                    </Typography>
                                </a>
                            </Box>
                        </Box> 
                        <Box>
                            <a href='mailto:javier.vazquez.sse@gmail.com' className={classes.emailContainer_About}>
                                <Typography className={classes.emailTitle_About}>
                                    <MdEmail className={classes.emailIcon_About} />
                                    Email: 
                                </Typography>
                                <Typography className={classes.email_About} variant='body2'>
                                    Javier.Vazquez.SSE@gmail.com
                                </Typography>
                            </a>
                        </Box>   
                        <Grid container justifyContent='center'>
                            <a href='https://github.com/Xavy-Romeo' target='_blank' rel='noopener noreferrer'>
                                <FaGithub className={classes.socialIcon_About} />
                            </a>
                            <a href='https://www.linkedin.com/in/javier-romeo-vazquez/' target='_blank' rel='noopener noreferrer'>
                                <FaLinkedin className={classes.socialIcon_About} />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Grid container direction='column'>
                        <Grid container direction='column' alignItems='center'>
                            <Typography className={`${classes.mySkillsTitle_About}`} variant='h5'>
                                My Skills
                            </Typography>
                            <Grid container className={`skills-bar-container`}>
                                {skills.map((skill, index) => (
                                    <Grid item xs={4} sm={2} key={index}>
                                        <Grid container className={classes.skillContainer_About} direction='column' alignItems='center'>
                                            <Box >
                                                <img 
                                                    src={skill.image} 
                                                    height='100%'
                                                    width='100%'
                                                    alt={skill.name} 
                                                />
                                            </Box>
                                            <Box>
                                                <Typography className={classes.skillName_About} variant='caption'>
                                                    {skill.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        
                        <Grid container className={classes.experienceContainer_About}>
                            <Grid item xs={12} sm={4}>
                                <Grid container className={classes.experienceColumn_About} direction='column'>
                                    <Typography className={classes.aboutTitles_About} variant='subtitle1'>
                                        Education
                                    </Typography>
                                    <Box className={classes.aboutTitlesBorder_About} />
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Full Stack Web Development
                                        </Typography>
                                        <Typography variant='body2'>
                                            UCLA
                                        </Typography>
                                        <Typography variant='caption'>
                                            Certificate
                                        </Typography>
                                    </Grid>
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Business Economics
                                        </Typography>
                                        <Typography variant='body2'>
                                            UCI
                                        </Typography>
                                        <Typography variant='caption'>
                                            Bachelor's Degree
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grid container className={classes.experienceColumn_About} direction='column'>
                                    <Typography className={classes.aboutTitles_About} variant='subtitle1'>
                                        Work Experience
                                    </Typography>
                                    <Box className={classes.aboutTitlesBorder_About} />
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Web Developer       
                                        </Typography>
                                        <Typography variant='body2'>
                                            Social Ordeals
                                        </Typography>
                                        <Typography variant='caption'>
                                            Glendora, CA 
                                        </Typography>
                                    </Grid>
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Accounts Payable - Leasing
                                        </Typography>
                                        <Typography variant='body2'>
                                            Forever 21 (Headquarters)
                                        </Typography>
                                        <Typography variant='caption'>
                                            Los Angeles, CA 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grid container className={classes.experienceColumn_About} direction='column'>
                                    <Typography className={classes.aboutTitles_About} variant='subtitle1'>
                                        Online Training
                                    </Typography>
                                    <Box className={classes.aboutTitlesBorder_About} />
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Web Development
                                        </Typography>
                                        <Typography variant='body2'>
                                            CodingPhase
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </section>
    );
};

export default About;
