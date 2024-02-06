import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { BsArrowUpRight } from 'react-icons/bs';

import useStyles from './styles';
import ProjectModal from '../ProjectModal';
import projects from '../../utils/projects';

const Portfolio = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
  
    const handleOpen = (project) => {
      setOpen(true);
      setModalProject(project);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [modalProject, setModalProject] = useState({});
    
    return (
        <section className={`section border-top`} id='portfolio'>
            <Modal
                className={classes.modal_Project}
                open={open}
                onClose={handleClose}
            >
                <ProjectModal 
                    project={modalProject}
                    handleClose={handleClose}
                />
            </Modal>

            {/* <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    Portfolio
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    My Work
                </Typography>
            </Grid> */}
            <Grid container className={classes.sectionTitleContainer}>
                <Typography className={classes.sectionSubtitle} variant='body2'>
                    Portfolio
                </Typography>
                <Typography className={classes.sectionTitle} variant='h2'>
                    My Work
                </Typography>
            </Grid>
            <Grid container direction='column'>
                {/* <Grid container className={classes.sampleWorkTitleContainer_Portfolio} direction='column' alignItems='center'>
                    <Typography className={classes.sampleWorkTitle_Portfolio} variant='h4'>
                        Some Examples Of My Work
                    </Typography>
                    <Typography className={classes.sampleWorkText_Portfolio} variant='body2'>
                        Examples include my knowledge in React, JavaScript, Database implementation, internal and external API integration, 
                        API access control, global and local state management, payment processing, CSS, and Responsive Design.
                    </Typography>
                </Grid>                     */}
                <Grid container spacing={5}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} lg={3} key={index}>
                            <Grid 
                                container 
                                className={classes.projectGrid_Portfolio}
                                direction='column' 
                                justifyContent='center' 
                                alignItems='center' 
                            >
                                <Box 
                                    onClick={() => handleOpen(project)}
                                    className={classes.imgProjectContainer_Portfolio}
                                >
                                    <img src={project.image} className={classes.imgProject_Portfolio} height='100%' width='100%' alt={project.name} />
                                    <Box className={classes.imgHoverContainer_Portfolio}>
                                        <Box className={classes.infoProjectHoverContainer_Portfolio}>
                                            <Grid 
                                                container 
                                                className={classes.infoProjectHover_Portfolio} 
                                                direction='column' 
                                                justifyContent='center' 
                                                alignItems='center' 
                                            >
                                                <Typography variant='subtitle2'>
                                                    {project.name}
                                                </Typography>
                                                
                                                <Typography className={classes.viewProjectHover_Portfolio} variant='caption'>
                                                    View Project
                                                </Typography>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                                <Grid container className={classes.projectInfoContainer_Portfolio} direction='column' justifyContent='space-between'>
                                    <Grid container direction='column'>
                                        <Typography className={`${classes.projectAppTitle_Project} text-theme`} variant='body2'>
                                            {project.type}
                                        </Typography>
                                        <Typography className={classes.projectTitle_Project} variant='h5'>
                                            {project.name}
                                        </Typography>
                                        <Typography className={classes.techUsed_Project} variant='caption'>
                                            Technologies Used: 
                                        </Typography>
                                        <Typography className={classes.techUsedInfo_Project} variant='caption'>
                                            {project.languages}
                                        </Typography>
                                    </Grid>
                                    <Box className={classes.viewProjectContainer_Project}>
                                        <Box onClick={() => handleOpen(project)} className={classes.viewProjectLink_Project}>
                                            <Typography className={`${classes.viewProjectLinkTypography_Project} view-project-link`} variant='caption'>
                                                View Project
                                                <BsArrowUpRight className={classes.viewProjectArrow_Portfolio} />
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>

                <Grid container className={classes.seeMoreContainer_Portfolio} justifyContent='center'>
                    <Typography variant='body2'>
                        Want to see More??? 50+ projects. Visit my GitHub 
                        <a 
                            href='https://github.com/Xavy-Romeo' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className={classes.seeMoreHereLink_Portfolio}
                        >
                            Here!
                        </a>
                    </Typography>
                </Grid>
                
            </Grid>            
        </section>
    );
};

export default Portfolio;