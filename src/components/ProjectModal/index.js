import useStyles from './styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { IoRocketSharp, IoCloseSharp } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, handleClose }) => {
    const classes = useStyles();

    return (
        <Box className={classes.mainModalContainer_ProjectModal}>
            <Box 
                onClick={handleClose}
                className={classes.closeModalButton_ProjectModal}
            >
                <IoCloseSharp className={classes.closeIcon_ProjectModal} />
            </Box>
            <Grid container className={classes.modalContainer_ProjectModal} justifyContent='center' alignItems='center'>
                <Typography variant='h3' className={`${classes.projectTitle_ProjectModal}`}>
                        {project.name}
                </Typography>
                <Grid container>
                    <Grid item className={classes.mainImgContainer_ProjectModal}>
                        <Box className={classes.imgContainer_ProjectModal}>
                            <a href={project.site} target='_blank' rel='noopener noreferrer'>
                                <img src={project.image} height='100%' width='100%' alt={project.name}/>
                                <Box className={classes.imgHoverContainer_ProjectModal}>
                                    <Typography className={classes.hoverText_ProjectModal} variant='h3'>
                                        <IoRocketSharp className={classes.rocketMarginRight_ProjectModal} style={{marginRight: '10px'}} />
                                        Launch Live App
                                        <IoRocketSharp className={classes.rocketMarginLeft_ProjectModal} style={{marginLeft: '10px'}} />
                                    </Typography> 
                                </Box>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.infoContainer_ProjectModal} direction='column' justifyContent='center'>
                            <Typography className={classes.descriptionTitle_ProjectModal} variant='body2'>
                                Project Description:
                            </Typography>
                            <Typography className={classes.infoText_ProjectModal} variant='body2'>
                                {project.description}
                            </Typography>
                            <Typography className={classes.techUsedTitle_ProjectModal} variant='body2'>
                                Technology Used: 
                            </Typography>
                            <Typography className={classes.infoText_ProjectModal} variant='body2'>
                                {project.languages}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.linksContainer_ProjectModal}>
                            <a href={project.site} target='_blank' rel='noopener noreferrer' className={classes.launchLink_ProjectModal}>
                                <Typography variant='subtitle1' className={`${classes.linkTypography_ProjectModal} view-project-link`}>
                                    <IoRocketSharp className={classes.linkIcon_ProjectModal} />
                                    Launch Live App
                                </Typography>
                            </a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className={classes.githubLink_ProjectModal}>
                                <Typography variant='subtitle1' className={`${classes.linkTypography_ProjectModal} view-project-link`}>
                                    <FaGithub className={classes.linkIcon_ProjectModal} />
                                    View GitHub Repo
                                </Typography>
                            </a>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProjectModal;