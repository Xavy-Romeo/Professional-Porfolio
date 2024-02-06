import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FiDownload } from 'react-icons/fi';

import useStyles from './styles';
import ResumeImg from '../../assets/images/resume.png';
import ResumePdf from '../../assets/files/resume.pdf';

const Resume = () => {
    const classes = useStyles();

    return (
        <section className={`section border-top`} id='resume'>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    Resume
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    My Resume
                </Typography>
            </Grid>
            <Grid container direction='column' alignItems='center'>
                <Box>
                    <img src={ResumeImg} height='100%' alt='resume' />
                </Box>
                <a 
                    download='Resume - Javier Romeo Vazquez'
                    href={ResumePdf}
                    className={`${classes.downloadResumeLink_Resume} view-project-link`}
                    aria-label='download resume button'
                >
                    <Typography className={classes.downloadResume_Resume} variant='body2'>
                        Download My Resume
                        <FiDownload className={classes.downloadIcon_Resume} />
                    </Typography>
                </a>
            </Grid>
        </section>
    );
};

export default Resume;